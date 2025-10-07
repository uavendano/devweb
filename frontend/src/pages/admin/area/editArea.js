import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import ValidationErrors from '../../../components/services/validationErrors.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function EditArea() {
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
    const isValidShortname = (text) => /^[a-zA-Z0-9]*$/.test(text);
    const isValidDescription = (text) => /^[A-Za-z0-9áéíóúÁÉÍÓÚñÑ,.\s]*$/.test(text);

    // Campos a editar
    const [area, setArea] = useState({
        name: '',
        shortname: '',        
        description: ''
    });

    // Obtener el registro por id
    useEffect(() => {
        const fetchArea = async () => {
            try {
                const response = await axios.get(`${API_ROUTES.AREA}/${id}`);                
                setArea(response.data);                
            } catch (error) {
                console.error('Error al obtener los datos del área:', error);
                setError(error.response?.data?.error || 'Error al obtener los datos del área.');
                setShowErrorModal(true);  
            }
        };
        fetchArea();
    }, [id]);

    // Procedimiento para actualizar
    const handleUpdateArea = async (e) => {
        e.preventDefault();

        // Validar campos
        if (!isValidName(area.name)) {
            setError('El campo nombre solo pueden contener letras.');
            setShowErrorModal(true);
            return;
        }
        if (!isValidShortname(area.shortname)) {
            setError('El campo nombre corto solo pueden contener letras y números.');
            setShowErrorModal(true);
            return;
        }
        if (!isValidDescription(area.description)) {
            setError('El campo comentarios no puede contener caracteres especiales.');
            setShowErrorModal(true);
            return;
        }

        try {
            await axios.put(`${API_ROUTES.AREA}/${id}`, area);            
            setSuccess('El Área ha sido actualizada exitosamente!');
            setShowSuccessModal(true); // Mostrar el modal de éxito
            setValidationErrors([]); // Limpiar validación del archivo: Validator.js cuando se actualiza correctamente
        } catch (error) {
            // Validación del archivo: Validator.js del backend
            if (error.response && error.response.status === 400 && error.response.data.errors) {
                setValidationErrors(error.response.data.errors);
            } else {
                console.error('Error al actualizar el área:', error);
                setError(error.response?.data?.error || 'Error al actualizar el área.');
                setShowErrorModal(true);
            }
        }
    };

    // Para cerrar los modales
        const CloseValidationErrors = () => {setValidationErrors([]);};
        const CloseSuccessModal = () => {
            setShowSuccessModal(false);         
            navigate(ROUTES.LIST_AREAS);
        };
        const CloseErrorModal = () => {setShowErrorModal(false);};

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Actualizar datos del área</h1>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-8 m-auto">
                        <div className="card mb-4">
                            <div className="px-4 px-md-4">
                                {/* Muestra el error del validator del backend */}
                                <ValidationErrors errors={validationErrors} onClose={CloseValidationErrors} />
                                <form onSubmit={handleUpdateArea}>
                                    <div className="form-floating my-3">
                                        <input className="form-control" id="floatingName" placeholder="Nombre del área" type="text" name="name" maxLength="50" value={area.name} onChange={(e) => setArea({ ...area, name: e.target.value })} required />
                                        <label htmlFor="floatingType">Nombre del área *</label>                                        
                                    </div>
                                    <div className="form-floating my-3">                                        
                                        <input className="form-control" id="floatingShortname" placeholder="Nombre corto del área" type="text" name="shortname" maxLength="30" value={area.shortname} onChange={(e) => setArea({ ...area, shortname: e.target.value })} required />
                                        <label htmlFor="floatingShortname">Nombre corto del área *</label>
                                    </div>
                                    <div className="form-floating my-3">                                        
                                        <textarea className="form-control" id="floatingDescription" placeholder="Comentarios" name="description" maxLength="255" value={area.description || ""} onChange={(e) => setArea({ ...area, description: e.target.value })} style={{height:"100px"}} ></textarea>
                                        <label htmlFor="floatingDescription">Descripción</label>
                                    </div>
                                    <div className="mt-5 mb-4 text-end">
                                        <button  type="submit" className="btn btn-primary">Actualizar</button>
                                        <Link to={ROUTES.LIST_AREAS} type="button" className="ms-3 btn btn-secondary">Cancelar</Link>                                        
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