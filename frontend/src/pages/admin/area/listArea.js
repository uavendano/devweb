import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import Pagination from '../../../components/services/pagination.js';
import SearchBar from '../../../components/services/searchBar.js';
import SuccessModal from '../../../components/modales/successModal.js';
import ErrorModal from '../../../components/modales/errorModal.js';
import DeleteModal from '../../../components/modales/deleteModal.js';
import ROUTES from '../../../routes/routes.js';
import API_ROUTES from '../../../routes/apiRoutes.js';

export default function ListArea() {
    // Configuramos hooks
    const [AreaList, setAreaList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Estado para el número de página actual
    const [itemsPerPage] = useState(10); // Número de elementos por página
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const [AreaToDelete, setAreaToDelete] = useState(null); 
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    // estados para controlar la ordenación
    const [sortField, setSortField] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' o 'desc'

    // Función para obtener la lista de áreas
    useEffect(() => {
        const fetchAreaList = async () => {              
            try { 
                const response = await axios.get(API_ROUTES.AREA);
                // Ordenar por orden alfabetico la lista
                const sortedAreaList = response.data.sort((a, b) => {
                    if (a.name && b.name) {
                        return a.name.localeCompare(b.name);
                    }
                    return 0;
                });
                setAreaList(sortedAreaList);                
            } catch (error) {                                
                setError(error.response?.data?.error || 'Error al obtener la lista de áreas.');
                setShowErrorModal(true);           
            }
        };
        fetchAreaList();
    }, []);

    // Funcion para eliminar
    const handleDelete = async () => {
        try {
            await axios.put(`${API_ROUTES.AREA_DELETE}/${AreaToDelete.id}`);
            setAreaList(AreaList.filter(item => item.id !== AreaToDelete.id));
            setShowModalDelete(false);
            setSuccess('El área ha sido eliminada con éxito.');
            setShowSuccessModal(true);                        
        } catch (error) {            
            setShowModalDelete(false);
            setError(error.response?.data?.error || 'Error al eliminar el área.');
            setShowErrorModal(true);           
        }
    };

    // Modales
    const ShowConfirmModalDelete = (area) => {
        setAreaToDelete(area);
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
    const filteredAreaList = AreaList.filter(area => {
        const name = area.name ? area.name.toLowerCase() : '';
        const shortname = area.shortname ? area.shortname.toLowerCase() : '';        
        const search = searchTerm.toLowerCase();
        
        return name.includes(search) || shortname.includes(search);
    });

    // Ordenar lista filtrada
    if (sortField) {
        filteredAreaList.sort((a, b) => {
            const aVal = a[sortField]?.toLowerCase() || '';
            const bVal = b[sortField]?.toLowerCase() || '';
            return sortOrder === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
        });
    }

    // Calcular índices de primer y último elemento en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredAreaList.slice(indexOfFirstItem, indexOfLastItem);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="container">
                <h1 className='py-2 text-center ff-bold fs-subtitle custom-color'>Lista de áreas</h1>
                <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Nombre{' '}
                                {sortField === 'name' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>
                            <th onClick={() => handleSort('shortname')} style={{ cursor: 'pointer', textDecoration: "underline" }}>Nombre corto{' '}
                                {sortField === 'shortname' && (
                                    sortOrder === 'asc' ? (
                                        <i className="bi bi-caret-up-fill"></i>
                                    ) : (
                                        <i className="bi bi-caret-down-fill"></i>
                                    )
                                )}
                            </th>                                             
                            <th scope="col">Fecha registro</th>                            
                            <th scope="col">Comentarios</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {currentItems.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">No hay registros disponibles</td>
                            </tr>
                        ) : (
                            currentItems.map((area, index) => {
                                const rowIndex = indexOfFirstItem + index + 1; // Calcular el número de fila real
                                return (
                                    <tr key={area.id}>

                                        <th scope="row">{rowIndex}</th>{/* Usar rowIndex en lugar de index + 1 */}
                                        <td>{area.name}</td>                                   
                                        <td>{area.shortname}</td>
                                        <td>{format(new Date(area.createdAt), 'dd-MM-yyyy')}</td>                                        
                                        <td>{area.description}</td>
                                        <td>    
                                            <Link to={`${ROUTES.EDIT_AREA}/${area.id}`} className="btn btn-primary me-md-2" title="Editar"><i className="bi bi-pencil-square"></i></Link>                
                                            <button onClick={() => ShowConfirmModalDelete(area)} className="btn btn-danger" disabled={area.id === 1} title={area.id === 1 ? "No se puede eliminar el área por defecto" : "Eliminar"}>
                                                <i className="bi bi-trash3-fill"></i>
                                            </button>
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
                    totalItems={filteredAreaList.length}
                    currentPage={currentPage}
                    paginate={paginate}
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