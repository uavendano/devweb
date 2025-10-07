import { useState } from 'react';
import axios from 'axios';
import '../../css/components/formulario.css';
import SuccessModal from '../modales/successModal.js';
import ErrorModal from '../modales/errorModal.js';
import API_ROUTES from '../../routes/apiRoutes.js';

export default function Formulario() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        empresa: '',
        pais: 'México',
        asunto: '',
        servicio: '',
        comentario: ''
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await axios.post(API_ROUTES.MAIL_CONTACT, formData);
            setFormData({
                name: '',
                email: '',
                tel: '',
                empresa: '',
                pais: 'México',
                asunto: '',
                servicio: '',
                comentario: ''
            });
            setSuccess(response.data.message || 'Correo enviado exitosamente!');
            setShowSuccessModal(true);
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.message || 'Ocurrió un error al enviar el formulario.');
            setShowErrorModal(true);
        } finally {
            setLoading(false);
        }
    };

    const CloseSuccessModal = () => setShowSuccessModal(false);
    const CloseErrorModal = () => setShowErrorModal(false);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="container" id="cont-form">
                    <div className="col-md-12 m-auto text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-12 m-auto">
                                <h2 className="mt-3 text-white ff-bold fs-subtitle">Envíanos tus datos</h2>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-12 text-center mt-3">
                        <div className="row justify-content-center">
                            <form className="row justify-content-center" onSubmit={handleSubmit}>                                
                                <div className="col-md-6 m-auto">
                                    <div className="mt-3">
                                        <input type="text" name="name" className="form-control bg-white opacity-75" placeholder="Nombre" autoComplete="off" value={formData.name} onChange={handleChange} />
                                    </div>
                                    <div className="mt-3">
                                        <input type="email" name="email" className="form-control bg-white opacity-75" placeholder="E-mail*" autoComplete="off" value={formData.email} onChange={handleChange} required />
                                    </div>
                                    <div className="mt-3">
                                        <input type="tel" name="tel" className="form-control bg-white opacity-75" placeholder="Teléfono" pattern="[0-9]+" autoComplete="off" value={formData.tel} onChange={handleChange} />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" name="empresa" className="form-control bg-white opacity-75" placeholder="Empresa o institución" autoComplete="off" value={formData.empresa} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <div className="mt-3">
                                        <input type="text" name="pais" className="form-control bg-white opacity-75" placeholder="País*" defaultValue="México" autoComplete="off" value={formData.pais} onChange={handleChange} required />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" name="asunto" className="form-control bg-white opacity-75" placeholder="Asunto*" autoComplete="off" value={formData.asunto} onChange={handleChange} required />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" name="servicio" defaultValue="" className="form-control bg-white opacity-75 " placeholder="Servicio - producto" autoComplete="off" value={formData.servicio} onChange={handleChange} />
                                    </div>
                                    <div className="mt-3">
                                        <input type="text" name="comentario" className="form-control bg-white opacity-75" placeholder="Comentario" autoComplete="off" value={formData.comentario} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="text-end mt-3 mb-3">
                                    <button id="btn-send" className='fs-texto' type="submit" name="sendmail" disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <SuccessModal show={showSuccessModal} message={success} onClose={CloseSuccessModal} />
            
            {/* Error Modal */}
            <ErrorModal show={showErrorModal} message={error} onClose={CloseErrorModal} />
        </>
    )
};