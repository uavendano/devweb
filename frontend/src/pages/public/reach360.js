import { useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/reach360.css';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Reach360() {
    const imgReach360 = require.context('../../images/pages/reach360',true);

    useEffect(() => {          
        document.body.id = 'reach360-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.PLATAFORMAS_ELEARNING}
                optionBackTxt="Reach 360"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTxt
                ancla=""
                title="REACH 360"
                img="reach_360.png"
                alt="reach_360"
                txt={<>Brinde capacitacion rápidamente con Reach 360™<br className="d-none d-xl-block" /> la forma sencilla de llegar a más estudiantes.</>}
            />
            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <div>
                            <img src={imgReach360(`./laptop.png`)} className="img-fluid img-w-50 mt-5" width="840" height="auto" alt="Laptop" />
                        </div>
                        <p className="mt-5 fs-5 fs-texto ff-normal">
                            Reach 360™ es una herramienta de distribuición ligera que se integra con <br className="d-none d-xl-block" />
                            Articulate 360 para complementar su sistema de gestión de aprendizaje <br className="d-none d-xl-block" />
                            (LMS) y brindar capacitación a más estudiantes.
                        </p>
                        <div className="container text-center">
                            <Link to={ROUTES.CONTACTO} className="fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
                        </div>
                    </div>
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