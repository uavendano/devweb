import { useEffect } from 'react';
import '../../css/pages/peek360.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTitleTxt from "../../components/bloques/bloqueTitleIcoTitleTxt.js";
import ROUTES from '../../routes/routes.js';
import Laptop from '../../images/pages/peek360/laptop.png';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Peek360() {
    useEffect(() => {          
        document.body.id = 'peek360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="Peek 360"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTitleTxt 
                textColor={"custom-color"}
                title1={<>Graba screencast fácilmente desde<br className="d-none d-xl-block" /> tu Mac o PC</>}
                img={"peek.png"}
                alt={"Peek 360"}
                title2={<>PEEK<br className="d-none d-xl-block" /> 360</>}
                info={<>Graba y comparte a gran velocidad.<br className="d-none d-xl-block" /> Peek 360 está listo en todo momento, perfecto para evitar editar, a solo un clic de distancia.<br className="d-none d-xl-block" /> Utilízalo directamente desde la barra de menú de Mac o la bandeja del sistema de Windows.</>}
            />            
            <div className="mt-5 mt-10">
                <div class="col-md-12 m-auto text-center bg-div-peek">
                    <div className="pt-5 col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold custom-color">Graba fácilmente screencasts<br className="d-none d-xl-block" /> en tu Mac o PC</h1>
                    </div>
                    <div className="pb-5 text-center mt-3 mt-md-5">
                        <img src={Laptop} className="img-fluid img-w-75" width="1200" height="auto" alt="Laptop" />
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