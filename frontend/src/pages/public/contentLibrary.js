import { useEffect } from 'react';
import '../../css/pages/contentLibrary.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTitleTxt from "../../components/bloques/bloqueTitleIcoTitleTxt.js";
import ROUTES from '../../routes/routes.js';
import Articulate360 from '../../images/pages/contentlibrary/360_Logo.png';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function ContentLibrary() {
    useEffect(() => {          
        document.body.id = 'contentLibrary-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente


    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.ARTICULATE_360}
                optionBackTxt="Content Library 360"
                opciones={3}
                txt={["Descripción","Personal & Teams","Soporte"]}
                urls={['',`${ROUTES.ARTICULATE_360}#personal-teams`,ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTitleTxt 
                textColor={"custom-color"}
                title1={<>Más de 7 millones de elementos para<br className="d-none d-xl-block" /> tus cursos</>}
                img={"content_library.png"}
                alt={"content library 360"}
                title2={<>CONTENT LIBRARY<br className="d-none d-xl-block" /> 360</>}
                info={<>Crea e-learning atractivo en poco tiempo.<br className="d-none d-xl-block" /> Content Library 360 te brinda acceso a una biblioteca en constante<br className="d-none d-xl-block" /> expansión de más de 7 millones de imágenes y plantillas de<br className="d-none d-xl-block" /> diapositivas personalizables diseñadas por profesionales.</>}
            />
            <div className="mt-5">
                <div class="col-md-12 m-auto text-center">
                    <div className="pt-5 col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold custom-color">Incluido con tu suscripción a<br className="d-none d-xl-block" /> Articulate 360</h1>
                    </div>
                    <div className="pb-5 text-center mt-3 mt-md-5">
                        <img src={Articulate360} className="img-fluid img-w-50" width="390" height="auto" alt="Articulate 360" />
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