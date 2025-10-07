import { useState, useEffect } from 'react';
import axios from 'axios';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function Admins() {
    // Hooks
    const [admins, setAdmins] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isAddDisabled, setIsAddDisabled] = useState(true);
    const [isRemoveDisabled, setIsRemoveDisabled] = useState(true);
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);    
    const [showErrorModal, setShowErrorModal] = useState(false); 

    // Obtener la lista de administradores
    const fetchAdmins = async () => {
        try {
            const response = await axios.get(API_ROUTES.ADMINS);
            // Ordenar los datos obtenidos         
            const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setAdmins(sortedData);
        } catch (error) {
            console.error('Error al obtener la lista de administradores:', error);
            setError(error.response?.data?.error || 'Error al obtener la lista de administradores.');
            setShowErrorModal(true);
        }
    };

    // Obtener la lista de usuarios
    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_ROUTES.EMPLOYEE);
            // Ordenar los datos obtenidos            
            const sortedData = response.data.sort((a, b) => a.name.localeCompare(b.name));
            setUsers(sortedData);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
            setError(error.response?.data?.error || 'Error al obtener la lista de usuarios.');
            setShowErrorModal(true);
        }
    };

    // Añadir un usuario como administrador
    const addAdmin = async () => {
        // Validar que se seleccione un usuario de la lista
        if (!selectedUserId) {
            setError('Por favor, selecciona un usuario.');
            setShowErrorModal(true);
            return;
        }

        // Verificar si el usuario ya es administrador
        const userIsAdmin = admins.some(admin => admin.id === parseInt(selectedUserId));
        if (userIsAdmin) {
            setError('El usuario ya es administrador.');
            setShowErrorModal(true);
            return;
        }

        try {
            const response = await axios.post(API_ROUTES.ADD_ADMIN, { userid: selectedUserId });            
            fetchAdmins(); // Actualizar la lista de administradores
            fetchUsers(); // Actualizar la lista de usuarios
            setSuccess(response.data.message);
            setShowSuccessModal(true);
            // Restablecer la selección de usuario
            setSelectedUserId(null);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); // Establecer el mensaje de error desde el backend
            } else {
                setError('Error al quitar el rol de administrador.');
            }
            console.error('Error al añadir administrador:', error);
            setShowErrorModal(true);
        }
    };

    // Quitar un usuario como administrador
    const removeAdmin = async () => {
        // Validar que se seleccione un usuario de la lista
        if (!selectedUserId) {
            setError('Por favor, selecciona un usuario.');
            setShowErrorModal(true);
            return;
        }

        // Verificar si el usuario no es administrador
        const userIsNotAdmin = !admins.some(admin => admin.id === parseInt(selectedUserId));
        if (userIsNotAdmin) {
            setError('El usuario seleccionado no es administrador.');
            setShowErrorModal(true);
            return;
        }

        try {
            const response = await axios.post(API_ROUTES.ADMIN_REMOVE, { userid: selectedUserId });            
            fetchAdmins(); // Actualizar la lista de administradores
            fetchUsers(); // Actualizar la lista de usuarios
            setSuccess(response.data.message);
            setShowSuccessModal(true);
            // Restablecer la selección de usuario
            setSelectedUserId(null);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); // Establecer el mensaje de error desde el backend
            } else {
                setError('Error al quitar el rol de administrador.');
            }
            console.error('Error al quitar administrador:', error);
            setShowErrorModal(true);
        }
    };

    // Obtener las listas al cargar el componente
    useEffect(() => {
        fetchAdmins();
        fetchUsers();
    }, []);

    // Validar que se active el boton de Añadir o Quitar
    useEffect(() => {
        if (selectedUserId) {
            const userIsAdmin = admins.some(admin => admin.id === parseInt(selectedUserId));
            setIsAddDisabled(userIsAdmin); // Si el usuario es admin, deshabilitar el botón de añadir
            setIsRemoveDisabled(!userIsAdmin); // Si el usuario no es admin, deshabilitar el botón de quitar
        } else {
            setIsAddDisabled(true);
            setIsRemoveDisabled(true);
        }
    }, [selectedUserId, admins]);

    // Cerrar modales
    const CloseSuccessModal = () => { setShowSuccessModal(false); };
    const CloseErrorModal = () => { setShowErrorModal(false); };

    return (
        <>
            <div className="container pb-3">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Gestionar los administradores del sitio</h1>
                <div className="row mt-3">
                    <div className="col-md-5">
                        <h5 className='fs-subtitle custom-color'>Administradores</h5>
                        <select id="adminSelect" multiple className="form-select" size="15" onChange={(e) => setSelectedUserId(e.target.value)} required >
                            {admins.map(admin => (
                                <option key={admin.id} value={admin.id}>{`${admin.name} ${admin.lastname}`}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-2 d-flex flex-column justify-content-center">
                        <button id="addAdminBtn" className="btn btn-primary mb-2 mt-2" onClick={addAdmin} disabled={isAddDisabled} ><i className="bi bi-caret-left-fill"></i> Añadir</button>
                        <button id="removeAdminBtn" className="btn btn-secondary mb-2" onClick={removeAdmin} disabled={isRemoveDisabled} ><i className="bi bi-caret-right-fill"></i> Quitar</button>
                    </div>

                    <div className="col-md-5">
                        <h5 className='fs-subtitle custom-color'>Usuarios</h5>
                        <select id="userSelect" multiple className="form-select" size="15" onChange={(e) => setSelectedUserId(e.target.value)} required >
                            {users.map(user => (
                                <option key={user.id} value={user.id}>{`${user.name} ${user.lastname}`}</option>
                            ))}                          
                        </select>
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