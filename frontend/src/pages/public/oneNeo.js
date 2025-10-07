import { useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/oneNeo.css';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function OneNeo() {
    const imgOneNeo = require.context('../../images/pages/oneneo',true);

    useEffect(() => {          
        document.body.id = 'one-neo-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.PLATAFORMAS_ELEARNING}
                optionBackTxt="One"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTxt
                ancla=""
                title="Imagina, crea y comparte"
                img="one.png"
                alt="One"
                txt={<>Un ambiente virtual enfocado a que el alumno sea el actor principal de su proceso<br className="d-none d-xl-block" /> de aprendizaje a través de la construcción de conocimiento y la interacción con sus compañeros.</>}
            />
            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <div>
                            <img src={imgOneNeo(`./preescolar.png`)} className="img-fluid img-w-65 mt-5" width="645" height="auto" alt="Preescolar" />
                        </div>
                        <h1 className="mt-6 fs-title ff-bold">Desde preescolar hasta el último año de secundaria:<br className="d-none d-xl-block" /> transiciones sin problemas</h1>
                        <p className="mt-5 fs-5 fs-texto ff-normal">Dos ambientes que se adaptan al nivel de los alumnos en un mismo ecosistema de aprendizaje. ONE está enfocado en los niveles de preescolar y primaria por mostrar una interfaz más sencilla y colorida. NEO cuenta con herramientas más sofisticadas y un ambiente más formal e ideal para secundaria.</p>
                        <div>
                            <img src={imgOneNeo(`./pocket.png`)} className="img-fluid img-w-50 mt-5" width="390" height="auto" alt="Pocket" />
                        </div>
                        <h1 className="mt-6 fs-title ff-bold">Beneficios</h1>
                        <div>
                            <ul className="list-unstyled mt-5 fs-5 fs-texto ff-normal">
                                <li>1. Obtén una red social dinámica y privada para la escuela o conjunto de colegios.</li>
                                <li>2. Accede a todos los servicios digitales en un mismo sitio.</li>
                                <li>3. Implica fácilmente a los padres en las actividades de la clase y del colegio.</li>
                                <li>4. Acelera el inicio de los proyectos en toda la escuela.</li>
                                <li>5. Mantén interacción constante con la plataforma a través de la app NEO pocket.</li>
                            </ul>
                        </div>
                        <h1 className="mt-6 fs-title ff-bold">Herramientas por categorías</h1>
                        <div className="container mt-5">    
                            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden rounded-5 text-white text-start" id="block-orange">
                                        <h2 className="pt-3 px-3 fs-6 fs-9">Para comunicar con el grupo, el colegio y la familia.</h2>				
                                        <ul className="list-unstyled p-3">
                                            <li><b>a) Suministro de noticias.</b> Sección para ver las notificaciones de contenido nuevo y novedades en la plataforma.</li>
                                            <li><b>b) Agenda.</b> Se encuentran los eventos programados.</li>
                                            <li><b>c) Correo electrónico.</b> Herramienta para enviar y recibir mensajes de alumnos, o padres según las reglas de comunicación configurada para garantizar un ambiente seguro.</li>
                                            <li><b>d) Noticias.</b> Herramienta para publicar mensajes para el apartado d Suministro de noticias.</li>
                                            <li><b>e) Blog.</b> Crea blogs de manera fácil, en un ambiente controlado y seguro.</li>
                                            <li><b>f) Reserva de cursos y salas.</b> Gestiona el préstamo de las aulas y materiales que hay en la escuela.</li>
                                        </ul>				
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden rounded-5 text-white text-start" id="block-black">
                                        <h2 className="pt-3 px-3 fs-6 fs-9">Para crear y consultar actividades.</h2>
                                        <ul className="list-unstyled p-3">
                                            <li><b>a) Foro.</b> Espacio de discusión en línea.</li>
                                            <li><b>b) Espacio documental.</b> Es el repositorio de información de todas las aplicaciones.</li>
                                            <li><b>c) Cuaderno multimedia.</b> Módulo para crear cuadernos digitales con texto, imágenes, videos y ligas.</li>
                                            <li><b>d) Páginas.</b> Utilidad para crear y publicar contenido con un diseño de páginas web.</li>					
                                        </ul>	
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card card-cover h-100 overflow-hidden rounded-5 text-white text-start" id="block-blue">
                                        <h2 className="pt-3 px-3 fs-6 fs-9">Para clases más interactivas.</h2>
                                        <ul className="list-unstyled p-3">
                                            <li><b>a) Barra cronológica.</b> Por medio de imágenes, texto o video, se puede crear una línea del tiempo.</li>
                                            <li><b>b) Pad colaborativo.</b> Los integrantes de un equipo pueden trabajar el mismo documento en línea de forma sincrónica.</li>
                                            <li><b>c) Mapa mental.</b> Realizar diagramas que representan conceptos relacionados a un tema o idea principal.</li>
                                            <li><b>d) Wiki.</b> Crear de manera colaborativa contenido informativo para publicarlo, realizar correcciones y nuevas versiones del mismo es posible en esta aplicación.</li>					
                                        </ul>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <Link to={ROUTES.CONTACTO} className="fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
                </div>

                <HrTitle t1="Otros Servicios" />

                <BloqueCentralTipoB
                    subtitleB1={"CONOCE NUESTROS"}
                    titleB1={(<>COMPLEMENTOS<br /> DE APRENDIZAJE</>)}
                    img1B1={"integraciones.png"}
                    altimg1B1={"Integraciones"}
                    linkB1={ROUTES.EXTENCIONES_APRENDIZAJE}
                    titleB2={(<>SERVICIOS DE<br /> TI</>)}
                    img2B2={"ti.png"}
                    altimg2B2={"Integraciones TI"}
                    linkB2={ROUTES.SERVICIOS_TI}
                    titleB3={(<>DESARROLLO DE<br /> CURSOS A LA MEDIDA</>)}
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4={(<>CURSOS DE<br /> CAPACITACIÓN</>)}
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />
            </div>
        </>
    );
}