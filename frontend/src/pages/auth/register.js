import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import SuccessModal from '../../components/modales/successModal';
import ErrorModal from '../../components/modales/errorModal';
import ROUTES from '../../routes/routes.js';
import API_ROUTES from '../../routes/apiRoutes.js';

const imgRegister = require.context('../../images/pages/auth',true);

export default function Register() {                
    // Configuramos hooks
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');        
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    // otros
    const navigate = useNavigate();    // Redireccionar

    // Validación de texto para los inputs
    const isTextValid = (text) => /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/.test(text);

    // Validar username
    const isUsernameValid = (text) => /^[a-zA-Z0-9]*$/.test(text);

    // Validación de email
    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    // Validar que la contraseña tenga al menos 7 caracteres
    const isPasswordValid = (password) => password.length >= 7;    

    // Funcion guardar
    const CreateAccount = async (e) => {
        e.preventDefault();

        // Mensaje validar campos de texto
        if (!isTextValid(name) || !isTextValid(lastname)) {
            setError('Los campos de nombre solo pueden contener letras.');
            setShowErrorModal(true);
            return;
        }
        // Mensaje validar username
        if (!isUsernameValid(username)) {
            setError('El campo username solo pueden contener letras y números.');
            setShowErrorModal(true);
            return;
        }             
        // Mensaje validar email
        if (!isEmailValid(email)) {
            setError('El correo electrónico no es válido.');
            setShowErrorModal(true);            
            return;
        }           
        // Mensaje Validar longitud mínima de la contraseña
        if (!isPasswordValid(password)) {
            setError('La contraseña debe tener al menos 7 caracteres');
            setShowErrorModal(true);
            return;
        }

        // Si todo esta validado, procedimiento guardar
        try {
            await axios.post(API_ROUTES.REGISTER, {
                name,
                lastname,
                username,
                email,
                password,
            });         
            setSuccess('Su cuenta ha sido registrada exitosamente!');
            setShowSuccessModal(true);            
        } catch (error) {            
            console.error('Error al registrar usuario:', error);
            setError(error.response?.data?.error || 'Error al registrar usuario.');                
            setShowErrorModal(true);            
        }
    };

    // Para cerrar los modales    
    const CloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate(ROUTES.LOGIN);
    };
    const CloseErrorModal = () => setShowErrorModal(false);   

    return (
        <>
            <section className="pt-4 pb-4">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card" style={{borderRadius: '25px'}}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4">Regístrate</p>                                                                                        
                                            <form className="mx-1 mx-md-4" onSubmit={CreateAccount}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <div className="form-floating flex-fill mb-0">                                                        
                                                        <input className="form-control" id="floatingName" placeholder="Nombre" type="text" maxLength="80" value = {name} onChange={(e) => setName(e.target.value)} required />
                                                        <label htmlFor="floatingName">Nombre *</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">                                                    
                                                    <div className="form-floating flex-fill mb-0">
                                                        <input className="form-control" id="floatingLastname" placeholder="Apellidos" type="text" maxLength="80" value = {lastname} onChange={(e) => setLastname(e.target.value)} required  />
                                                        <label htmlFor="floatingLastname">Apellidos *</label>
                                                    </div>
                                                </div>                                                
                                                <div className="d-flex flex-row align-items-center mb-4">                                                    
                                                    <div className="form-floating flex-fill mb-0">
                                                        <input className="form-control" id="floatingUsername" placeholder="Nombre de usuario" type="text" maxLength="50" value = {username} onChange={(e) => setUsername(e.target.value)} autoComplete="username" required /> 
                                                        <label htmlFor="floatingUsername">Nombre de usuario *</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">                                                    
                                                    <div className="form-floating flex-fill mb-0">
                                                        <input className="form-control" id="floatingEmail" placeholder="Email" type="email" maxLength="70" value = {email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
                                                        <label htmlFor="floatingEmail">Email *</label>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">                                                    
                                                    <div className="form-floating flex-fill mb-0">
                                                        <input className="form-control" id="floatingPassword" placeholder="Contraseña" type="password" maxLength="255" value = {password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" required />
                                                        <label htmlFor="floatingPassword">Contraseña *</label>
                                                    </div>
                                                </div>                                                
                                                <div className="d-flex justify-content-center mx-4">
                                                    <button type="submit" className="btn btn-primary">Crear cuenta</button>
                                                    <Link to={ROUTES.LOGIN}  type="button" className="ms-3 btn btn-secondary">Cancelar</Link>                                                    
                                                </div> 
                                            </form>
                                        </div>                                        
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">                                            
                                                <img src={imgRegister(`./register.png`)} className="img-fluid m-auto" alt="taec_crear_cuenta" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                                                
            {/* Success Modal */}
            <SuccessModal show={showSuccessModal} message={success} onClose={CloseSuccessModal} />
            {/* Bootstrap error Modal */}
            <ErrorModal show={showErrorModal} message={error} onClose={CloseErrorModal} />
        </>
    );
}