import Poster from '../../../images/pages/landings/poster.jpg';
import '../../../css/pages/landing/LandingSevenMinutes.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../../routes/routes.js';

export default function LandingSevenMinutes() {
    return (
        <>
        <div className="mt-5">
            <div className="container text-center">
                <video className="mt-5" width="60%" controls poster={Poster}>
                    <source src="https://s3.amazonaws.com/taec.com.mx/landingpage/videos/video_1.mp4" type="video/mp4" />            
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="container-fluid mt-6">
                <div className="container" id="cont-form-seven">
                    <div className="col-md-12 m-auto text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-12 m-auto">
                                <h2 className="mt-3 text-white ff-bold fs-subtitle">¡Aprovecha la oportunidad de conocer algo que transformará el aprendizaje!
                                <br className="d-none d-xl-block" /> Deja tus datos y solicita acceso a una prueba gratuita.</h2>   
                            </div>	                
                        </div>
                    </div>	
                    <div className="col-md-12 mt-3">
                        <div className="row justify-content-center">
                            <form className="row justify-content-center" action="" method="">		
                                <div className="col-md-6 m-auto">
                                    <div className="mt-3">                       
                                        <input type="text" name="firstname" className="form-control bg-white opacity-75" placeholder="Nombre*" required="" />
                                    </div>
                                    <div className="mt-3">                         
                                        <input type="text" name="lastname" className="form-control bg-white opacity-75" placeholder="Apellidos*" required="" />
                                    </div>
                                    <div className="mt-3">
                                        <input type="tel" name="tel" className="form-control bg-white opacity-75" placeholder="Teléfono*" pattern="[0-9]+" required="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mt-3">
                                        <input type="email" name="email" className="form-control bg-white opacity-75" placeholder="Correo electrónico*" required="" />
                                    </div>
                                    <div className="mt-3">                           
                                        <input type="text" name="company" className="form-control bg-white opacity-75" placeholder="Empresa o institución" />
                                    </div>
                                </div>
                                <div className="row justify-content-center py-3">
                                    <div className="col-md-7">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="privacy" value="Doy mi consentimiento" required="" />
                                            <label className="form-check-label ff-normal custom-color" >Doy mi consentimiento para el envío de mis datos según la <Link to={ROUTES.PRIVACIDAD}  target="_blank">política de privacidad</Link> del sitio.</label>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="text-end">
                                            <button className="mt-2 mt-md-0" id="btn-send-seven" type="submit" name="sendmail">SUSCRÍBETE</button>      
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>	
                </div>
            </div>
        </div>
        </>
    );
}