import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import API_ROUTES from '../routes/apiRoutes.js';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const hasFetchedUserData = useRef(false); // useRef para asegurar que solo se haga una vez

    useEffect(() => {
        if (!hasFetchedUserData.current) {
            hasFetchedUserData.current = true; // Marcar como ejecutado

            const checkAuth = async () => {
                try {
                    const res = await axios.get(API_ROUTES.CHECK_AUTH, { withCredentials: true });
                    const authenticated = res.data.authenticated;
                    setIsAuthenticated(authenticated);

                    if (authenticated) {                     
                        setUser(res.data.user); 
                    } else {
                        setUser(null);
                    }
                } catch (err) {
                    if (err.response && err.response.status === 401) {
                        // Usuario no autenticado → NO IMPRIMIR EN CONSOLA                        
                        setIsAuthenticated(false);
                        setUser(null);
                    } else {
                        // Solo mostrar errores inesperados
                        console.error('Error al verificar la autenticación o recuperar los datos del usuario:', err);
                        setError('Error al verificar la autenticación o recuperar los datos del usuario.');
                        setIsAuthenticated(false);
                        setUser(null);
                    }
                } finally {
                    setLoading(false);
                }
            };

            checkAuth();
        }
    }, []);

    return { isAuthenticated,setIsAuthenticated, user, loading, error };
};

export default useAuth;