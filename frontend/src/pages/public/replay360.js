import { useEffect } from 'react';
import '../../css/pages/replay360.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTitleTxt from "../../components/bloques/bloqueTitleIcoTitleTxt.js";
import ROUTES from '../../routes/routes.js';
import Laptop from '../../images/pages/replay360/laptop.png';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Replay360() {
    useEffect(() => {          
        document.body.id = 'replay360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="Replay 360"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTitleTxt 
                textColor={"custom-color"}
                title1={"Graba screencast con tu cámara web"}
                img={"replay.png"}
                alt={"Replay 360"}
                title2={<>REPLAY<br className="d-none d-xl-block" /> 360</>}
                info={<>Con Articulate Replay 360 fortalece el aprendizaje de tus alumnos a través<br className="d-none d-xl-block" /> de contenido profesional y personalizado creado desde tu pantalla, ya sea<br className="d-none d-xl-block" /> capturando la actividad en pantalla y a ti mismo desde una webcam al mismo tiempo.</>}
            />
            <div className="mt-5 custom-color">
                <div className="col-md-12 m-auto text-center">
                    <h1 className="fs-title ff-bold">Captura cada momento</h1>
                </div>
                <div className="text-center mt-3 mt-md-5">
                    <img src={Laptop} className="img-fluid img-w-75" width="1200" height="auto" alt="Laptop" />
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