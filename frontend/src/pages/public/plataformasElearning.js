import IconsMenu from '../../components/navbar/iconsMenu.js';
import ROUTES from '../../routes/routes.js';
import Totara from '../../images/pages/plataformaselearning/totara_plataforma_elearning_taec.png';
import { Link } from 'react-router-dom';
import BloqueIcoTxt from '../../components/bloques/bloqueIcoTxt.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function PlataformasElearning() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.TOTARA,ROUTES.OTTOLEARN,ROUTES.REACH_360,ROUTES.ONE_NEO,ROUTES.MOODLE,ROUTES.LYS];
    const name_prod = [null,null,null,null,null,null];

    //botones Dropdown
    const btns_INFO_MOODLE = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.MOODLE,
            openInNewTab: false
        }
    ];
    const btns_INFO_OTTO = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.OTTOLEARN,
            openInNewTab: false
        }
    ];
    const btns_INFO_REACH = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.REACH_360,
            openInNewTab: false
        }
    ];
    const btns_INFO_LYS = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.LYS,
            openInNewTab: false
        }
    ];
    const btns_INFO_ONE = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.ONE_NEO,
            openInNewTab: false
        }
    ];

    return (
        <>
            <IconsMenu 
                id_ico={'PE'}                
                title={'Plataforma<br /> E-learning'} 
                iconos={6}
                urls={enlaces} 
                name={name_prod}
            />
            <div className="mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h2 className="custom-color fs-title ff-normal">El LMS que necesitas, la mejor experiencia para tus usuarios</h2>                  
                        </div>		
                    </div>
                </div>
                <div className="container-fluid bg-black pt-5 mt-5">
                    <div className="container text-center">                            
                        <img src={Totara} className="img-fluid img-w-65" width="390" height="310" alt="totara_plataforma_elearning_taec" />
                        <h1 className="text-white fs-5 fs-texto ff-normal">Totara Learn</h1>
                        <p className="text-white fs-5 fs-texto ff-normal">La plataforma e-learning más completa<br className="d-none d-xl-block" /> y personalizable para el sector corporativo.</p>
                        <p className="py-5"> <Link to={ROUTES.TOTARA} className="text-decoration-none fs-5 fs-texto ff-normal custom-color-blue"> Más información </Link> </p>									     				                                                    		
                    </div>
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5" id="custom3">
                    <BloqueIcoTxt                     
                        ancla={""}
                        subtitle={"Moodle, la plataforma más reconocida del mundo"}
                        info={"Una forma sencilla y práctica de comenzar un proyecto de aula virtual para escuelas o corporativos."}
                        buttons={btns_INFO_MOODLE}
                        img={"moodle_lms_elearning.png"}
                        altText={"moodle_lms_elearning"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueTxtIco 
                        ancla={""}
                        subtitle={"Ottolearn, micro-aprendizaje adaptativo"}
                        info={"Plataforma de aprendizaje virtual basada en microlearning y machine learning. Para un fácil dominio, retención y distribución rápida de contenidos."}
                        buttons={btns_INFO_OTTO}
                        img={"ottolearn__microlearning_machine_learning.png"}
                        altText={"ottolearn__microlearning_machine_learning"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueIcoTxt                     
                        ancla={""}
                        subtitle={"Brinde capacitación rápidamente con Reach 360™: la forma sencilla de llegar a más participantes."}
                        info={"Reach 360™ es una herramienta de distribución ligera que se integra con Articulate 360 para complementar su sistema de gestión de aprendizaje (LMS) y brindar capacitación a más participantes."}
                        buttons={btns_INFO_REACH}
                        img={"reach_360.png"}
                        altText={"reach_360"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueTxtIco 
                        ancla={""}
                        subtitle={"LYS"}
                        info={"Capacita a tu equipo con la herramienta de microaprendizaje vía Whatsapp o MS Teams líder en América Latina, mediante contenidos de alta calidad a la medida y monitoreados para obtener analítica en tiempo real."}
                        buttons={btns_INFO_LYS}
                        img={"lys.png"}
                        altText={"lys"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueIcoTxt                     
                        ancla={""}
                        subtitle={"One/Neo, para los primeros pasos"}
                        info={"One y Neo ofrecen experiencias de aprendizaje virtual a través de las últimas tendencias de educación. Todo para niveles de primaria y secundaria."}
                        buttons={btns_INFO_ONE}
                        img={"one_educacion_online_primaria_secundaria.png"}
                        altText={"one_educacion_online_primaria_secundaria"}
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