import { useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/vyond.css';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import BloquePersonajes from '../../components/bloques/bloquePersonajes.js';
import LogoVyond from '../../images/pages/vyond/img-vyond.png';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Vyond() {
    useEffect(() => {          
        document.body.id = 'vyond-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.HERRAMIENTAS_AUTORIA}
                optionBackTxt="Vyond"
                opciones={3}
                txt={["Descripción","Soporte","Aprende Vyond"]}
                urls={['',ROUTES.SOPORTE,ROUTES.CC_VYOND]}
            />

            <div className="mt-5">
                <BloqueTitleIcoTxt
                    ancla=""
                    title={(<>Crea videos dinámicos y sin esfuerzo<br className="d-none d-xl-block" /> para cualquier público</>)}
                    img="vyond-logo.png"
                    alt="vyond"
                    txt={<>Los videos atraen y motivan como ningún otro medio.<br className="d-none d-md-block" /> Con Vyond Go pasa del guión a la pantalla en segundos y edita o realiza cambios de manera muy sencilla.</>}
                />
                <div className="container text-center">
                    <video className="mt-5" width="80%" controls autoPlay>
                        <source src="https://taecweb.s3.amazonaws.com/taec.com.mx/Vyond/Vyond+Explainer.mp4" type="video/mp4" />            
                        Your browser does not support the video tag.
                    </video>
                </div>

                <BloquePersonajes
                    subtitle="PRODUCTOS"
                    personajes={[
                        {
                            icono: "Contemporaneos.png",
                            alt: "Personajes Contemporáneos",
                            descripcion: "Crea videos de manera instantánea impulsada por la IA, después realiza cambios de manera fácil eligiendo de una galería amplia de templates para obtener un video como nunca antes.",
                            nombre: "Vyond Go"
                        },
                        {
                            icono: "Bussines.png",
                            alt: "Personajes Business Friendly",
                            descripcion: "El editor de video completo con función de arrastrar y soltar para realizar cambios, crea, traduce, edita, personaliza y diseña de manera colaborativa en tus videos para después publicar tu video como lo necesitas.",
                            nombre: "Vyond studio"
                        },
                        {
                            icono: "Pizarra.png",
                            alt: "Personajes de Pizarra Blanca",
                            descripcion: "Genera videos sin esfuerzo y con IA desde tu dispositivo móvil Android o IOS, captura, crea, edita y comparte tu video de manera sencilla y sin espera.",
                            nombre: "Vyond Mobile"
                        }
                    ]}
                />
{/* pendiente la tabla */}
                <div className="container-fluid mt-6">
                    <div className="container">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="w-80 border-0"></td>
                                    <td className="text-center border-0">
                                        <img src={LogoVyond} className="img-w-70p" width="100" height="40" alt="Vyond Premium" />					
                                        <p className="m-0 fs-6 ff-bold custom-color-orange">Premium</p>
                                    </td>
                                    <td className="text-center border-0">
                                        <img src={LogoVyond} className="img-w-70p" width="100" height="40" alt="Vyond Premium" />					
                                        <p className="m-0 fs-6 ff-bold custom-color-orange">Professional</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border border-start-0 border-top-0 border-end-0 fs-6 w-80 text-center fs-texto ff-bold custom-color-orange">CALIDAD DE VIDEO</th>
                                    <th className="border-0"></th>
                                    <th className="border-0"></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">720 - Exportable a videos calidad MP4 de 720p.</td>
                                    <th className="text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">1080p - Exportable a videos calidad MP4 de 1080p.</td>
                                    <th className="text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">GIF animados - Permite exportar a formato GIF de 8 segundos.</td>
                                    <th className="text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <th className="border border-start-0 border-top-0 border-end-0 fs-6 w-80 text-center fs-texto ff-bold custom-color-orange">ADMINISTRACIÓN DE MARCA</th>
                                    <th className="border-0"></th>
                                    <th className="border-0"></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">Permite importar fuentes - Importa las fuentes corporativas de tu empresa.</td>
                                    <th className="text-center"></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">Ajuste de color - Permite personalizar los colores para ajustarse a los de tu empresa.</td>
                                    <th className="text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">Cambiar elementos de todo un video Fácilmente - Permite cambiar un escenario, un personaje y los colores en todo un video fácilmente en lugar de hacerlo escena por escena.</td>
                                    <th className="text-center"></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <th className="border border-start-0 border-top-0 border-end-0 fs-6 w-80 text-center fs-texto ff-bold custom-color-orange">SEGURIDAD</th>
                                    <th className="border-0"></th>
                                    <th className="border-0"></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">ISO27001 -Cumple con los estándares físicos, legales y técnicos de seguridad informática.</td>
                                    <th className="text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">GDPR/CCPA - Cumple con las regulaciones de la Unión Europea y el estado de California en protección de datos privados.</td>
                                    <th className="text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <th className="border border-start-0 border-top-0 border-end-0 fs-6 w-80 text-center fs-texto ff-bold custom-color-orange">COLABORACIÓN</th>
                                    <th className="border-0"></th>
                                    <th className="border-0"></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">Trabajo en equipo en la elaboración de un video - Varios miembros pueden trabajar conjuntamente en el desarrollo y creación de un video.</td>
                                    <th className="text-center"></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">Librerías compartidas - Comparte audio, video, o elementos con todos los miembros de tu equipo o con algunos miembros en particular.</td>
                                    <th className="text-center"></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <td className="border border-start-0 border-end-0 align-middle fs-6 ff-normal fs-texto custom-color">Panel de Administrador- Permite administrar las cuentas dentro de tu equipo.</td>
                                    <th className="text-center"></th>
                                    <th className="borer border-end-0 text-center align-middle"><i className="bi bi-check-lg fs-2 ff-bold custom-color-orange"></i></th>
                                </tr>
                                <tr>
                                    <th className="border-0"></th>
                                    <th className="border-0">
                                        <Link to={ROUTES.STORE_VYONDPRE} className="mx-1 fs-6 btn-blue fs-texto ff-normal" >Comprar</Link>
                                    </th>
                                    <th className="border-0">
                                        <Link to={ROUTES.STORE_VYONDPRO} className="mx-1 fs-6 btn-blue fs-texto ff-normal" >Comprar</Link>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="container text-center mt-6">
                    <video className="mt-5" width="80%" controls>
                        <source src="https://taecweb.s3.amazonaws.com/taec.com.mx/Vyond/El+Valor+de+Vyond.mp4" type="video/mp4" />            
                        Your browser does not support the video tag.
                    </video>
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
                    titleB2={(<>DESARROLLO DE CURSOS <br /> A LA MEDIDA</>)}                
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