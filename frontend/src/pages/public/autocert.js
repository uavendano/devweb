import { useEffect } from 'react';
import '../../css/pages/autocert.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';
import logoAutocert from '../../images/pages/autocert/autocert.png';

export default function Autocert() {

    useEffect(() => {          
        document.body.id = 'autocert-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXTENCIONES_APRENDIZAJE}
                optionBackTxt="Autocert"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <div className="mt-5">
                <div className="container">
                    <div className="col-md-12 m-auto text-center custom-color">
                        <img src={logoAutocert} className="img-fluid mt-5" width="390" height="auto" alt="Autocert logo" />
                        <h2 className="mt-5 fs-subtitle ff-bold">Nuestro plug-in concentra toda la información<br className="d-none d-xl-block" /> de tu plataforma en un solo sitio.</h2>
                        <p className="mb-0 fs-5 fs-texto ff-normal">Cuando se cuenta con una plataforma LMS, automáticamente, se tendrá la necesidad de gestionar la información de manera eficaz, así como de generar, administrar y validar las constancias que obtengan los aprendices.</p>
                        <p className="mb-0 fs-5 fs-texto ff-normal">Autocert es una herramienta capaz de concentrar la información de la plataforma en cada etapa del proceso de certificación, desde que el aprendiz realiza su curso, hasta la entrega de su constancia y la generación del reporte en plantilla SIRCE.</p>                        
                    </div>
                </div>
                <div className="container mt-6 custom-color">
                    <h2 className="fs-subtitle ff-bold">¿Por qué elegir Autocert?</h2>
                    <ul class="mt-3 fs-5 fs-texto ff-normal">
						<li>Obtienes acceso a toda la información en un mismo sitio.</li>
						<li>Genera un histórico del colaborador y valida su información actual.</li>
						<li>Personaliza formatos DC-3.</li>
						<li>Genera un Dashboard con la información más relevante.</li>
					</ul>
                </div>
                <div className="container mt-5 custom-color">
                    <h2 className="fs-subtitle ff-bold">¿Qué puedes hacer con Autocert?</h2>
                    <ul class="mt-3 fs-5 fs-texto ff-normal">
						<li>Puedes generar e imprimir múltiples constancias con un solo clic.</li>
						<li>Te permite obtener una captura del ecosistema del aprendiz cuando este finalice su curso: cargo, ubicación, datos personales, entre otros.</li>
						<li>Puedes consultar el histórico de toda la información generada.</li>
						<li>Puedes integrar más de una razón social a la plataforma para su medición y análisis.</li>
						<li>Puedes consultar información rápidamente gracias a los diversos parámetros de búsqueda que contiene.</li>
					</ul>
                </div>
                <div className="container mt-6">
                    <div className="col-md-12 m-auto text-center custom-color">
                        <h2 className="fs-subtitle ff-bold">Todo lo que necesitas a un clic de distancia</h2>
                        <p className="mb-0 fs-5 fs-texto ff-normal">Con Autocert necesitas pocos clics para consultar la información que necesitas. Desde información detallada de la asistencia, hasta la generación de múltiples constancias de manera simultánea.</p>                     
                        <h2 className="mt-6 fs-subtitle ff-bold">Obtén estadísticas, comparativos y datos relevantes<br className="d-none d-xl-block" /> en un dashboard intuitivo y amigable.</h2>
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