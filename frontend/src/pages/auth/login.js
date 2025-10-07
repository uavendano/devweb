import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import ROUTES from '../../routes/routes.js';
import API_ROUTES from '../../routes/apiRoutes.js';
import ValidationErrors from '../../components/services/validationErrors.js';

export default function Login() {
    const imgLogin = require.context('../../images/pages/auth',true);    
    // Configuramos hooks
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');    
    const [validationErrors, setValidationErrors] = useState([]); // Estado para almacenar errores de validación del backend    
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // otros        
    const navigate = useNavigate();   
    const location = useLocation();         
    const { isAuthenticated, setIsAuthenticated, loading } = useAuth(); // Obtener el estado de autenticación desde useAuth

    const from = location.state?.from?.pathname || ROUTES.DASHBOARD; // Ruta previa o Home por defecto

    // Función para cerrar sesión
    const LogOut = async () => {
        try {
            await axios.post(API_ROUTES.LOGOUT, {}, { withCredentials: true });
            setIsAuthenticated(false); // Actualizar el estado de autenticación            
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            setError('Error al cerrar sesión. Por favor, intente nuevamente.');
        }
    };    

    // Validar username
    const isUsernameValid = (text) => /^[a-zA-Z0-9]*$/.test(text);    

    // Para cerrar el modal
    const CloseValidationErrors = () => setValidationErrors([]);
    
    // Función para inicar sesión
    const SignIn = async (e) => {
        e.preventDefault();

        // Mensaje validar username
        if (!isUsernameValid(username)) {
            setError('El campo username solo pueden contener letras y números.');            
            return;
        }         

        try {
            await axios.post(API_ROUTES.LOGIN, { username, password }, { withCredentials: true });
            setSuccess('Inicio de sesión exitoso!');            
            setValidationErrors([]); // Limpiar validación del archivo: Validator.js cuando se actualiza correctamente 
            navigate(from); // Redirige a la ruta previa
        } catch (error) {                   
            // Validación del archivo: Validator.js del backend
            if (error.response && error.response.status === 400 && error.response.data.errors) {
                setValidationErrors(error.response.data.errors);
            } else{
                console.error('Error al iniciar sesión:', error);
                setError('Error al iniciar sesión. Por favor, intente más tarde.');                
            }                         
        }
    };

    if (loading) {              
        return null; // Muestra un mensaje de carga mientras se verifica la autenticación
    }

    // Mostrar modal si el usuario está autenticado
    if (isAuthenticated) {
        return (
            <div className="modal" style={{ display: 'block' }} tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirmar</h5>
                        </div>
                        <div className="modal-body">
                            <p>Actualmente ha iniciado sesión, necesita salir antes de volver a entrar con un usuario diferente.</p>
                        </div>
                        <div className="modal-footer">
                            <Link to={ROUTES.CANCELAR} className="btn btn-secondary">Cancelar</Link>
                            <button type="button" className="btn btn-primary" onClick={LogOut}>Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    

    return (
        <>
            <section className="p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="card border-light-subtle shadow-sm">
                        <div className="row g-0">
                            <div className="col-12 col-md-6" style={{ height: '470px', overflow: 'hidden' }}>                                    
                                <img src={imgLogin(`./login.svg`)} className="img-fluid rounded-start w-100 h-100 object-fit-cover" alt="taec_login" />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-3">
                                                <h3>Iniciar sesión</h3>                                            
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={SignIn}>
                                        <div className="row gy-3 gy-md-4 overflow-hidden">
                                            <div className="col-12">                                                                                            
                                                <input type="text" className="form-control" maxLength="50" name="username" placeholder="Nombre de usuario" id="username" autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                            </div>
                                            <div className="col-12">                                                                                           
                                                <input type="password" className="form-control" maxLength="255" name="password" placeholder="Contraseña" id="password" autoComplete="email" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                            </div>                                            
                                            <div className="col-12">
                                                <div className="d-grid">      
                                                    {/* Muestra el error del validator del backend */}
                                                    <ValidationErrors errors={validationErrors} onClose={CloseValidationErrors} />                                                                                                  
                                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                                    {success && <p style={{ color: 'green' }}>{success}</p>}
                                                    <button className="btn bsb-btn-xl btn-primary" type="submit">Iniciar sesión</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="text-end pt-4 pb-1">
                                            <Link to={ROUTES.FORGOT_PASSWORD} className="link-secondary text-decoration-none">¿Olvidaste tu contraseña?</Link>
                                        </div>
                                        <hr className='my-4' />
                                        <div className="d-flex align-items-center justify-content-center pb-4">
                                            <p className="mb-0 me-2 text-secondary">¿No tienes cuenta?</p>
                                            <Link to={ROUTES.REGISTER} type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-outline-danger" data-mdb-button-initialized="true">Registrate</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};