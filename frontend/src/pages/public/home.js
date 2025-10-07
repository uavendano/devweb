import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/home.css';
import HrTitle from '../../components/forPages/hrTitle.js';
import SliderClientes from '../../components/forPages/sliderClientes.js';

export default function Home() {
    const imgHome = require.context('../../images/pages/home',true);

    return (
        <>    
            <div className="mt-4">
               {/* titulo e imagenes */}
                <div className="container-fluid bg-black pt-5 pb-10">
                    <div className="container">
                        <div className="row justify-content-center">                    
                            <h1 className="text-center text-white fs-title ff-normal">Desarrollando experiencias e-learning</h1>                            
                        </div>            
                    </div>
                </div>
                <div className="container mt-n6">
                    <div className="row justify-content-center">
                        <div className="m-auto text-center d-block">
                            <img src={imgHome(`./taec_desarrollo_elearning.png`)} className='img-fluid img-w-75' width="648" height="217" alt="taec_desarrollo_elearning" />
                            <img src={imgHome(`./taec_tecnologia_y_aprendizaje.png`)} className='img-fluid img-w-75' width="778" height="504" alt="taec_tecnologia_y_aprendizaje" />
                        </div>
                    </div>
                </div>
                {/* titulo y bloques black */}
                <div className="container-fluid mt-5 bg-black text-white">
                    <div className="row">
                        <h1 className="m-auto text-center mt-5 mb-5 fs-title ff-normal">E-LEARNING A TU MEDIDA</h1>
                        <div className="col-lg-4 d-flex flex-column justify-content-between text-center mt-1">
                            <div>
                                <h2 className="mb-4 fs-subtitle ff-bold">Crea tu curso</h2>
                                <p className="fs-5 fs-texto ff-normal">Te asesoramos y brindamos las herramientas ideales para desarrollar un curso virtual.</p>
                            </div>
                            <div>
                                <img src={imgHome(`./crea_cursos_online_taec.png`)} className="m-4 img-fluid img-w-75" width="150" height="150" alt="crea_cursos_online_taec" />
                                <p className="mb-5">
                                    <Link to={ROUTES.HERRAMIENTAS_AUTORIA} className="text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Conoce más</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-between text-center mt-1">
                            <div>
                                <h2 className="mb-4 fs-subtitle ff-bold">Diseñamos</h2>                   
                                <p className="m-auto fs-5 fs-texto ff-normal">Nosotros diseñamos el curso que necesitas con metodologías innovadoras como blended learning, aprendizaje adaptativo, MOOCs y microlearning.</p>
                            </div>
                            <div>
                                <div className="bordes-white">
                                    <img src={imgHome(`./diseña_cursos_virtuales.png`)} className="m-4 img-fluid img-w-75" width="150" height="150" alt="diseña_cursos_virtuales" />
                                </div>                            
                                <p className="mb-5">
                                    <Link to={ROUTES.DESARROLLO_CURSOS} className="text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Conoce más</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-between text-center mt-1">
                            <div>
                                <h2 className="mb-4 fs-subtitle ff-bold">Elígelo</h2>
                                <p className="m-auto fs-5 fs-texto ff-normal">¿Sin tiempo para crear tu propio curso online? Adquiere lo que necesites de nuestro catálogo e implementa cuando lo desees.</p>
                            </div>
                            <div>
                                <img src={imgHome(`./elegir_curso_elearning.png`)} className="m-4 img-fluid img-w-75" width="150" height="150" alt="elegir_curso_elearning" />
                                <p className="mb-5">
                                    <Link to={ROUTES.CURSOS_CATALOGO} className="text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Conoce más</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* titulo y bloques white */}
                <div className="container-fluid mt-5">
                    <div className="row">
                        <h1 className="m-auto text-center mt-5 mb-5 fs-title ff-normal custom-color">GESTIONA TU APRENDIZAJE ONLINE</h1>
                        <div className="col-lg-4 d-flex flex-column justify-content-between text-center mt-4">
                            <div>
                                <h2 className="mb-4 fs-subtitle ff-bold custom-color">Crea, cursa y evalúa</h2>
                                <p className="fs-5 fs-texto ff-normal custom-color">¿Corporativo o universidad? Aprendizaje y evaluaciones online en la plataforma e-learning ideal para tus necesidades.</p>
                            </div>
                            <div>
                                <img src={imgHome(`./evaluar_cursos_online.png`)} className="m-4 img-fluid img-w-75" width="150" height="150" alt="evaluar_cursos_online" />
                                <p className="mb-5">
                                    <Link to={ROUTES.PLATAFORMAS_ELEARNING} className="text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Conoce más</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-between text-center mt-4">
                            <div>
                                <h2 className="mb-4 fs-subtitle ff-bold custom-color">Innovación y Seguridad</h2>
                                <p className="fs-5 fs-texto ff-normal custom-color">Mejora los procesos e integra a tu plataforma aulas virtuales, gamificación, creación y análisis de reportes.</p>
                            </div>
                            <div>
                                <div className="bordes">
                                    <img src={imgHome(`./gamification_e_learning.png`)} className="m-4 img-fluid img-w-75" width="150" height="150" alt="gamification_e_learning" />
                                </div>                    
                                <p className="mb-5">
                                    <Link to={ROUTES.EXTENCIONES_APRENDIZAJE} className="text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Conoce más</Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-between text-center mt-4">
                            <div>
                                <h2 className="mb-4 fs-subtitle ff-bold custom-color">Tecnología personalizada</h2>
                                <p className="fs-5 fs-texto ff-normal custom-color">Soporte, soluciones de TI y desarrollo a la medida para cumplir objetivos y tareas específicas.</p>
                            </div>
                            <div>
                                <img src={imgHome(`./soporte_lms.png`)} className="m-4 img-fluid img-w-75" width="150" height="150" alt="soporte_lms" />
                                <p className="mb-5">
                                    <Link to={ROUTES.SERVICIOS_TI} className="text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Conoce más</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <HrTitle t1="Reseñas de" t2="nuestros clientes" />
                
                <SliderClientes />
            </div>            
        </>
    );
}