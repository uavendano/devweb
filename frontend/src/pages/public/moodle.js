import { useEffect } from 'react';
import '../../css/pages/moodle.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Moodle() {
    const imgMoodle = require.context('../../images/pages/moodle',true);

    useEffect(() => {          
        document.body.id = 'moodle-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.PLATAFORMAS_ELEARNING}
                optionBackTxt="Moodle"
                opciones={4}
                txt={["Descripción","Integraciones","Soporte","Aprende con Moodle"]}
                urls={['',ROUTES.EXTENCIONES_APRENDIZAJE,ROUTES.SOPORTE,ROUTES.CC_MOODLE]}
            />

            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold">La plataforma educativa con millones de <br className="d-none d-xl-block" />usuarios activos en el mundo</h1>
                        <img src={imgMoodle(`./moodle.png`)} className="img-fluid img-w-65 mt-5" alt="Moodle" />
                        <h3 className="fs-subtitle ff-bold">Libertad para educar</h3>
                        <p className="fs-5 fs-texto ff-normal">Una herramienta práctica y fácil de usar, perfecta para ambientes escolares y empresariales.<br className="d-none d-xl-block" /> Implementa fácilmente esos contenidos tan especiales y comienza tu proyecto de aprendizaje y capacitación.</p>
                        <h1 className="mt-6 fs-title ff-bold">LMS flexible y de código abierto</h1>
                        <p className="mt-5 fs-5 fs-texto ff-normal">Un sistema de gestión de aprendizaje en línea de clase mundial.</p>
                        <div className="container text-center">
                            <Link to={ROUTES.CONTACTO} className="mt-5 fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
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