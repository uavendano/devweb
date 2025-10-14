import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import Pagination from '../../../components/services/pagination.js';
import SearchBar from '../../../components/services/searchBar.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import API_ROUTES from '../../../routes/apiRoutes.js';


export default function ListCustomers() {
    const [customersList, setCustomersList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Estado para el número de página actual
    const [itemsPerPage] = useState(10); // Número de elementos por página
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda     
    // Modales
    const [error, setError] = useState(''); 
    const [showErrorModal, setShowErrorModal] = useState(false);
    // estados para controlar la ordenación
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc' 

    // Función para obtener la lista de clientes
    useEffect(() => {
        const fetchCustomersList = async () => {            
            try {
                const response = await axios.get(API_ROUTES.CUSTOMERS);
                // Ordenar por orden alfabetico la lista
                const sortedCustomersList = response.data.sort((a, b) => {
                    if (a.name && b.name) {
                        return a.name.localeCompare(b.name);
                    }
                    return 0;
                });
                setCustomersList(sortedCustomersList);             
            } catch (error) {
                console.error('Error fetching customers list:', error);      
                setError('Error al obtener el listado de clientes.');    
                setShowErrorModal(true); // Mostrar modal de error en caso de cualquier fallo      
            }
        };
        fetchCustomersList();
    }, []);

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
    const filteredCustomersList = customersList.filter(customer => {
        const firstname = customer.firstname ? customer.firstname.toLowerCase() : '';
        const lastname = customer.lastname ? customer.lastname.toLowerCase() : '';
        const email = customer.email ? customer.email.toLowerCase() : '';
        const tel = customer.tel ? customer.tel.toLowerCase() : '';
        const company = customer.company ? customer.company.toLowerCase() : '';
        const campaign = customer.campaign ? customer.campaign.toLowerCase() : '';      
        const search = searchTerm.toLowerCase();
        
        return firstname.includes(search) || lastname.includes(search) || email.includes(search) || tel.includes(search) || company.includes(search) || campaign.includes(search);
    });

    // Ordenar lista filtrada
    if (sortField) {
        filteredCustomersList.sort((a, b) => {
            const aVal = getNestedValue(a, sortField)?.toString().toLowerCase() || '';
            const bVal = getNestedValue(b, sortField)?.toString().toLowerCase() || '';
            return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        });
    }

    // Calcular índices de primer y último elemento en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCustomersList.slice(indexOfFirstItem, indexOfLastItem);
    
    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Modales
    const CloseErrorModal = () => {
        setShowErrorModal(false);
    };

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Lista de clientes</h1>
                <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th onClick={() => handleSort('firstname')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Nombre{' '}
                                {sortField === 'firstname' && (
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
                            <th scope="col">Email</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Empresa</th>
                            <th scope="col">Campaña</th>
                            <th scope="col">Fecha registro</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {currentItems.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center">No hay registros disponibles</td>
                            </tr>
                        ) : (
                            currentItems.map((customer, index) => {
                                const rowIndex = indexOfFirstItem + index + 1; // Calcular el número de fila real
                                return (
                                    <tr key={customer.id}>
                                        <th scope="row">{rowIndex}</th>{/* Usar rowIndex en lugar de index + 1 */}
                                        <td>{customer.firstname}</td>
                                        <td>{customer.lastname}</td> 
                                        <td>{customer.email}</td>
                                        <td>{customer.tel}</td>
                                        <td>{customer.company}</td>
                                        <td>{customer.campaign}</td>
                                        <td>{format(new Date(customer.createdAt), 'dd-MM-yyyy')}</td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
                {/* Paginación */}
                <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredCustomersList.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
            {/* Error Modal */}
            <ErrorModal show={showErrorModal} message={error} onClose={CloseErrorModal} />
        </>
    );
}