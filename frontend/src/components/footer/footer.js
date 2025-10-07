import '../../css/components/footer.css';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import Titobits from '../../images/footer/tito-bits.png';
import { HashLink as Ancla } from 'react-router-hash-link';

export default function Footer() {
    return (
        <>
            <div className='mt-6 mt-10 background-footer'>
                <footer className="container pt-5 pb-3">
                    <div className="row">
                        <div className="container mb-5">
                            <div className="row justify-content-center">
                                <div className="col-md-12 m-auto" style={{display:'contents'}}>
                                    <Link to={ROUTES.FACEBOOK} target="_blank" rel="noopener"><div id="imagen-facebook"></div></Link>
                                    <Link to={ROUTES.LINKEDIN} target="_blank" rel="noopener"><div id="imagen-linkedin"></div></Link>                                                                                                            
                                    <Link to={ROUTES.BLOG} target="_blank" rel="noopener"><div id="imagen-blog"></div></Link>
                                    <Link to={ROUTES.YOUTUBE} target="_blank" rel="noopener"><div id="imagen-youtube"></div></Link>
                                </div>				
                            </div>				
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-white fs-footer ff-normal">Herramientas de Autoría</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.H_AUTORIA} className="text-decoration-none text-white ff-normal">Articulate 360</Link></li>
                                <li><Link to={ROUTES.STORYLINE_360} className="text-decoration-none text-white ff-normal">Storyline 360</Link></li>
                                <li><Link to={ROUTES.RISE_360} className="text-decoration-none text-white ff-normal">Rise 360</Link></li>
                                <li><Link to={ROUTES.CONTENT_LIBRARY} className="text-decoration-none text-white ff-normal">Content Library 360</Link></li>
                                <li><Link to={ROUTES.REVIEW_360} className="text-decoration-none text-white ff-normal">Review 360</Link></li>
                                <li><Link to={ROUTES.PEEK_360} className="text-decoration-none text-white ff-normal">Peek 360</Link></li>
                                <li><Link to={ROUTES.STUDIO_360} className="text-decoration-none text-white ff-normal">Studio 360</Link></li>
                                <li><Link to={ROUTES.REPLAY_360} className="text-decoration-none text-white ff-normal">Replay 360</Link></li>
                                <li><Link to={ROUTES.ARTICULATE_TRAINING} className="text-decoration-none text-white ff-normal">Articulate 360 Training</Link></li>
                                <li><Link to={ROUTES.AI_ASSISTANT} className="text-decoration-none text-white ff-normal">AI Assistant</Link></li>
                                <li><Link to={ROUTES.VYOND} className="text-decoration-none text-white ff-normal">Vyond</Link></li>
                            </ul>
                            <h5 className="text-white fs-footer ff-normal">Desarrollo de cursos a la medida</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.ELEARNING} className="text-decoration-none text-white ff-normal">E-learning</Link></li>
                                <li><Link to={ROUTES.MICROLEARNING} className="text-decoration-none text-white ff-normal">Microlearning</Link></li>
                                <li><Link to={ROUTES.BLENDED_LEARNIGN} className="text-decoration-none text-white ff-normal">Blended Learning</Link></li>
                                <li><Link to={ROUTES.MOOCS} className="text-decoration-none text-white ff-normal">Moocs</Link></li>
                                <li><Link to={ROUTES.ADAPTIVE_LEARNING} className="text-decoration-none text-white ff-normal">Adaptive Learning</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-white fs-footer ff-normal">Cursos de catálogo</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.SEVEN_MINUTES} className="text-decoration-none text-white ff-normal">7 Minutes</Link></li>
                                <li><Link to={ROUTES.LEARNING_COFFEE} className="text-decoration-none text-white ff-normal">Learning Coffee</Link></li>
                                <li><Link to={ROUTES.GO1} className="text-decoration-none text-white ff-normal">GO1</Link></li>
                                <li><Link to={ROUTES.CUSTOM_GUIDE} className="text-decoration-none text-white ff-normal">Custom Guide</Link></li>
                            </ul>
                            <h5 className="text-white fs-footer ff-normal">Plataformas e-learning</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.MOODLE} className="text-decoration-none text-white ff-normal">Moodle</Link></li>
                                <li><Link to={ROUTES.TOTARA} className="text-decoration-none text-white ff-normal">Totara</Link></li>
                                <li><Link to={ROUTES.OTTOLEARN} className="text-decoration-none text-white ff-normal">Ottolearn</Link></li>
                                <li><Link to={ROUTES.REACH_360} className="text-decoration-none text-white ff-normal">Articualte 360 Reach</Link></li>                                
                                <li><Link to={ROUTES.LYS} className="text-decoration-none text-white ff-normal">Lys</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-white fs-footer ff-normal">Extensiones de aprendizaje</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.MOTRAIN} className="text-decoration-none text-white ff-normal">Motrain</Link></li>
                                <li><Link to={ROUTES.CLASS} className="text-decoration-none text-white ff-normal">Class</Link></li>
                                <li><Link to={ROUTES.BBB} className="text-decoration-none text-white ff-normal">BigBlueButton</Link></li>
                                <li><Link to={ROUTES.AUTOCERT} className="text-decoration-none text-white ff-normal">Autocert</Link></li>
                                <li><Link to={ROUTES.ZOOLA} className="text-decoration-none text-white ff-normal">Zoola</Link></li>
                            </ul>
                            <h5 className="text-white fs-footer ff-normal">Exámenes de alta seguridad</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.SARAS} className="text-decoration-none text-white ff-normal">Saras</Link></li>
                                <li><Link to={ROUTES.EVALUACIONES} className="text-decoration-none text-white ff-normal">Diseño y análisis de evaluación</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-white fs-footer ff-normal">Cursos de capacitación</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.CC_ARTICULATE_ASSISTANT} className="text-decoration-none text-white ff-normal">Articulate Assistant</Link></li>
                                <li><Link to={ROUTES.CC_ARTICULATE360} className="text-decoration-none text-white ff-normal">Articulate 360</Link></li>
                                <li><Link to={ROUTES.CC_D_ELEARNING} className="text-decoration-none text-white ff-normal">Diseño e-learning</Link></li>
                                <li><Link to={ROUTES.CC_C_ACCESIBLES_ARTICULATE360} className="text-decoration-none text-white ff-normal">Cursos accesibles Articulate 360</Link></li>
                                <li><Link to={ROUTES.CC_STORYLINE_AVANZADO} className="text-decoration-none text-white ff-normal">Storyline Avanzado</Link></li>
                                <li><Link to={ROUTES.CC_D_INSTRUCCIONAL} className="text-decoration-none text-white ff-normal">Diseño Instruccional para e-learning</Link></li>
                                <li><Link to={ROUTES.CC_VYOND} className="text-decoration-none text-white ff-normal">Vyond</Link></li>   
                                <li><Link to={ROUTES.CC_MOODLE} className="text-decoration-none text-white ff-normal">Moodle</Link></li>
                                <li><Link to={ROUTES.CC_TOTARA} className="text-decoration-none text-white ff-normal">Totara</Link></li>                                                             
                            </ul>
                            <h5 className="text-white fs-footer ff-normal">TAEC Store</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.STORE_ARTICULATE360P} target="_blank" rel="noopener" className="text-decoration-none text-white ff-normal">Articulate 360 Personal</Link></li>
                                <li><Link to={ROUTES.STORE_ARTICULATE360T} target="_blank" rel="noopener" className="text-decoration-none text-white ff-normal">Articulate 360 Teams</Link></li>                                
                                <li><Link to={ROUTES.STORE_TOTARA} target="_blank" rel="noopener" className="text-decoration-none text-white ff-normal">Totara LMS</Link></li>
                                <li><Link to={ROUTES.STORE_VYONDPRE} target="_blank" rel="noopener" className="text-decoration-none text-white ff-normal">Vyond Premium</Link></li>
                                <li><Link to={ROUTES.STORE_VYONDPRO} target="_blank" rel="noopener" className="text-decoration-none text-white ff-normal">Vyond Professional</Link></li>
                                <li><Link to={ROUTES.STORE_MOODLE} target="_blank" className="text-decoration-none text-white ff-normal">Moodle LMS</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5 className="text-white fs-footer ff-normal">Contáctanos</h5>
                            <ul className="list-unstyled">
                                <li><Link to={ROUTES.CONTACTO} className="text-decoration-none text-white ff-normal">Contacto</Link></li>
                                <li><Ancla to={ROUTES.UBICACION} className="text-decoration-none text-white ff-normal">Ubicación</Ancla></li>
                                <li><Link to={ROUTES.SOPORTE} className="text-decoration-none text-white ff-normal">Soporte</Link></li>
                                <li><Ancla to={ROUTES.BOLSA_TRABAJO} className="text-decoration-none text-white ff-normal">Bolsa de trabajo</Ancla></li>
                            </ul>                            
                            <h5 className="text-white fs-footer ff-normal"><Link to={ROUTES.BLOG} target="_blank" rel="noopener" className="text-decoration-none text-white ff-normal">Blog</Link></h5>
                        </div>
                        <div className="container mt-4">
                            <div className="row justify-content-center">
                                <div className="col-md-12 m-auto mt-5" style={{display:'contents'}}>
                                    <p className="text-white">
                                        <Link to={ROUTES.TERMINOS_CONDICIONES} className="text-decoration-none text-white ff-normal me-2">Términos y condiciones</Link>
                                        |
                                        <Link to={ROUTES.PRIVACIDAD} className="text-decoration-none text-white ff-normal ms-2">Políticas de privacidad</Link>
                                    </p>
                                </div>																	
                            </div>					
                        </div>
                    </div>
                </footer>
                <div className="container-fluid">
                    <div id="container-tito">																            
                        <img src={Titobits} width="172" height="250" alt="Tito bits" />
                    </div>
                </div>
            </div>
        </>
    );
}