import IconsMenu from '../../components/navbar/iconsMenu.js';
import ROUTES from '../../routes/routes.js';
import Motrain from '../../images/pages/extensionesaprendizaje/main-motrain.png';
import { Link } from 'react-router-dom';
import BloqueIcoTxt from '../../components/bloques/bloqueIcoTxt.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function ExtensionesAprendizaje() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.MOTRAIN,ROUTES.CLASS,ROUTES.BBB,ROUTES.AUTOCERT,ROUTES.ZOOLA];
    const name_prod = [null,null,"BigBlueButtom",null,null];

    const btns_CLASS = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.CLASS,
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        }       
    ];
    const btns_BBB = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.BBB,
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        }       
    ];
    const btns_AUTOCERT = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.AUTOCERT,
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        }       
    ];
    const btns_ZOOLA = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.ZOOLA,
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        }       
    ];

    return (
        <>
            <IconsMenu 
                id_ico={'EA'}                
                title={'Extenciones<br /> de aprendizaje'} 
                iconos={5}
                urls={enlaces} 
                name={name_prod}
            />
            <div className="mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h2 className="custom-color fs-title ff-normal">Incorpora las herramientas más útiles para tus proyectos e-learning</h2>                  
                        </div>		
                    </div>
                </div>
                <div className="container-fluid bg-black pt-5 mt-5">
                    <div className="container text-center">
                        <h1 className="text-white fs-5 fs-subtitle ff-bold">Ludificación en todos tus cursos</h1>
                        <img src={Motrain} className="py-5 img-fluid img-w-65" width="780" height="215" alt="Motrain" />
                        <div className="py-4 d-block">
                            <Link className="text-decoration-none px-5 fs-5 fs-texto ff-normal custom-color-blue" to={ROUTES.MOTRAIN}>Más información</Link>
                            <Link className="fs-5 btn-blue fs-texto ff-normal" to={ROUTES.CONTACTO}>Contáctanos</Link>
                        </div>
                    </div>                    
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueTxtIco 
                        ancla={""}
                        subtitle={"Una nueva generación de salones de clases virtuales creada para Zoom."}
                        info={"Class es un plugin avanzado que añade herramientas de enseñanza y aprendizaje a Zoom. Tus clases en línea como nunca antes las viste: dinámicas, prácticas, interactivas y con gran impacto. Asistencia de los estudiantes, presentaciones, videos, sitios web, salas, estadísticas, libros de calificaciones, pantalla interactiva, y mucho… mucho más."}
                        buttons={btns_CLASS}
                        img={"ClassLogo.svg"}
                        altText={"Class Logo"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueIcoTxt 
                        ancla={""}
                        subtitle={"BigBlueButton,"}
                        info={(<>el aula virtual para docentes. <br /> Videollamadas especializadas en las necesidades de los profesores que imparten clases presenciales en línea. Para ofrecer una experiencia de vanguardia, se enfoca en reinventarse frente a la actualización diaria de la educación a distancia.</>)}
                        buttons={btns_BBB}
                        img={"bbb.png"}
                        altText={"BigBlueButton Logo"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueTxtIco 
                        ancla={""}
                        subtitle={"La visión global que tu institución necesita."}
                        info={"Autocert es una solución integral que concentra la información de tu LMS y te permite ejecutar procesos complejos de forma práctica y ágil. Con Autocert, además de contar con un dashboard con información relevante de tu plataforma, también puedes administrar eficazmente las constancias de tus colaboradores y generar de forma automática plantillas DC-3."}
                        buttons={btns_AUTOCERT}
                        img={"autocert.png"}
                        altText={"Autocert Logo"}
                    />
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5">
                    <BloqueIcoTxt 
                        ancla={""}
                        subtitle={"Provee reportes y analítica de datos y desempeño."}
                        info={(<>La herramienta de analítica favorita para usar con <br />Moodle y Totara. <br />No más conjeturas. <br />No más tiempo perdido con ensayo y error. <br />No más informes que consumen mucho tiempo.</>)}
                        buttons={btns_ZOOLA}
                        img={"zoola.png"}
                        altText={"Zoola Logo"}
                    />
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
                    titleB3={(<>DESARROLLO DE <br /> CURSOS A LA MEDIDA</>)}                
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4={(<>CURSOS DE <br /> CAPACITACIÓN</>)}                
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />

            </div>
        </>
    );
}