import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import ValidationErrors from '../../../components/services/validationErrors.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function CreateArea() {
    // Configuramos hooks
    const [name, setName] = useState('');
    const [shortname, setShortname] = useState('');
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
    const isValidShortname = (text) => /^[a-zA-Z0-9]*$/.test(text);
    const isValidDescription = (text) => /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ,.\-_\s]*$/.test(text);


    // Funcion guardar
    const handleCreateArea = async (e) => {
        e.preventDefault();

        // Validar campos
        if (!isValidName(name)) {
            setError('El campo nombre solo pueden contener letras.');
            setShowErrorModal(true);
            return;
        }
        if (!isValidShortname(shortname)) {
            setError('El campo nombre corto solo pueden contener letras y números.');
            setShowErrorModal(true);
            return;
        }
        if (!isValidDescription(description)) {
            setError('El campo comentarios no puede contener caracteres especiales.');
            setShowErrorModal(true);
            return;
        }

        // Si todo esta validado, procedimiento guardar
        try {
            await axios.post(API_ROUTES.AREA, {
                name,
                shortname,
                description
            });            
            setSuccess('El Área ha sido creada exitosamente!');
            setShowSuccessModal(true);
            setValidationErrors([]); // Limpiar validación del archivo: Validator.js cuando se actualiza correctamente
        } catch (error) {
            // Validación del archivo: Validator.js del backend
            if (error.response && error.response.status === 400 && error.response.data.errors) {
                setValidationErrors(error.response.data.errors);
            } else{
                console.error('Error creating area:', error);
                setError(error.response?.data?.error || 'Error al registrar el área.');
                setShowErrorModal(true);
            }            
        }
    };

    // Para cerrar los modales
    const CloseValidationErrors = () => {setValidationErrors([]);};
    const CloseSuccessModal = () => {
        setShowSuccessModal(false);
        setName('');setShortname('');setDescription('');
        navigate(ROUTES.CREATE_AREAS);
    };    
    const CloseErrorModal = () => {setShowErrorModal(false);};

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Registrar área</h1>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-8 m-auto">
                        <div className="card mb-4">
                            <div className="px-4 px-md-4">
                                {/* Muestra el error del validator del backend */}
                                <ValidationErrors errors={validationErrors} onClose={CloseValidationErrors} />
                                <form onSubmit={handleCreateArea}>
                                    <div className="form-floating my-3">                                                                                
                                        <input className="form-control" id="floatingName" placeholder="Nombre del área" type="text" name="name" maxLength="50" value={name} onChange={(e) => setName(e.target.value)} required />
                                        <label htmlFor="floatingName">Nombre *</label>
                                    </div>
                                    <div className="form-floating my-3">                                                                                
                                        <input className="form-control" id="floatingShortname" placeholder="Nombre corto del área" type="text" name="shortname" maxLength="30" value={shortname} onChange={(e) => setShortname(e.target.value)} required />
                                        <label htmlFor="floatingShortname">Nombre corto del área *</label>
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