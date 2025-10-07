import { useEffect } from 'react';
import '../../css/pages/rise360.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTitleTxt from "../../components/bloques/bloqueTitleIcoTitleTxt.js";
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import Pantalla from '../../images/pages/rise360/pantalla.png';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Rise360() {
    useEffect(() => {          
        document.body.id = 'rise360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente
    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="Rise 360"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTitleTxt
                textColor={"text-white"}
                title1={"Autoría de cursos intuitiva, fácil y bien hecho"}
                img={"rise.png"}
                alt={"Rise 360"}
                title2={"RISE 360"}
                info={<>Crea un e-learning atractivo e intrínsecamente sensible con Rise 360.<br className="d-none d-xl-block" /> Con las últimas tecnologías web, Rise 360 visualiza de manera responsiva y<br className="d-none d-xl-block" /> automática los cursos para cada dispositivo:<br className="d-none d-xl-block" /> tú no haces nada y con la combinación del AI Assistant crea contenido hasta 9 veces más rápido.</>}
            />
            <div className="mt-6 text-white">
                <div className="col-md-12 m-auto text-center">
                    <h1 className="fs-title ff-bold">Construye una sola vez para todos<br className="d-none d-xl-block" /> los dispositivos</h1>
                </div>
                <div className="container text-center">
                    <Link to={ROUTES.AI_ASSISTANT} className="my-5 rounded-4 p-2 fs-5 btn-blue fs-texto ff-normal" >Saber mas de AI Assistant</Link>
                </div>
                <div className="container-fluid mt-6">						
                    <div className="row justify-content-end">
                        <div className="col-lg-4 col-md-6 m-auto">        
                            <h2 className="fs-subtitle ff-bold">Crea cursos en línea</h2>
                            <p className="fs-5 fs-texto ff-normal">
                                Crea e-learning receptivo directamente en tu 
                                navegador web con las funciones intuitivas de 
                                Rise 360. Sin software para descargar, sin curva 
                                de aprendizaje.
                            </p>					
                            <h2 className="fs-subtitle ff-bold">Estructura cursos fácilmente</h2>
                            <p className="fs-5 fs-texto ff-normal">
                                Comienza con un esquema del curso o constrúyelo 
                                sobre la marcha. Simplemente arrastra las lecciones 
                                para reorganizar su orden.
                            </p>
                        </div>
                        <div className="col-lg-6 col-md-6 text-end">
                            <img src={Pantalla} className="img-fluid" width="735" height="auto" alt="Laptop" />	
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