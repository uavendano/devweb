import IconsMenu from '../../components/navbar/iconsMenu.js';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/articulate360.css';
import { useEffect } from 'react';
import LogoArt360 from '../../images/pages/articulate360/herramientas_articulate.png';
import BloqueAplicaciones from '../../components/bloques/bloqueAplicaciones.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Articulate360() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.STORYLINE_360,ROUTES.STUDIO_360,ROUTES.REPLAY_360,ROUTES.REVIEW_360,ROUTES.ARTICULATE_TRAINING,ROUTES.CONTENT_LIBRARY,ROUTES.RISE_360,ROUTES.PEEK_360,ROUTES.AI_ASSISTANT];
    const name_prod = [<>Storyline<br /> 360</>,<>Studio<br /> 360</>,<>Replay<br /> 360</>,<>Review<br /> 360</>,<>Articulate 360<br /> Training</>,<>Content Library<br /> 360</>,<>Rise<br /> 360</>,<>Peek<br /> 360</>,<>AI<br /> Assistant</>];
    
    useEffect(() => {          
        document.body.id = 'art360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.HERRAMIENTAS_AUTORIA}
                optionBackTxt="Articulate 360"
                opciones={3}
                txt={["Descripción","Soporte","Aprende Articulate 360"]}
                urls={['',ROUTES.SOPORTE,ROUTES.CC_ARTICULATE360]}
            />
            <IconsMenu 
                id_ico={'ART360'}                
                title={''} 
                iconos={9}
                urls={enlaces} 
                name={name_prod}
            />
            <div className="mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h1 className="text-white fs-title ff-bold">¿Qué es Articulate 360?</h1>
                            <h2 className="text-white fs-title ff-bold">El software e-learning más completo<br className="d-none d-xl-block" /> para tus creaciones</h2>
                        </div>
                        <div className="col-md-12 text-center py-5">
                            <img src={LogoArt360} alt="herramientas_articulate" className='img-fluid img-w-75' width="450" height="auto" />
				        </div>
                        <div className="col-md-12 text-center mt-3">
                            <h2 className="text-white fs-subtitle ff-bold">Articulate 360, integral e intuitivo.</h2>
                            <p className="text-white fs-5 fs-texto ff-normal">Explora todas las herramientas de Articulate y crea una experiencia e-learning responsiva,<br className="d-none d-xl-block" /> interactiva y con evaluaciones didácticas. La forma rápida y sencilla de generar simulaciones de software.</p>
                        </div>
                    </div>
                </div>
                <BloqueAplicaciones 
                    subtitle="Aplicaciones 360 para la creación de contenido"
                    productos={[
                        {
                            icono: "storyline_articulate_taec.png",
                            alt: "storyline_articulate_taec",
                            nombre: "Storyline 360",
                            descripcion: "Crea cursos virtuales interactivos y personalizados.",
                            link: ROUTES.STORYLINE_360
                        },
                        {
                            icono: "rise_articulate_taec.png",
                            alt: "rise_articulate_taec",
                            nombre: "Rise 360",
                            descripcion: "Diseña cursos aptos para cualquier dispositivo.",
                            link: ROUTES.RISE_360
                        },
                        {
                            icono: "studio_articulate_taec.png",
                            alt: "studio_articulate_taec",
                            nombre: "Studio 360",
                            descripcion: "Convierte tus presentaciones de PowerPoint en cursos.",
                            link: ROUTES.STUDIO_360
                        }
                    ]}
                />
                <BloqueAplicaciones 
                    subtitle="Aplicaciones 360 para screencast"
                    productos={[
                        {
                            icono: "peek_screencast_articulate_taec.png",
                            alt: "peek_screencast_articulate_taec",
                            nombre: "Replay 360",
                            descripcion: "Graba y edita presentaciones de pantalla que puedes personalizar.",
                            link: ROUTES.REPLAY_360
                        },
                        {
                            icono: "peek_screencast_articulate_taec.png",
                            alt: "peek_screencast_articulate_taec",
                            nombre: "Peek 360",
                            descripcion: "La forma más sencilla de crear grabaciones de pantalla. Ideal para Mac o PC.",
                            link: ROUTES.PEEK_360
                        }
                    ]}
                />
                <BloqueAplicaciones 
                    subtitle="Complementa tu experiencia virtual"
                    productos={[
                        {
                            icono: "content_library_articulate_taec.png",
                            alt: "content_library_articulate_taec",
                            nombre: "Content Library 360",
                            descripcion: "Encuentra recursos gráficos y plantillas de presentaciones hechas por y para profesionales.",
                            link: ROUTES.CONTENT_LIBRARY
                        },
                        {
                            icono: "review_articulate_taec.png",
                            alt: "review_articulate_taec",
                            nombre: "Review 360",
                            descripcion: "Colabora de forma simple y acelera la revisión de tus proyectos.",
                            link: ROUTES.REVIEW_360
                        },
                        {
                            icono: "como_usar_articulate_taec.png",
                            alt: "como_usar_articulate_taec",
                            nombre: "Articulate 360 Training",
                            descripcion: "Potencia tus habilidades en el uso de la plataforma. La formación que necesitas.",
                            link: ROUTES.ARTICULATE_TRAINING
                        }
                    ]}
                />
                <div className="container-fluid mt-6 bg-grey-black">
                    <div className="container">
                        <div className="row justify-content-center" id="personal-teams">
                            <div className="col-md-12">
                                <h1 className="text-center text-white pt-5 pb-5 pb-6 fs-title ff-bold">Todo en una sola licencia.<br /> Elige el plan que se ajuste a ti.</h1>
                            </div>
                            <div className="col-md-6 text-center">
                                <p className="text-white fs-subtitle ff-bold">ARTICULATE 360<br /> PERSONAL</p>
                                <hr className="vr-white" />
                                <div className="m-auto p-3 border-list w-md-auto">
                                    <ul className="list-unstyled text-start">
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">150 GB de almacenamiento en<br className="d-none d-lg-block" /> Articulate Review.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de cursos para múltiples<br className="d-none d-lg-block" /> dispositivos.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de cursos responsivos con<br className="d-none d-lg-block" /> aplicación Web.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de videos de<br className="d-none d-lg-block" /> capacitación y grabaciones<br className="d-none d-lg-block" /> de pantalla.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Facilidad de revisión previa de<br className="d-none d-lg-block" /> forma colaborativa.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Acceso a biblioteca de plantillas<br className="d-none d-lg-block" /> y recursos.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                        <li>							
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de cursos para<br className="d-none d-lg-block" /> dispositivos con herramientas<br className="d-none d-lg-block" /> de escritorio.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>								
                                        </li>
                                    </ul>
                                </div>
                                <div className="py-4">
                                    <Link to={ROUTES.STORE_ARTICULATE360P} className="fs-5 btn-blue fs-texto ff-normal" target="_blank" rel="noopener noreferrer" >Comprar</Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center mt-5 mt-md-0">
                                <p className="text-white fs-subtitle ff-bold">ARTICULATE 360<br /> TEAMS</p>
                                <hr className="vr-white" />
                                <div className="m-auto p-3 border-list w-md-auto">
                                    <ul className="list-unstyled text-start">
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Almacenamiento ilimitado en<br className="d-none d-lg-block" /> Articulate Review.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de cursos para múltiples<br className="d-none d-lg-block" /> dispositivos.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de cursos responsivos con<br className="d-none d-lg-block" /> aplicación Web.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de videos de<br className="d-none d-lg-block" /> capacitación y grabaciones<br className="d-none d-lg-block" /> de pantalla.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Facilidad de revisión previa de<br className="d-none d-lg-block" /> forma colaborativa.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Acceso a biblioteca de plantillas<br className="d-none d-lg-block" /> y recursos.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Gestión de cuentas.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Ayuda por chat en vivo.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Administración de equipos.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Asistencia prioritaria por correo<br className="d-none d-lg-block" /> electrónico.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Descuentos por volumen.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Creación de cursos para<br className="d-none d-lg-block" /> dispositivos con herramientas<br className="d-none d-lg-block" /> de escritorio.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text-white d-flex justify-content-between align-items-start mt-2 border-bottom-2px">
                                                <span className="fs-5 fs-texto ff-normal">Obtención de plantillas y activos<br className="d-none d-lg-block" /> del curso.</span>
                                                <i className="bi bi-check-circle fs-5 fs-texto ms-4"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="py-4 d-flex justify-content-center align-items-center gap-3 flex-wrap">
                                    <Link to={ROUTES.CONTACTO} className="mt-2 text-center text-decoration-none fs-5 fs-texto ff-normal custom-color-blue">Más información</Link>
                                    <Link to={ROUTES.STORE_ARTICULATE360T} className="fs-5 btn-blue fs-texto ff-normal" target="_blank" rel="noopener noreferrer" >Comprar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <HrTitle t1="Otros Servicios" />

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
                    altimg4B2={"Desarrollo de cursos"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>CURSOS DE<br /> CATÁLOGO</>)}                
                    linkB3={ROUTES.CURSOS_CATALOGO}
                    titleB4={(<>CURSOS DE<br /> CAPACITACIÓN</>)}               
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />
            </div>
        </>
    );
}