import { useEffect } from 'react';
import '../../css/pages/review360.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTitleTxt from "../../components/bloques/bloqueTitleIcoTitleTxt.js";
import ROUTES from '../../routes/routes.js';
import Laptop from '../../images/pages/review360/lap.png';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Review360() {
    useEffect(() => {          
        document.body.id = 'review360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="Review 360"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTitleTxt 
                textColor={"text-white"}
                title1={"Colabora fácilmente con tu equipo"}
                img={"review.png"}
                alt={"Review 360"}
                title2={<>REVIEW<br className="d-none d-xl-block" /> 360</>}
                info={<>Optimiza las revisiones de proyectos.<br /> Simplifica y acelera el desarrollo del aprendizaje electrónico<br className="d-none d-xl-block" /> con Review 360. Reúne y comparte comentarios sobre todo el<br className="d-none d-xl-block" /> contenido de Articulate 360 en una aplicación web sencilla,<br className="d-none d-xl-block" /> sin necesidad de descargarla.</>}
            />
            <div className="mt-5">
                <div className="col-md-12 m-auto text-center text-white">
                    <h1 className="fs-title ff-bold">Revisa los comentarios<br className="d-none d-xl-block" /> individualmente</h1>
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