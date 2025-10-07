import { useEffect, useState } from 'react';
import axios from 'axios';
import API_ROUTES from '../../../routes/apiRoutes.js';
import { format } from 'date-fns';

export default function Customers() {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const res = await axios.get(API_ROUTES.CUSTOMERS, { withCredentials: true });
                setClientes(res.data);
            } catch (err) {
                console.error('Error al cargar clientes:', err);
                setError('No se pudieron cargar los clientes');
            } finally {
                setLoading(false);
            }
        };
        fetchClientes();
    }, []);

    if (loading) {
        return <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Cargando clientes...</span></div>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <div className="container table-responsive small">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Empresa</th>
                    <th scope="col">Cliente TAEC?</th>
                    <th scope="col">Campaña</th>
                    <th scope="col">Fecha registro</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length === 0 ? (
                        <tr>
                            <td colSpan="8" className="text-center">No hay registros disponibles</td>
                        </tr>
                    ) : (
                        clientes.map(cliente => (
                            <tr key={cliente.id}>
                                <td>{cliente.firstname}</td>
                                <td>{cliente.lastname}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.tel}</td>
                                <td>{cliente.company}</td>
                                <td>{cliente.client}</td>
                                <td>{cliente.campaign}</td>
                                <td>{format(new Date(cliente.createdAt), 'dd-MM-yyyy')}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}