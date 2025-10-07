import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import ValidationErrors from '../../../components/services/validationErrors.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function CreateUser() {
    // Configuramos hooks
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [description, setDescription] = useState('');
    const [validationErrors, setValidationErrors] = useState([]); // Estado para almacenar errores de validación del backend
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);    
    const [showErrorModal, setShowErrorModal] = useState(false);    
    const navigate = useNavigate();
    // Validación de texto para los inputs
    const isValidName = (text) => /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(text);    
    const isValidUsername = (text) => /^[A-Za-z0-9]*$/.test(text);
    const isDescriptionValid = (text) => /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ,.\-_\s]*$/.test(text);
    const isPasswordValid = (text) => text.length >= 7;

    //procedimiento guardar
    const handleCreateUser = async (e) => {
        e.preventDefault();

        // Validar campos de texto
        if (!isValidName(name) || !isValidName(lastname)) {
            setError('Los campos de nombre y apellidos, solo pueden contener letras, sin caracteres especiales.');
            setShowErrorModal(true);
            return;
        }
        // Validar username
        if (!isValidUsername(username)){
            setError('El nombre de usuario solo pueden contener letras y números.');
            setShowErrorModal(true);
            return;
        }
        // Validar description
        if (!isDescriptionValid(description)){
            setError('El campo comentarios no puede contener caracteres especiales.');
            setShowErrorModal(true);
            return;
        }
        // Validar longitud mínima de la contraseña
        if (!isPasswordValid(password)) {
            setError('La contraseña debe tener al menos 7 caracteres');
            setShowErrorModal(true);
            return;
        }        

        // Si todo esta validado, procedimiento guardar, Enviar datos como JSON
        try {
            await axios.post(API_ROUTES.USER, {
                name,
                lastname,
                username,
                email,
                password,
                description
            });
            setSuccess('El usuario ha sido creado exitosamente!');
            setShowSuccessModal(true);
            setValidationErrors([]); // Limpiar validación del archivo: Validator.js cuando se actualiza correctamente
        } catch (error) {
            // Si el error es de Multer por tamaño de archivo o formato
            if (error.response?.data?.errors) {
                setValidationErrors(error.response.data.errors); // Errores de validación de backend
            } else {
                console.error('Error creando usuario.', error);
                setError(error.response?.data?.error || 'Error al registrar el usuario.');
                setShowErrorModal(true);
            }
        }
    };

    // Para cerrar los modales
    const CloseValidationErrors = () => {setValidationErrors([]);};
    const CloseSuccessModal = () => {
        setShowSuccessModal(false);
        setName('');setLastname('');setUsername('');setEmail('');setPassword('');setDescription('');
        navigate(ROUTES.CREATE_USERS);
    };    
    const CloseErrorModal = () => {setShowErrorModal(false);};

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Registrar usuario</h1>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-8 m-auto">
                        <div className="card mb-4">
                            <div className="px-4 px-md-4">
                                {/* Muestra el error del validator del backend */}
                                <ValidationErrors errors={validationErrors} onClose={CloseValidationErrors} />
                                <form onSubmit={handleCreateUser}>
                                    <div className="form-floating my-3">                                                                                
                                        <input className="form-control" id="floatingName" placeholder="Nombre" type="text" name="name" maxLength="100" value={name} onChange={(e) => setName(e.target.value)} required />
                                        <label htmlFor="floatingName">Nombre *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                
                                        <input className="form-control" id="floatingLastname" placeholder="Apellidos" type="text" name="lastname" maxLength="100" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                                        <label htmlFor="floatingLastname">Apellidos *</label>
                                    </div>
                                    <div className="form-floating my-3">
                                        <input className="form-control" id="floatingUsername" placeholder="Nombre de usuario" type="text" name="username" autoComplete="username" maxLength="50" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                        <label htmlFor="floatingUsername">Nombre de usuario *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                    
                                        <input className="form-control" id="floatingEmail" placeholder="Email" type="email" name="email" autoComplete="email" maxLength="70" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        <label htmlFor="floatingEmail">Email *</label>                                        
                                    </div>
                                    <div className="form-floating my-3">                                                                                    
                                        <input className="form-control" id="floatingPassword" placeholder="Contraseña" type="password" name="password" autoComplete="new-password" maxLength="255" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                        <label htmlFor="floatingPassword">Contraseña *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                       
                                        <textarea className="form-control" id="floatingDescription" placeholder="Comentarios" name="description" maxLength="255" value={description} onChange={(e) => setDescription(e.target.value)} style={{height:"100px"}} ></textarea>
                                        <label htmlFor="floatingDescription">Comentarios</label>                                        
                                    </div>
                                    <div className="mt-5 mb-4 text-end">
                                        <button  type="submit" className="btn btn-primary">Guardar</button>
                                        <Link to={ROUTES.DASHBOARD}  type="button" className="ms-3 btn btn-secondary">Cancelar</Link>                                        
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