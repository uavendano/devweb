import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../components/modales/successModal.js';
import ErrorModal from '../../components/modales/errorModal.js';
import ROUTES from '../../routes/routes.js';
import API_ROUTES from '../../routes/apiRoutes.js';

export default function ForgotPassword() {    
    const [email, setEmail] = useState('');
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const navigate = useNavigate();
    
    // Validación de email
    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mensaje validar email
        if (!isEmailValid(email)) {
            setError('El correo electrónico no es válido.');
            setShowErrorModal(true);            
            return;
        }
        
        try {
            await axios.post(API_ROUTES.FORGOT_PASSWORD, { email });
            setSuccess('Correo de recuperación enviado.');
            setShowSuccessModal(true);
        } catch (error) {            
            setError(error.response?.data?.error || 'Error al enviar el correo de recuperación.');
            setShowErrorModal(true);
        }
    };

    // Para cerrar los modales    
    const CloseSuccessModal = () => {
        setShowSuccessModal(false);
        navigate(ROUTES.LOGIN); // Redirigir a la página de inicio de sesión
    };
    const CloseErrorModal = () => setShowErrorModal(false);  

    return (
        <>
            <div className="container mt-5">
                <div className="text-center col-12 col-sm-8 col-md-6 col-lg-4 m-auto border rounded-3 p-4">
                    <h1 className="mb-4"><i className="bi bi-lock-fill"></i></h1>
                    <h2 className="text-center">¿Olvidaste tu contraseña?</h2>
                    <p className="mb-4">Puedes restablecer tu contraseña aquí.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-envelope-fill"></i></span>
                            <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" aria-label="email" aria-describedby="basic-addon1" required />
                        </div>
                        <div className="form-group">                                                
                            <button className="btn btn-md btn-primary" type="submit">Enviar correo</button>
                        </div>
                    </form>
                    {/* Success Modal */}
                    <SuccessModal show={showSuccessModal} message={success} onClose={CloseSuccessModal} />
                    {/* Bootstrap error Modal */}
                    <ErrorModal show={showErrorModal} message={error} onClose={CloseErrorModal} />
                </div>
            </div>
        </>
    );
}