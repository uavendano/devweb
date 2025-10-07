import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import ROUTES from '../routes/routes.js';

const ProtectedRoute = ({ children, requiredRole }) => {
    const { isAuthenticated, user, loading } = useAuth();
    const location = useLocation();
  
    if (loading) return null;  // No renderizar nada mientras se verifica la autenticación
  
    if (!isAuthenticated) {
        // Guarda la ruta actual en state para redirigir después del login
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
    }

    if (requiredRole && String(user.roleid) !== String(requiredRole)) {
        return <Navigate to={ROUTES.UNAUTHORIZED} />;  // Redirige a una página de acceso no autorizado
    }

    return children ? children : <Outlet />;
};

export default ProtectedRoute;