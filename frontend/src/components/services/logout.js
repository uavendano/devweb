import axios from 'axios';
import ROUTES from '../../routes/routes.js';
import api_routes from '../../routes/apiRoutes.js';

export async function logout(navigate) {
    try {
        await axios.post(api_routes.LOGOUT, {}, { withCredentials: true });
        navigate(ROUTES.LOGIN);
    } catch (error) {
        console.error("Error cerrando sesión:", error.response?.data || error.message);
    }
}