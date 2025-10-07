import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function UnassignAreaToUsers() {
    // Hooks
    const [users, setUsers] = useState([]);
    const [selectedUserIds, setSelectedUserIds] = useState([]); // Array para manejar múltiples selecciones
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);    
    const [showErrorModal, setShowErrorModal] = useState(false);

    // Obtener la lista de usuarios con área asignada
    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_ROUTES.USERS_WITH_AREA);
            // Ordenar los datos obtenidos         
            const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setUsers(sortedData);
        } catch (error) {       
            console.error('Error al obtener la lista de usuarios con área asignada:', error);     
            setError(error.response?.data?.error || 'Error al obtener la lista de usuarios con área asignada.');
            setShowErrorModal(true);
        }
    };

    // Manejar selección de usuarios
    const handleUserSelection = (userid) => {
        if (selectedUserIds.includes(userid)) {
            // Si el ID ya está en la lista, lo eliminamos
            setSelectedUserIds(selectedUserIds.filter(id => id !== userid));
        } else {
            // Si el ID no está en la lista, lo agregamos
            setSelectedUserIds([...selectedUserIds, userid]);
        }
    };

    // Desasignar área
    const unassignArea = async () => {
        if (selectedUserIds.length === 0) {
            setError('Debes seleccionar al menos un usuario.');
            setShowErrorModal(true);
            return;
        }        
    
        try {
            const response = await axios.post(API_ROUTES.UNASSIGN_AREA_TO_USERS, {
                userids: selectedUserIds, // Enviar un array con los IDs de los usuarios seleccionados
            });
            setSuccess(response.data.message);
            setShowSuccessModal(true);
            // Limpiar la selección de usuarios
            setSelectedUserIds([]);
            // Actualizar la lista de usuarios con área asignada
            fetchUsers();
        } catch (error) {    
            console.error('Error al desasignar el área a los usuarios:', error);        
            setError(error.response?.data?.message || 'Error al desasignar el área a los usuarios.');
            setShowErrorModal(true);
        }
    };

    // Obtener las listas al cargar el componente
    useEffect(() => {        
        fetchUsers();
    }, []);

    // Cerrar modales
    const CloseSuccessModal = () => setShowSuccessModal(false);        
    const CloseErrorModal = () => setShowErrorModal(false);

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Quitar área a usuarios</h1>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-11 m-auto">
                        <div className="card mb-4">
                            <div className="px-4 px-md-4">
                                <div className="row py-4 py-md-4">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <h5 className="ff-normal fs-5 custom-color">Seleccionar usuario(s)</h5>
                                        {users.length === 0 ? (
                                            <p className="text-muted">No hay usuarios disponibles con área.</p>
                                        ) : (
                                            <ul className="list-group mt-4">
                                                {users.map(user => (
                                                    <li key={user.id} className="list-group-item d-flex align-items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input me-3"
                                                            value={user.id}
                                                            onChange={() => handleUserSelection(user.id)}                                                
                                                        />
                                                        <span>{`${user.name} ${user.lastname} / ${user.areaName}`}</span>                                    
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="mt-5 mb-4 text-center">
                                        <button id="unassignAreaBtn" className="btn btn-danger me-5" onClick={unassignArea} disabled={selectedUserIds.length === 0} > Desasignar Área </button>
                                        <Link to={ROUTES.DASHBOARD} className="btn btn-secondary"> Cancelar </Link>
                                    </div>
                                </div>
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