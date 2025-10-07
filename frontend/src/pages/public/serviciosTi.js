import { useEffect } from 'react';
import '../../css/pages/serviciosTi.css';
import IconsMenu from '../../components/navbar/iconsMenu.js';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function ServiciosTi() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [`${ROUTES.SERVICIOS_TI}#SaaS`,`${ROUTES.SERVICIOS_TI}#Integraciones`,`${ROUTES.SERVICIOS_TI}#Desarrollo-web`,`${ROUTES.SERVICIOS_TI}#Desarrollo-app`];
    const name_prod = [<>Software as <br />a Service</>,<>Desarrollo de <br />integracciones</>,<>Desarrollo <br />web</>,<>Desarrollo <br />de aplicaciones</>];

    useEffect(() => {          
        document.body.id = 'IT-services-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    return (
        <>
            <IconsMenu 
                id_ico={'STI'}                
                title={'Servicios <br />de T.I.'} 
                iconos={4}
                urls={enlaces}
                name={name_prod}
            />
            <div className="mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h1 className="text-white fs-title ff-normal">Alinea los objetivos de TI con los de tu organización y crece</h1>
                        </div>		
                    </div>
                </div>
                <BloqueTitleIcoTxt
                    ancla=""
                    title={<>Servicios de<br className="d-none d-xl-block" /> T.I.</>}
                    img="logo-ti.png"
                    alt="Servicios de T.I."
                    txt={<>Permite que gestionemos toda la información de tu sistema para que puedas sacarle el máximo provecho a tu solución e-learning.<br className="d-none d-xl-block" /> Te ayudamos con configuración, cambios, liberaciones incidentes, disponibilidad del servidor, capacidad, nivel de servicio y proyectos.</>}
                />
                <BloqueTitleIcoTxt
                    ancla="SaaS"
                    title={<>SaaS<br className="d-none d-xl-block" /> Software as a Service</>}
                    img="saas.png"
                    alt="SaaS"
                    txt="Obtén una disponibilidad en los servidores del 99.9%, ten la capacidad de proveer a más de 100, 000 usuarios y obtén acceso desde cualquier parte del mundo por medio de una CDN mundial. Además el servicio incluye respaldos diarios de la información y una renovación gráfica anual."
                />
                <BloqueTitleIcoTxt
                    ancla="Integraciones"
                    title="Desarrollo de integraciones"
                    img="integraciones.png"
                    alt="Desarrollo de integraciones"
                    txt={<>Te ayudamos a integrar cualquier elemento de nuestro servicio en tu actual sistema de e-learning.<br className="d-none d-xl-block" /> Desata el poder que las integraciones para LMS pueden traer a tu sistema.</>}
                />
                <BloqueTitleIcoTxt
                    ancla="Desarrollo-web"
                    title="Desarrollo web"
                    img="desaweb.png"
                    alt="Desarrollo web"
                    txt={<>Desarrollamos el sitio web de tus sueños. Camina de la mano de expertos especializados<br className="d-none d-xl-block" /> en el desarrollo profesional de sitios web para la educación en línea. Haz que tu página web luzca perfecta.</>}
                />
                <BloqueTitleIcoTxt
                    ancla="Desarrollo-app"
                    title="Desarrollo de aplicaciones"
                    img="app.png"
                    alt="Desarrollo de aplicaciones"
                    txt="Crea aplicaciones o modifica las de tu empresa. Realizamos las creaciones e innovaciones tal y como quieres. Tenemos todos los recursos necesarios para asegurar el éxito de tu sistema e-learning. Utilizando los estándares más altos de la industria, aplicamos metodologías ágiles para planificar y contamos con el uso de React Native para el desarrollo."
                />
                <div className="container text-center mt-6">
                    <Link to={ROUTES.CONTACTO} className="my-5 fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
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
                    subtitle={"CONOCE NUESTROS"}
                    titleB2={(<>COMPLEMENTOS<br /> DE APRENDIZAJE</>)}                    
                    img4B2={"integraciones-white.png"}
                    altimg4B2={"integraciones"}
                    linkB2={ROUTES.EXTENCIONES_APRENDIZAJE}
                    titleB3={(<>DESARROLLO DE <br /> CURSOS A LA MEDIDA</>)}                
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4="ARTICULATE"           
                    linkB4={ROUTES.HERRAMIENTAS_AUTORIA}
                />
            </div>
        </>
    );
}