import { useEffect } from 'react';
import '../../css/pages/bigbluebutton.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Bigbluebutton() {
    const imgBBB = require.context('../../images/pages/bigbluebutton',true);

    useEffect(() => {          
        document.body.id = 'bbb-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXTENCIONES_APRENDIZAJE}
                optionBackTxt="Bigbluebutton"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <div className="mt-5">
                <div className='container custom-color'>
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold">El aula virtual que los profesores y usuarios disfrutan</h1>
                        <img src={imgBBB(`./bbb.png`)} className="img-fluid img-w-65 mt-5" width="360" height="auto" alt="Bigbluebutton logo" />
                        <div className="container text-center">
                            <Link to={ROUTES.CONTACTO} className="my-5 fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
                        </div>
                        <h2 className="mt-5 fs-subtitle ff-bold">BigBlueButton</h2>
                        <p className="fs-5 fs-texto ff-normal custom-color">
                            ¿Buscas una solución profesional para enseñar a estudiantes remotos en línea? <br className="d-none d-xl-block" />
                            BigBlueButton permite compartir en tiempo real audio, video, diapositivas, chat y <br className="d-none d-xl-block" />
                            pantalla. Los estudiantes participan al compartir iconos de emojis, votaciones y <br className="d-none d-xl-block" />
                            entrando a salas de reuniones.
                        </p>
                        <img src={imgBBB(`./pantalla.png`)} className="img-fluid img-w-75 mt-6" width="1230" height="auto" alt="img pantalla" />
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
                    titleB2={"SERVICIOS DE TI"}                
                    img4B2={"ti.png"}
                    altimg4B2={"Servicios de TI"}
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