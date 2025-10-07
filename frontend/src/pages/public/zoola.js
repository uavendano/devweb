import { useEffect } from 'react';
import '../../css/pages/zoola.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function Zoola() {
    const imgZoola = require.context('../../images/pages/zoola',true);

    useEffect(() => {          
        document.body.id = 'zoola-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXTENCIONES_APRENDIZAJE}
                optionBackTxt="Zoola"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold">Libera el poder de tu Data<br className="d-none d-xl-block" /> con Zoola Analytics</h1>
                        <img src={imgZoola(`./zoola.png`)} className="img-fluid img-w-65 mt-5" width="520" height="auto" alt="Zoola" />
                        <h2 className="fs-subtitle ff-bold">¡Recibe analíticas de aprendizaje de alto valor con Zoola!</h2>
                        <p className="fs-5 fs-texto ff-normal">Perfectamente integrado con Moodle y Totara. Proporciona a los usuarios acceso personalizado a los datos. Toma decisiones basadas en datos para mejorar la experiencia de aprendizaje.</p>                        
                    </div>
                </div>
                <div className="container-fuild p-1">
                    <img src={imgZoola(`./banner.png`)} className="img-fluid mt-5 d-none d-md-block" width="1500" height="auto" alt="banner zoola" />
                    <img src={imgZoola(`./banner-movil.png`)} className="img-fluid mt-5 d-block d-md-none" width="1500" height="auto" alt="banner movil zoola" />
                </div>
                <div className="container text-center mt-6 custom-color">
                    <h2 className="fs-subtitle ff-bold">MENOS CLIC, MENOS CONFUSIÓN, COMPRENSIÓN MÁS PROFUNDA</h2>
                    <p className="fs-5 fs-texto ff-normal">Permite que tus alumnos e instructores vean solo lo que es importante con paneles<br className="d-none d-xl-block" /> interactivos personalizados de marca.</p>
                    <div className="container text-center mt-6">
                        <Link to={ROUTES.CONTACTO} className="fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
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