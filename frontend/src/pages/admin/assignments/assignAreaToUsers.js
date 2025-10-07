import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function AssignAreaToUsers() {
    // Hooks
    const [areas, setAreas] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedAreaId, setSelectedAreaId] = useState(undefined);
    const [selectedUserIds, setSelectedUserIds] = useState([]); // Cambiado a array para manejar múltiples selecciones
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);    
    const [showErrorModal, setShowErrorModal] = useState(false);

    // Obtener la lista de areas
    const fetchAreas = async () => {
        try {
            const response = await axios.get(API_ROUTES.LIST_AREA_ACTIVE);
            // Ordenar los datos obtenidos         
            const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setAreas(sortedData);
        } catch (error) {
            console.error('Error al obtener la lista de áreas:', error);
            setError(error.response?.data?.error || 'Error al obtener la lista de áreas.');
            setShowErrorModal(true);
        }
    };

    // Obtener la lista de usuarios sin area default
    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_ROUTES.USERS_WITHOUT_AREA);
            // Ordenar los datos obtenidos         
            const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setUsers(sortedData);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
            setError(error.response?.data?.error || 'Error al obtener la lista de usuarios.');
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

    // Asignar área
    const assignArea = async () => {
        if (selectedUserIds.length === 0 || !selectedAreaId) {
            setError('Debes seleccionar al menos un usuario y un área.');
            setShowErrorModal(true);
            return;
        }        
    
        try {
            const response = await axios.post(API_ROUTES.ASSIGN_AREA_TO_USERS, {
                userids: selectedUserIds, // Enviar un array con los IDs de los usuarios seleccionados
                areaid: selectedAreaId
            });
            setSuccess(response.data.message);
            setShowSuccessModal(true);
            // Limpiar el estado después de la asignación exitosa
            setSelectedAreaId(null);  // Limpiar el area seleccionada
            setSelectedUserIds([]); // Limpiar los usuarios seleccionados         
            // Actualizar la lista de usuarios sin área
            fetchUsers();            
        } catch (error) {
            console.error('Error al asignar el área a los usuarios:', error);
            setError(error.response?.data?.message || 'Error al asignar el área a los usuarios.');
            setShowErrorModal(true);
        }
    };

    // Obtener las listas al cargar el componente
    useEffect(() => {        
        fetchUsers();
        fetchAreas();
    }, []);

    // Cerrar modales
    const CloseSuccessModal = () => setShowSuccessModal(false);        
    const CloseErrorModal = () => setShowErrorModal(false);

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Asignar área a usuarios</h1>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-11 m-auto">
                        <div className="card mb-4">
                            <div className="px-4 px-md-4">
                                <div className="row py-4 py-md-4">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <h5 className="ff-normal fs-5 custom-color">Seleccionar usuario(s)</h5>
                                        {users.length === 0 ? (
                                            <p className="text-muted">No hay usuarios disponibles sin área.</p>
                                        ) : (
                                            <ul className="list-group">
                                                {users.map(user => (
                                                <li key={user.id} className="list-group-item d-flex align-items-center">
                                                    <input
                                                    type="checkbox"
                                                    className="form-check-input me-3"
                                                    value={user.id}
                                                    onChange={() => handleUserSelection(user.id)}
                                                    />
                                                    <span>{`${user.name} ${user.lastname}`}</span>
                                                </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <h5 className="ff-normal fs-5 custom-color">Selecciona el área</h5>
                                        <ul className="list-group">
                                            {areas.map(area => (
                                            <li key={area.id} className="list-group-item d-flex align-items-center">
                                                <input
                                                type="radio"
                                                className="form-check-input me-3"                                                                                
                                                value={area.id}
                                                name="radioNoLabel"
                                                checked={selectedAreaId === area.id}
                                                onChange={() => setSelectedAreaId(area.id)}
                                                />
                                                <span className="fs-6 ff-normal custom-color">{`${area.name} / ${area.shortname}`}</span>
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-5 mb-4 text-center">
                                        <button id="addAreaBtn" className="btn btn-primary me-5" onClick={assignArea} disabled={!selectedAreaId || selectedUserIds.length === 0} > Asignar área </button>
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