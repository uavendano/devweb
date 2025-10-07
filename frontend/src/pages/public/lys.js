import { useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/lys.css';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Lys() {
    const imgLys = require.context('../../images/pages/lys',true);

    useEffect(() => {          
        document.body.id = 'lys-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.PLATAFORMAS_ELEARNING}
                optionBackTxt="Lys"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTxt
                ancla=""
                title="#1 en Microlearning por WhatsApp"
                img="lys-logo.png"
                alt="Lys"
                txt={<>Capacita a públicos internos o externos a gran escala que ya usan WhatsApp o MS Teams,<br className="d-none d-xl-block" /> mediante entregas programadas, autodirigidas y monitorea los resultados.</>}
            />
            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <div>
                            <img src={imgLys(`./smartphone.png`)} className="img-fluid img-w-50 mt-5" width="380" height="auto" alt="Two-smartphone" />
                        </div>
                        <p className="mt-5 fs-5 fs-texto ff-normal">
                            LYS combina una metodología de construcción de contenido eficiente y una<br className="d-none d-xl-block" /> herramienta de alto poder de participación y capacidad de medición.
                        </p>
                        <div className="container mt-5">
                            <div className="col-md-12" >
                                <div className="row justify-content-center">
                                    <div className="col-md-6 py-3 py-md-0">
                                        <Link to={ROUTES.DEMO_LYS} className="text-white text-decoration-none p-3 rounded-3 ff-normal fs-texto btn-large-blue" target="_blank" >Accede a una demo</Link>
                                    </div>
                                    <div className="col-md-6 py-3 py-md-0">
                                        <Link to={ROUTES.CONTACTO} className="text-white text-decoration-none p-3 rounded-3 ff-normal fs-texto btn-large-blue">Contáctanos</Link>                
                                    </div>
                                </div>
                            </div>
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