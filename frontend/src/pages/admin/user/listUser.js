import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import Pagination from '../../../components/services/pagination.js';
import SearchBar from '../../../components/services/searchBar.js';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import DeleteModal from '../../../components/modales/deleteModal.js';
import SuspendModal from '../../../components/modales/suspendModal.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function ListUser() {
    // Configuramos hooks
    const [UserList, setUserList] = useState([]); // Estado para almacenar la lista de usuarios
    const [currentPage, setCurrentPage] = useState(1); // Estado para el número de página actual
    const [itemsPerPage] = useState(10); // Número de elementos por página
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda    
    const [UserToDelete, setUserToDelete] = useState(null); // Estado para eliminar el usuario
    const [UserToSuspend, setUserToSuspend] = useState(null); // Estado para suspender el usuario    
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalSuspend, setShowModalSuspend] = useState(false);
    // estados para controlar la ordenación
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc' 

    // Función para obtener la lista de usuarios
    useEffect(() => {
        const fetchUserList = async () => {            
            try {
                const response = await axios.get(API_ROUTES.USER);
                // Ordenar por orden alfabetico la lista
                const sortedUserList = response.data.sort((a, b) => {
                    if (a.name && b.name) {
                        return a.name.localeCompare(b.name);
                    }
                    return 0;
                });
                setUserList(sortedUserList);             
            } catch (error) {
                console.error('Error fetching user list:', error);                
            }
        };
        fetchUserList();
    }, []);

    // Funcion para suspender
    const handleSuspend = async () => {
        try {
            const newState = !UserToSuspend.suspended; // Alternar el estado de suspensión            
            await axios.put(`${API_ROUTES.USER_SUSPEND}/${UserToSuspend.id}`, { suspended: newState });
            setUserList(UserList.map(user => user.id === UserToSuspend.id ? { ...user, suspended: newState } : user));
            setShowModalSuspend(false);            
            setSuccess(newState ? 'El usuario ha sido suspendido con éxito.' : 'El usuario ha sido activado con éxito.');
            setShowSuccessModal(true);           
        } catch (error) { 
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
                setShowModalSuspend(false);
            } else{
                setError('Error al cambiar el estado del usuario.');
            }
            setShowErrorModal(true); // Mostrar modal de error en caso de cualquier fallo              
        }
    };

    // Funcion para eliminar
    const handleDelete = async () => {
        try {            
            await axios.put(`${API_ROUTES.USER_DELETE}/${UserToDelete.id}`);
            setUserList(UserList.filter(item => item.id !== UserToDelete.id));
            setShowModalDelete(false);
            setSuccess('El registro de la usuario ha sido eliminado con éxito.');
            setShowSuccessModal(true);
        } catch (error) {            
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
                setShowModalDelete(false);
            } else {
                setError('Error al eliminar el usuario.');
            }
            setShowErrorModal(true); // Mostrar modal de error en caso de cualquier fallo         
        }
    };

    // Modales
    const showConfirmModalSuspend = (user) => {
        setUserToSuspend(user);
        setShowModalSuspend(true);
    };
    const CloseConfirmModalSuspend = () => {
        setShowModalSuspend(false);
    };
    const ShowConfirmModalDelete = (user) => {
        setUserToDelete(user);
        setShowModalDelete(true);
    };    
    const CloseConfirmModalDelete = () => {
        setShowModalDelete(false);
    };
    const CloseSuccessModal = () => {
        setShowSuccessModal(false);        
    };
    const CloseErrorModal = () => {
        setShowErrorModal(false);
    };

    // Manejar el cambio en el término de búsqueda
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Resetear a la primera página en cada búsqueda
    };

    // función para manejar el cambio de orden
    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, key) => acc?.[key], obj);
    }
    const handleSort = (field) => {
        if (sortField === field) {
            // Cambia de ascendente a descendente si ya se está ordenando por esa columna
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            // Si se cambia de columna, ordena ascendente por defecto
            setSortField(field);
            setSortOrder('asc');
        }
    };

    // Filtrar los elementos en función del término de búsqueda
    const filteredUserList = UserList.filter(user => {
        const area = user.userArea?.name?.toLowerCase() || 'n/a';
        const role = user.userRole?.name?.toLowerCase() || 'n/a';
        const name = user.name ? user.name.toLowerCase() : '';
        const lastname = user.lastname ? user.lastname.toLowerCase() : '';
        const username = user.username ? user.username.toLowerCase() : '';
        const email = user.email ? user.email.toLowerCase() : '';
        const status = user.suspended ? 'suspendido' : 'activo';    // Para el buscador        
        const search = searchTerm.toLowerCase();
        
        return area.includes(search) || role.includes(search) || name.includes(search) || lastname.includes(search) || 
        username.includes(search) || email.includes(search) || status.includes(search);
    });

    // Ordenar lista filtrada
    if (sortField) {
        filteredUserList.sort((a, b) => {
            const aVal = getNestedValue(a, sortField)?.toString().toLowerCase() || '';
            const bVal = getNestedValue(b, sortField)?.toString().toLowerCase() || '';
            return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        });
    }

    // Calcular índices de primer y último elemento en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredUserList.slice(indexOfFirstItem, indexOfLastItem);
    
    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);    


    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Lista de usuarios</h1>
                <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th onClick={() => handleSort('userArea.name')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Área{' '}
                                {sortField === 'userArea.name' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>
                            <th onClick={() => handleSort('userRole.name')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Rol{' '}
                                {sortField === 'userRole.name' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>
                            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Nombre{' '}
                                {sortField === 'name' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>
                            <th onClick={() => handleSort('lastname')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Apellidos{' '}
                                {sortField === 'lastname' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>                            
                            <th onClick={() => handleSort('username')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Nombre de usuario{' '}
                                {sortField === 'username' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>   
                            <th scope="col">Email</th>
                            <th scope="col">Fecha registro</th>                           
                            <th scope="col">Estatus</th>
                            <th scope="col">Comentarios</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {currentItems.length === 0 ? (
                            <tr>
                                <td colSpan="11" className="text-center">No hay registros disponibles</td>
                            </tr>
                        ) : (
                            currentItems.map((user, index) => {
                                const rowIndex = indexOfFirstItem + index + 1; // Calcular el número de fila real
                                return (
                                    <tr key={user.id}>
                                        <th scope="row">{rowIndex}</th>{/* Usar rowIndex en lugar de index + 1 */}
                                        <td>{user.userArea?.name || 'N/A' }</td>
                                        <td>{user.userRole?.name || 'N/A'}</td>
                                        <td>{user.name}</td>                                
                                        <td>{user.lastname}</td>                                
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{format(new Date(user.createdAt), 'dd-MM-yyyy')}</td>
                                        <td>
                                            {user.suspended ? (
                                                <>
                                                    <span className="badge" style={{color: '#1d2125',backgroundColor: '#ced4da'}}>Suspendido</span>
                                                </>
                                            ) : (
                                                <>Activo</>
                                            )}
                                        </td>
                                        <td>{user.description}</td>
                                        <td>
                                            <div className="dropdown-center">                                                                                                
                                                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: "#0f6cbf"}} >
                                                    <i className="bi bi-gear-fill"></i>
                                                </button>
                                                {user.roleid === 1 ? (
                                                    <>
                                                        <ul className="dropdown-menu">                                                            
                                                            <li><Link to={`${ROUTES.EDIT_USER}/${user.id}`} className="dropdown-item"><i className="bi bi-gear-fill"></i> Editar </Link></li>
                                                        </ul>
                                                    </>
                                                ) : (
                                                    <>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to={`${ROUTES.EDIT_USER}/${user.id}`} className="dropdown-item"><i className="bi bi-gear-fill"></i> Editar </Link></li>        
                                                            <li>
                                                                <button onClick={() => showConfirmModalSuspend(user)} className="dropdown-item" >
                                                                    {user.suspended ? (
                                                                        <>
                                                                            <i className="bi bi-eye-fill"></i> Activar cuenta de usuario
                                                                        </>                                                                
                                                                    ) : (
                                                                        <>
                                                                            <i className="bi bi-eye-slash-fill"></i> Suspender cuenta de usuario
                                                                        </>                                                                
                                                                    )}                                                        
                                                                </button>
                                                            </li>        
                                                            <button onClick={() => ShowConfirmModalDelete(user)} disabled={user.suspended} className="dropdown-item" style={{ color: user.suspended ? "" : "#ca3120" }} ><i className="bi bi-trash-fill"></i> Borrar</button>                                                    
                                                        </ul>
                                                    </>
                                                )}                                                
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
                {/* Paginación */}
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredUserList.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
                {/* Suspende Modal */}
                <SuspendModal 
                    show={showModalSuspend}
                    title={UserToSuspend && UserToSuspend.suspended ? 'Confirmar Activación' : 'Confirmar Suspensión'}
                    message={UserToSuspend && UserToSuspend.suspended ? '¿Estás seguro de que deseas activar al usuario?' : '¿Estás seguro de que deseas suspender al usuario?'}
                    icon={
                        UserToSuspend && UserToSuspend.suspended ? (
                            <><i className="bi bi-eye-fill me-2"></i></>
                        ) : (
                            <><i className="bi bi-eye-slash-fill me-2"></i></>
                        )
                    }
                    funsuspend={handleSuspend} 
                    onClose={CloseConfirmModalSuspend} 
                />
                {/* Delete Modal */}
                <DeleteModal show={showModalDelete} message={"¿Realmente deseas eliminar este registro? Este proceso no se puede deshacer."} fundelete={handleDelete} onClose={CloseConfirmModalDelete} />
            </div>
            {/* Success Modal */}
            <SuccessModal show={showSuccessModal} message={success} onClose={CloseSuccessModal} />

            {/* Error Modal */}
            <ErrorModal show={showErrorModal} message={error} onClose={CloseErrorModal} />
        </>
    );
}