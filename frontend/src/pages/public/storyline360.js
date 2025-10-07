import { useEffect } from 'react';
import '../../css/pages/storyline360.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTitleTxt from "../../components/bloques/bloqueTitleIcoTitleTxt.js";
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import Movil from '../../images/pages/storyline360/movil.png';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Storyline360() {
    useEffect(() => {          
        document.body.id = 'storyline360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="Storyline 360"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTitleTxt
                textColor={"text-white"}
                title1={"Todos tus cursos en todos tus dispositivos."}
                img={"storyline.png"}
                alt={"Storyline 360"}
                title2={"STORYLINE 360"}
                info={<>Ofrece cursos interactivos en todos tus dispositivos, sin tener que<br className="d-none d-xl-block" /> modificar el código para implementarlo. Simplemente crea tu curso en<br className="d-none d-xl-block" /> Storyline 360 y con la combinación del AI Assistant crea contenido hasta 9 veces más<br className="d-none d-xl-block" /> rápido y luego haga clic en publicar . Eso es todo.</>}
            />
            <div className="mt-6 text-white">
                <div className="col-md-12 m-auto text-center">
                    <h1 className="fs-title ff-bold">Adaptativo en cualquier<br className="d-none d-xl-block" /> dispositivo móvil</h1>
                </div>
                <div className="container text-center">
                    <Link to={ROUTES.AI_ASSISTANT} className="my-5 rounded-4 p-2 fs-5 btn-blue fs-texto ff-normal" >Saber mas de AI Assistant</Link>
                </div>
                <div className="text-center mt-3 mt-md-5">
                    <img src={Movil} className="img-fluid img-w-75" width="1200" height="auto" alt="Movil" />
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