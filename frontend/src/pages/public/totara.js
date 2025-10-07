import { useEffect } from 'react';
import '../../css/pages/totara.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import Team from '../../images/pages/totara/team.png';
import BloqueIcoTxt from '../../components/bloques/bloqueIcoTxt.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Totara() {
    useEffect(() => {          
        document.body.id = 'totara-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    //botones Dropdown
    const btns_INFO_TOTLEA = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.TOTARA_LEARN,
            openInNewTab: false
        }
    ];
    const btns_INFO_TOTENG = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.TOTARA_ENGAGE,
            openInNewTab: false
        }
    ];
    const btns_INFO_TOTPER = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.TOTARA_PERFORM,
            openInNewTab: false
        }
    ];
    
    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.PLATAFORMAS_ELEARNING}
                optionBackTxt="Totara"
                opciones={4}
                txt={["Descripción","Integraciones","Soporte","Aprende Totara"]}
                urls={['',ROUTES.EXTENCIONES_APRENDIZAJE,ROUTES.SOPORTE,ROUTES.CC_TOTARA]}
            />
            <BloqueTitleIcoTxt
                ancla=""
                title="Crea experiencias de aprendizaje con la plataforma más innovadora y accesible del mundo"
                img="totara.png"
                alt="Totara"
                txt={<>La suite de experiencia de aprendizaje más completa: administra el<br className="d-none d-xl-block" /> aprendizaje, evalúa el desempeño y empodera a tus colaboradores.</>}
            />
            <div className="mt-6">
                <div class="container">
                    <div class="col-md-12">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center m-auto">
                                <h1 class="text-white ff-bold fs-title">Todo en uno</h1>
                                <img src={Team} className='py-5 img-fluid img-w-50' width="650" height="auto" alt="Team"></img>              
                            </div>				
                        </div>
                    </div>		
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5 custom4">
                    <BloqueIcoTxt                     
                        ancla={""}
                        subtitle={"Aprendizaje transformacional"}
                        info={"La plataforma LMS ágil que se adapta a todas las necesidades. Prepara a tu gente para una nueva era de trabajo."}
                        buttons={btns_INFO_TOTLEA}
                        img={"totaralearng.png"}
                        altText={"totaralearng"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5 custom5">
                    <BloqueTxtIco 
                        ancla={""}
                        subtitle={"Involucra a tus colaboradores"}
                        info={'Involucra a tus colaboradores a través de su experiencia. Cura contenido y permite que tus líderes y expertos colaboren con el "know-how" del negocio en el momento preciso.'}
                        buttons={btns_INFO_TOTENG}
                        img={"totaraengage.png"}
                        altText={"totaraengage"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5 custom4">
                    <BloqueIcoTxt                     
                        ancla={""}
                        subtitle={"Refuerza la productividad"}
                        info={"Monitorea el desempeño de tus colaboradores y conoce sus necesidades. Toma acciones informadas para llevar a tu organización al siguiente nivel."}
                        buttons={btns_INFO_TOTPER}
                        img={"totaraperform.png"}
                        altText={"totaraperform"}
                    />
                </div>
                
                <HrTitle t1="Otros Servicios" />

                <BloqueCentralTipoB
                    subtitleB1={"CONOCE NUESTROS"}
                    titleB1={(<>COMPLEMENTOS <br />DE APRENDIZAJE</>)}
                    img1B1={"integraciones.png"}
                    altimg1B1={"Integraciones"}
                    linkB1={ROUTES.EXTENCIONES_APRENDIZAJE}
                    titleB2={(<>SERVICIOS DE <br />TI</>)}
                    img2B2={"ti.png"}
                    altimg2B2={"Integraciones TI"}
                    linkB2={ROUTES.SERVICIOS_TI}
                    titleB3={(<>DESARROLLO DE <br />CURSOS A LA MEDIDA</>)}
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4={(<>CURSOS DE <br />CAPACITACIÓN</>)}
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />
            </div>
        </>
    );
}