import { useEffect } from 'react';
import '../../css/pages/aiAssistant.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import ROUTESPDF from '../../routes/routesPDF.js';
import BloqueAplicaciones from '../../components/bloques/bloqueAplicaciones.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function AiAssistant() {
    const imgAiAssistant = require.context('../../images/pages/aiassistant',true);

    useEffect(() => {          
        document.body.id = 'aiAssistant-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="AI Assistant"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <div className="mt-5 text-white">
                <div className="col-md-12 m-auto text-center">
                    <h1 className="fs-title ff-bold">Conozca a su nuevo AI Assistant</h1>
                    <p className="fs-5 fs-texto ff-normal">Crea mejores cursos hasta 9 veces más rápido con la magia de la IA.</p>
                    <img src={imgAiAssistant(`./ai_logo.png`)} className="mt-5 img-fluid img-w-50" width="450" height="auto" alt="AI Assistant logo" />
                    <h1 className="mt-5 mt-md-6 fs-title ff-bold">Desbloquee la creatividad y la productividad con<br className="d-none d-xl-block" /> la magia de la AI Assistant</h1>
                </div>
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 m-auto">
                                <p className="fs-5 fs-texto ff-normal text-center">
                                    Mantén el control y guía a AI Assistant 
                                    directamente en tus flujos de trabajo 
                                    en Articulate 360 para generar y 
                                    perfeccionar el contenido.
                                </p>
                            </div>				
                            <div className="col-md-6 mt-3 mt-md-5">
                                <img src={imgAiAssistant(`./guia_ai.png`)} className="img-fluid" width="630" height="auto" alt="Guía AI Assistant" />
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-9">
                                <p className="fs-5 fs-texto ff-normal text-center">La plataforma de aprendizaje electrónico n.° 1 para crear capacitaciones en el lugar de trabajo ahora es más potente. Crea contenido de cursos hasta 9 veces más rápido guiando al Asistente de inteligencia artificial (AI Assistant) para generar y perfeccionar el contenido.</p>
                            </div>
                            <div className="container mt-5 ratio ratio-16x9">				
                                <iframe src="https://www.youtube.com/embed/wvz9C3wBIsg" title="Articulate 360 | AI Assistant is Here [NEW!]" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen=""></iframe>					
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mt-6 mt-10">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="position-relative">						
                                    <img src={imgAiAssistant(`./crear_cursos.png`)} className="img-fluid" width="525" height="auto" alt="Crear cursos AI" />						
                                    <img src={imgAiAssistant(`./float_1.png`)} className="d-none d-md-block img-fluid img-w-xl-35 float-1" width="190" height="auto" alt="Ico flotante 1" />
                                    <img src={imgAiAssistant(`./float_2.png`)} className="d-none d-md-block img-fluid img-w-xl-35 float-2" width="120" height="auto" alt="Ico flotante 2" />
                                </div>                    
                            </div>			
                            <div className="col-md-6 m-auto mt-5 mt-md-0">
                                <h1 className="fs-title ff-bold text-center">La IA, el camino correcto</h1>
                                <p className="fs-5 fs-texto ff-normal text-center">
                                    Mantén el control. AI Assistant acelera la creación de cursos en línea. 
                                    AI Assistant está orientado para el diseño instruccional por lo que recibirás ayuda de alta calidad en todo momento.
                                </p>
                                <div className="position-relative mt-5">
                                    <img src={imgAiAssistant(`./float_3.png`)} className="d-none d-lg-block m-auto img-fluid img-w-xl-35 float-3" width="200" height="auto" alt="Stars" />
                                </div>									
                            </div>							
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <BloqueAplicaciones 
                        subtitle={<>Aplicaciones 360 para la creación<br className="d-none d-xl-block" /> de contenido con AI Assistant</>}
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
                            }
                        ]}
                    />
                </div>
                <div className="container m-auto text-center mt-5 mt-md-10">
                    <h1 className="fs-title ff-bold">IA responsable</h1>
                    <p className="fs-5 fs-texto ff-normal">Con AI Assistant, siempre tienes el control. Articulate no requiere ninguna retención de datos con nuestros subprocesadores de IA y nunca usamos tu contenido para entrenar a nuestra IA. Tú y tu equipo pueden estar tranquilos sabiendo que AI Assistant está diseñada para brindar transparencia, equidad, seguridad y privacidad.</p>
                    <div className="position-relative mt-4">
                        <img src={imgAiAssistant(`./take_course.png`)} className="mt-5 img-fluid img-w-75" width="520" height="auto" alt="take_course" />
                        <img src={imgAiAssistant(`./float_3.png`)} className="d-none d-md-block img-fluid img-w-xl-35 float-4" width="90" height="auto" alt="Ico flotante 3" />
                        <img src={imgAiAssistant(`./float_4.png`)} className="d-none d-md-block img-fluid img-w-xl-35 float-5" width="90" height="auto" alt="Ico flotante 4" />
                        <img src={imgAiAssistant(`./float_5.png`)} className="d-none d-md-block img-fluid img-w-xl-35 float-6" width="90" height="auto" alt="Ico flotante 5" />
                        <img src={imgAiAssistant(`./float_2.png`)} className="d-none d-md-block img-fluid img-w-xl-35 float-7" width="90" height="auto" alt="Ico flotante 2" />
                    </div>
                    <div className="container text-center">
                        <Link to={ROUTESPDF.AI_SECURITY} target="_blank" rel="noopener" className="my-5 rounded-4 p-2 fs-5 btn-blue fs-texto ff-normal" >Saber mas sobre seguridad</Link>
                    </div>                  
                </div>
                <div className="container-fluid mt-5">
                    <h1 className="text-center fs-title ff-bold">Todo en una sola licencia.<br /> Elige el plan que se ajuste a ti.</h1>
                    <div className="container mt-4 mt-md-6">		
                        <div className="row align-items-stretch">
                            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column">
                                <h2 className="fs-subtitle ff-bold">Plan Standard</h2>
                                <div>
                                    <p className="fs-5 fs-texto ff-normal">La plataforma de creación de e-learning n.°1:</p>
                                    <ul>
                                        <li className="fs-5 fs-texto ff-normal">Creación intuitiva que es inherentemente responsiva</li>
                                        <li className="fs-5 fs-texto ff-normal">Creación potente de contenido altamente interactivo</li>
                                        <li className="fs-5 fs-texto ff-normal">Aumente la participación con bloques y diseños de diapositivas prediseñadas</li>
                                        <li className="fs-5 fs-texto ff-normal">Ahorre tiempo con más de 13 millones de plantillas, imágenes y recursos</li>
                                        <li className="fs-5 fs-texto ff-normal">Invitar a los miembros del equipo a colaborar, editar o revisar cursos</li>
                                        <li className="fs-5 fs-texto ff-normal">Manténgase organizado con carpetas de revisión de contenido compartible</li>
                                        <li className="fs-5 fs-texto ff-normal">Publicar en cualquier LMS compatible con SCORM</li>
                                        <li className="fs-5 fs-texto ff-normal">Distribuya para Reach 360 con pocos clics</li>
                                        <li className="fs-5 fs-texto ff-normal">Capacitación en Articulate 360 y apoyo para desarrollar tus habilidades con Articulate Training</li>						
                                    </ul>
                                    <div className="container text-center mt-auto">
                                        <Link to={ROUTES.STORE_ARTICULATE360T} className="mt-3 fs-5 btn-blue fs-texto ff-normal" target="_blank" rel="noopener" >Comprar</Link>
                                    </div>
                                </div>
                            </div>				
                            <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column mt-5 mt-md-0">
                                <div className="position-relative">
                                    <div className="sky">
                                        <div className="star" style={{top: "10px", left: "3px", animationDuration: "1.55555s"}}></div>
                                        <div className="star" style={{top: "0px", left: "35px", animationDuration: "1.22222s"}}></div>    
                                        <div className="star" style={{top: "30px", left: "45px", animationDuration: "1.11111s"}}></div>                               
                                    </div>
                                </div>
                                <h2 className="fs-subtitle ff-bold">Con Articulate AI</h2>				
                                <div className="gradient-border">											
                                    <div className="gradient-border-back">						
                                        <p className="fs-5 fs-texto ff-normal">Crea hasta 9 veces más rápido con AI Assistant</p>
                                        <ul>
                                            <li className="fs-5 fs-texto ff-normal">Crear bloques a partir de indicaciones o material de origen</li>
                                            <li className="fs-5 fs-texto ff-normal">Cree contenido atractivo más rápido al solicitarle a la IA que haga una lluvia de ideas, un esquema y un borrador</li>
                                            <li className="fs-5 fs-texto ff-normal">Convertir bloques de un tipo a otro</li>
                                            <li className="fs-5 fs-texto ff-normal">Mejora tu texto con un potente compañero de escritura</li>
                                            <li className="fs-5 fs-texto ff-normal">Genere imágenes personalizadas en un instante</li>
                                            <li className="fs-5 fs-texto ff-normal">Reforzar el aprendizaje con resúmenes y evaluaciones personalizadas</li>
                                            <li className="fs-5 fs-texto ff-normal">Produzca mejores resultados con las mejores prácticas de capacitación integradas</li>
                                        </ul>						
                                    </div>					
                                </div>	
                                <div className="container text-center mt-auto">
                                    <Link to={ROUTES.STORE_ART_360_AI} className="mt-3 fs-5 btn-blue fs-texto ff-normal" target="_blank" rel="noopener" >Comprar</Link>
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
                    titleB2={(<>DESARROLLO DE<br /> CURSOS A LA MEDIDA</>)}               
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