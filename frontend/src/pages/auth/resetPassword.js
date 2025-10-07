import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routes.js';
import SuccessModal from '../../components/modales/successModal.js';
import ErrorModal from '../../components/modales/errorModal.js';
import API_ROUTES from '../../routes/apiRoutes.js';

export default function ResetPassword() {    
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');        
    const location = useLocation();
    const navigate = useNavigate();
    const token = new URLSearchParams(location.search).get('token'); // Obtén el token del query string
    // Modales
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');    
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Validar que la contraseña tenga al menos 7 caracteres
    const isPasswordValid = (password) => password.length >= 7;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mensaje Validar longitud mínima de la contraseña
        if (!isPasswordValid(password)) {
            setError('La contraseña debe tener al menos 7 caracteres.');
            setShowErrorModal(true);
            return;
        }
        // Mensaje Validar password iguales
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            setShowErrorModal(true);
            return;
        }     

        try {            
            await axios.post(`${API_ROUTES.RESET_PASSWORD}?token=${token}`, { password });
            setSuccess('Contraseña actualizada correctamente.');
            setShowSuccessModal(true);            
            setTimeout(() => {
                navigate(ROUTES.LOGIN) // Redirigir al login después de un tiempo
            }, 3000);
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error en el restablecimiento de contraseña.';
            setError(errorMessage);
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
                <div className="text-center col-4 m-auto border rounded-3 p-4">
                    <h1 className="mb-4"><i className="bi bi-key-fill"></i></h1>
                    <h2 className="text-center mb-4">Restablecer Contraseña</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">                            
                            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nueva contraseña" required />
                        </div>
                        <div className="input-group mb-3">                            
                            <input className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar nueva contraseña" required />
                        </div>
                        <div className="form-group">                                                
                            <button className="btn btn-md btn-primary" type="submit">Restablecer Contraseña</button>
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