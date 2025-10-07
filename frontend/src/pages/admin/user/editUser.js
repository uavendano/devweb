import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import ValidationErrors from '../../../components/services/validationErrors.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function EditUser() {
    // Configuramos hooks
    const { id } = useParams();
    // Modal
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);   
    const [validationErrors, setValidationErrors] = useState([]); // Estado para almacenar errores de validación del backend
    const navigate = useNavigate();
    // Validación de texto para los inputs
    const isValidName = (text) => /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(text);    
    const isValidUsername = (text) => /^[A-Za-z0-9]*$/.test(text);
    const isDescriptionValid = (text) => /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ,.\-_\s]*$/.test(text);
    const isPasswordValid = (text) => text.length >= 7;

    const [user, setUser] = useState({        
        name: '', 
        lastname: '',
        username: '',
        email: '',
        password: '',    
        description: ''        
    });

    // Obtener el registro por id
    useEffect(() => {
        // Traer los datos de los usuarios
        const fetchUser = async () => {
            try {                
                const response = await axios.get(`${API_ROUTES.USER}/${id}`);
                const userData = response.data;
                delete userData.password; // Eliminar la contraseña de los datos del usuario
                setUser(userData);        
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setError('Este usuario ha sido eliminado.');                    
                    setShowErrorModal(true); 
                } else if (error.response && error.response.status === 404) {
                    setError('Usuario no encontrado.');
                    setShowErrorModal(true);                     
                } else{
                    setError('Error al obtener los datos del usuario.');
                    setShowErrorModal(true);                     
                }                
            }
        };        
        fetchUser();       
    }, [id]);

    // Procedimiento para actualizar
    const handleUpdateUser = async (e) => { 
        e.preventDefault();

        // Validar campos de texto
        if (!isValidName(user.name) || !isValidName(user.lastname)) {
            setError('Los campos de nombre y apellidos, solo pueden contener letras, sin caracteres especiales.');
            setShowErrorModal(true);
            return;
        }
        // Validar username
        if (!isValidUsername(user.username)){
            setError('El nombre de usuario solo pueden contener letras y números.');
            setShowErrorModal(true);
            return;
        }
        // Validar description
        if (!isDescriptionValid(user.description)){
            setError('El campo comentarios no puede contener caracteres especiales.');
            setShowErrorModal(true);
            return;
        }
        // Validar contraseña solo si no está vacía
        if (user.password && !isPasswordValid(user.password)) {
            setError('La contraseña debe tener al menos 7 caracteres.');
            setShowErrorModal(true);
            return;
        }

        // Si todo esta validado, procedimiento actualizar
        try {
            await axios.put(`${API_ROUTES.USER}/${id}`, user);
            setSuccess('El usuario ha sido actualizado exitosamente!');
            setShowSuccessModal(true);
            setValidationErrors([]); // Limpiar validación del archivo: Validator.js cuando se actualiza correctamente
        } catch (error) {
            if (error.response && error.response.status === 400 && error.response.data.errors) {
                setValidationErrors(error.response.data.errors); // Errores de validación de backend
            } else {
                console.error('Error actualizando el usuario.', error);
                setError(error.response?.data?.error || 'Error al actualizar el usuario.');
                setShowErrorModal(true);
            }
        }
    };

    // Para cerrar los modales
    const CloseValidationErrors = () => {setValidationErrors([]);};
    const CloseSuccessModal = () => {
        setShowSuccessModal(false);         
        navigate(ROUTES.LIST_USERS);
    };
    const CloseErrorModal = () => {setShowErrorModal(false);};

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Actualizar datos de usuario</h1>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-8 m-auto">
                        <div className="card mb-4">
                            <div className="px-4 px-md-4">
                                {/* Muestra el error del validator del backend */}
                                <ValidationErrors errors={validationErrors} onClose={CloseValidationErrors} />
                                <form onSubmit={handleUpdateUser}>
                                    <div className="form-floating my-3">                                                                                
                                        <input className="form-control" id="floatingName" placeholder="Nombre" type="text" name="name" maxLength="100" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
                                        <label htmlFor="floatingName">Nombre *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                            
                                        <input className="form-control" id="floatingLastname" placeholder="Apellidos" type="text" name="lastname" maxLength="100" value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} required />
                                        <label htmlFor="floatingLastname">Apellidos *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                            
                                            <input className="form-control" id="floatingUsername" placeholder="Nombre de usuario" type="text" name="username" autoComplete="username" maxLength="50" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} required />
                                            <label htmlFor="floatingUsername">Nombre de usuario *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                            
                                        <input className="form-control" id="floatingEmail" placeholder="Email" type="email" name="email" autoComplete="email" maxLength="70" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
                                        <label htmlFor="floatingEmail">Email *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                            
                                        <input className="form-control" id="floatingPassword" placeholder="Dejar en blanco para no cambiar" type="password" name="password" autoComplete="new-password" maxLength="255" value={user.password || ''} onChange={(e) => setUser({ ...user, password: e.target.value })}  />
                                        <label htmlFor="floatingPassword">Contraseña: dejar en blanco para no cambiar</label>
                                    </div>
                                    <div className="form-floating my-3">                                            
                                        <textarea className="form-control" id="floatingDescription" placeholder="Comentarios" name="description" maxLength="255" value={user.description || ''} onChange={(e) => setUser({ ...user, description: e.target.value })} style={{height:"100px"}} ></textarea>
                                        <label htmlFor="floatingDescription">Comentarios</label>
                                    </div>
                                    <div className="mt-5 mb-4 text-end">
                                        <button  type="submit" className="btn btn-primary">Actualizar</button>
                                        <Link to={ROUTES.LIST_USERS} type="button" className="ms-3 btn btn-secondary">Cancelar</Link>                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal show={showSuccessModal} message={success} onClose={CloseSuccessModal} />

            {/* Error Modal */}
            <ErrorModal show={showErrorModal} message={error} onClose={CloseErrorModal} />
        </>
    );
}