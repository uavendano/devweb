import { Link } from 'react-router-dom';
import '../../css/pages/sevenMinutes.css';
import ROUTES from "../../routes/routes.js";
import ROUTESPDF from '../../routes/routesPDF.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function SevenMinutes() {
    const imgSevenMinutes = require.context('../../images/pages/sevenminutes',true);

    return (
        <>
            {/*banner*/}
            <div className="container-fluid bg-white sticky borde">
                <div className="d-flex justify-content-center align-items-center">
                    <h3 className="me-3 py-2 fs-6 fs-9 ff-normal custom-color">¿Quieres ver 7Minutes en acción? ¡Solicita una prueba gratuita de 15 días!</h3>
                    <Link to={ROUTES.LAND_SEVEN_MINUTES} className="text-decoration-none fs-6 fs-9 custom-color ff-bold btn-demo" role="button">Solicitar prueba</Link>
                </div>
            </div>
            <div className="container-fluid p-5 mt-1" style={{background:"#F7D13B"}}>
                <div className="container text-center">
                    <img src={imgSevenMinutes(`./logo.png`)} className="img-fluid img-w-50" width="650" height="315" alt="logo 7minutes" />
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container">
                    <div className="row justify-content-center">                    
                        <h1 className="text-center fs-title ff-bold custom-color">SIETE MINUTOS PARA APRENDERLO <br className="d-none d-xl-block" /> SIETE MINUTOS PARA AMARLO.</h1>
                    </div>           
                </div>
                <div className="container text-center">
                    <video className="mt-5" width="65%" controls>
                        <source src="https://taecweb.s3.us-east-1.amazonaws.com/taec.com.mx/7minutes/Video-Emotional.mp4" type="video/mp4" />            
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="container-fluid mt-5">
                    <div className="container text-center">
                        <p className="fs-5 fs-texto ff-normal custom-color">7Minutes es la plataforma digital de formación online que hace el aprendizaje accesible para todos.</p>
                        <p className="fs-5 fs-texto ff-normal custom-color">En su interior encontrarás numerosas sesiones de formación con una duración media de 7 minutos sobre temas que van desde soft skills o habilidades blandas hasta liderazgo, transformación digital e incluso ventas, marketing y mucho más.</p>
                        <p className="fs-5 fs-texto ff-normal custom-color">¡Gracias al formato Micro-Mobile, con 7Minutes cada colaborador puede monitorear su progreso con un solo clic y tomar lecciones donde y cuando quiera!</p>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">                    
                            <h1 className="py-5 text-center fs-title ff-bold custom-color">Micro</h1>
                            <div className="container text-center">
                                <p className="fs-5 fs-texto ff-normal custom-color">Nuestra vida diaria requiere que estemos siempre conectados y en movimiento; gestionamos decenas de notificaciones y llenamos nuestro día de tantas actividades que parece imposible encontrar tiempo para aprender. Pero hoy existe la posibilidad de superar esa rutina: ¡hacer un curso de 7Minutos!</p>
                            </div>                        
                        </div>           
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="container m-auto">
                        <div className="row g-4 row-cols-2 row-cols-lg-5 text-center fs-9 ff-normal custom-color-blue">
                            <div className="feature col">                                
                                <img src={imgSevenMinutes(`./video.png`)} className="img-fluid img-w-50" width="155" height="155" alt="Introducción" />
                                <div className="mt-4">
                                    <span>1 minuto</span><br />
                                    <span>Introducción del por</span><br className="d-none d-xl-block" />
                                    <span>qué en storytelling</span>
                                </div>									
                            </div>
                            <div className="feature col">                            
                                <img src={imgSevenMinutes(`./pesa.png`)} className="img-fluid img-w-50" width="155" height="155" alt="Contenido" />
                                <div className="mt-4">
                                    <span>3 minutos</span><br />
                                    <span>contenido</span>                    
                                </div>	
                            </div>
                            <div className="feature col">                            
                                <img src={imgSevenMinutes(`./alerta.png`)} className="img-fluid img-w-50" width="155" height="155" alt="Evaluación" />
                                <div className="mt-4">
                                    <span>1 minuto</span><br />
                                    <span>evaluación</span>                    
                                </div>
                            </div>
                            <div className="feature col">                            
                                <img src={imgSevenMinutes(`./7.png`)} className="img-fluid img-w-50" width="155" height="155" alt="Aprendizaje" />
                                <div className="mt-4">
                                    <span>1 minuto</span><br />
                                    <span>7 puntos clave de </span><br className="d-none d-xl-block" />        
                                    <span>aprendizaje</span>
                                </div>
                            </div>
                            <div className="feature col">                            
                                <img src={imgSevenMinutes(`./medalla.png`)} className="img-fluid img-w-50" width="155" height="155" alt="Ejercicio" />
                                <div className="mt-4">
                                    <span>1 minuto</span><br />
                                    <span>ejercicio</span>                    
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="container text-center mt-5">                        
                        <Link to={ROUTESPDF.CAT_7MINUTES} className="text-decoration-none fs-5 fs-texto custom-color ff-bold btn-demo" target="_blank" rel="noopener noreferrer" role="button">Revisa el catálogo</Link>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row justify-content-center">                    
                            <h1 className="py-5 text-center fs-title ff-bold custom-color">Mobile</h1>
                            <div className="container text-center">
                                <p className="fs-5 fs-texto ff-normal custom-color">Los cursos de 7Minutes son 100% responsivos, se pueden visualizar y funcionar muy bien tanto en smartphones, tablets, como en computadoras de escritorio y portátiles.</p>
                                <p className="fs-5 fs-texto ff-normal custom-color">¡Por eso en 7Minutes cada píxel cuenta!</p>
                            </div>                        
                        </div>
                        <div className="container text-center mt-5">                        
                            <img src={imgSevenMinutes(`./Multidispositivos.png`)} className="img-fluid img-w-75" width="780" height="405" alt="Multidispositivos" />
                        </div>        
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row justify-content-center">                    
                            <h1 className="py-5 text-center fs-title ff-bold custom-color">Tracking</h1>
                            <div className="container text-center">
                                <p className="fs-5 fs-texto ff-normal custom-color">Con 7Minutes monitoreas el avance de los participantes y tienes la oportunidad de explotar los datos recopilados para mejorar el desempeño de tus indicadores.</p>
                                <p className="fs-5 fs-texto ff-normal custom-color">Los cursos de 7Minutes pueden integrarse en su plataforma o pueden cursarse dentro de la propia plataforma de 7Minutes. ¡La elección es tuya!</p>
                            </div>                        
                        </div>
                        <div className="container text-center">                        
                            <img src={imgSevenMinutes(`./Tracking.gif`)} className="img-fluid img-w-50" width="195" height="195" alt="Multidispositivos" />
                        </div>
                        <div className="container text-center mt-5">                        
                            <Link to={ROUTES.LAND_SEVEN_MINUTES} className="text-decoration-none fs-5 fs-texto custom-color ff-bold btn-demo" role="button">Contáctanos para una prueba gratuita</Link>
                        </div>       
                    </div>
                </div>

                <div className='pt-5'>
                    <HrTitle t1="Otros Servicios" />
                </div>

                {/* componente bloque central*/}
                <BloqueCentral 
                    titleB1={"PLATAFORMAS"}
                    img1B1={"totara.png"}
                    altimg1B1={"Totara"}
                    img2B1={"one.png"}
                    altimg2B1={"One"}
                    img3B1={"moodle.png"}
                    altimg3B1={"Moodle"}
                    linkB1={ROUTES.PLATAFORMAS_ELEARNING}          
                    subtitle={""}     
                    titleB2={(<>DESARROLLO DE CURSOS <br /> A LA MEDIDA</>)}                
                    img4B2={"d-cursos.png"}
                    altimg4B2={"Cursos a la medida"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>CURSOS DE <br /> CATÁLOGO</>)}                
                    linkB3={ROUTES.CURSOS_CATALOGO}
                    titleB4={(<>CURSOS DE <br /> CAPACITACIÓN</>)}                
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                /> 
            </div>
        </>
    );
}