import { useEffect } from 'react';
import '../../css/pages/class.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function ClassElearning() {
    const imgClass = require.context('../../images/pages/class',true);

    useEffect(() => {          
        document.body.id = 'class-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXTENCIONES_APRENDIZAJE}
                optionBackTxt="Class"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <div className="mt-5">
                <div className="container">
                    <div className="col-md-12 m-auto text-center">
                        <img src={imgClass(`./ClassLogo.svg`)} className="img-fluid mt-5" width="580" height="auto" alt="Class logo" />
                        <h2 className="mt-6 fs-subtitle ff-bold color-subtitle-class">El salón de clases virtual que atiende las necesidades de los aprendices y el mundo digital.</h2>
                        <p className="fs-5 fs-texto ff-normal custom-color">Class es el plugin que ha llevado a un siguiente nivel las clases en línea. Esta solución se integra a la plataforma de Zoom para crear el ambiente educativo y digital más robusto hasta el momento.</p>
                        <img src={imgClass(`./class.png`)} className="img-fluid mt-5" width="650" height="auto" alt="Class" />
                    </div>
                </div>
                <div className="container mt-6">
                    <div className="row">
                        <div className="col-md-10 order-2 order-md-2">
                            <h2 className="fs-subtitle ff-bold color-subtitle-class">Herramientas eLearning</h2>
                            <p className="mb-0 text-start fs-5 fs-texto ff-normal custom-color">Todo lo que necesitarás proyectar y utilizar en tu clase está en un solo lugar: tu panel de instructor. Aquí encontrarás sitios web, archivos, videos, quizzes, encuestas y más.</p>
                        </div>
                        <div className="col-md-2 order-1 order-md-1 d-flex justify-content-center align-items-center p-0">
                            <div className="w-100 rounded-3 m-2 m-md-0 p-2 background-div-class">
                                <div className="text-center">
                                    <i className="bi bi-list-check fs-3 text-white"></i>
                                    <p className="text-white ff-normal">eLearning Tools</p>				
                                </div>
                            </div>								
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-10 order-2 order-md-1">
                            <h2 className="fs-subtitle ff-bold color-subtitle-class">Más interacción, más compromiso, más aprendizaje</h2>
                            <p className="mb-0 text-start fs-5 fs-texto ff-normal custom-color">Salas, pizarrones y hasta pantallas compartidas con las que los aprendices pueden interactuar directamente en tu clase en línea.</p>
                        </div>
                        <div className="col-md-2 order-1 order-md-2 d-flex justify-content-center align-items-center p-0">
                            <div className="w-100 rounded-3 m-2 m-md-0 p-2 background-div-class">
                                <div className="text-center">
                                    <i className="bi bi-list-check fs-3 text-white"></i>
                                    <p className="text-white ff-normal">eLearning Tools</p>				
                                </div>
                            </div>								
                        </div>
                    </div>
                    <div className="container text-center mt-5">
                        <img src={imgClass(`./dashboard.png`)} className="img-fluid mt-5" width="650" height="auto" alt="Class" />
                        <h2 className="mt-6 fs-subtitle ff-bold color-subtitle-class">Estadísticas para la mejora continua</h2>
                        <p className="mb-0 fs-5 fs-texto ff-normal custom-color">Cada clase genera información detallada de la asistencia, participación del instructor y<br className="d-none d-xl-block" /> de los alumnos, histórico de tiempo, entre otros números relevantes.</p>
                        <h2 className="mt-6 fs-subtitle ff-bold color-subtitle-class">Class… las clases en línea ahora con más nivel y profesionalismo.</h2>
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
                    titleB2={"SERVICIOS DE TI"}                
                    img4B2={"ti.png"}
                    altimg4B2={"Servicios de TI"}
                    linkB2={ROUTES.SERVICIOS_TI}
                    titleB3={(<>DESARROLLO DE<br /> CURSOS A LA MEDIDA</>)}                
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4={(<>CURSOS DE<br /> CAPACITACIÓN</>)}                
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />
            </div>
        </>
    );
}