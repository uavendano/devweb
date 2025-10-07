import { useEffect } from 'react';
import '../../css/pages/motrain.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Motrain() {
    const imgMotrain = require.context('../../images/pages/motrain',true);

    useEffect(() => {          
        document.body.id = 'motrain-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXTENCIONES_APRENDIZAJE}
                optionBackTxt="Motrain"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <div className="mt-5">
                <div className="container">
                    <div className="col-md-12 m-auto text-center">
                        <img src={imgMotrain(`./logo-motrain.png`)} className="img-fluid mt-5" width="800" height="auto" alt="Motrain logo" />
                        <div className="py-4 d-block">
                            <Link className="text-decoration-none px-5 fs-5 fs-texto ff-normal custom-color-blue" to={ROUTES.CONTACTO}>Más información</Link>
                            <Link className="fs-5 btn-blue fs-texto ff-normal" to={ROUTES.CONTACTO}>Contáctanos</Link>
                        </div>
                    </div>
                </div>
                <div className="container mt-6 text-white">
                    <div className="col-md-12 m-auto text-center">
                        <h2 className="fs-subtitle ff-bold">Motiva a tus alumnos</h2>
                        <p className="fs-5 fs-texto ff-normal">Lo que se dispara es la tasa de finalización de cursos. Motrain te<br className="d-none d-xl-block" /> ayuda a construir una comunidad de estudiantes leales con una tienda<br className="d-none d-xl-block" /> de recompensas personalizadas.</p>
                        <img src={imgMotrain(`./screen-motrain.png`)} className="img-fluid mt-6" width="1000" height="auto" alt="screen-motrain" />
                        <h2 className="mt-6 fs-subtitle ff-bold">Retroalimentación oportuna</h2>
                        <p className="fs-5 fs-texto ff-normal">Celebra todos los éxitos, grandes y pequeños, otorgando moneda virtual por completar con éxito cursos y actividades.</p>
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