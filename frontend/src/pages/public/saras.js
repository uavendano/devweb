import { useEffect } from 'react';
import '../../css/pages/saras.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import BloqueIcoTxt from '../../components/bloques/bloqueIcoTxt.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Saras() {
    useEffect(() => {          
        document.body.id = 'saras-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXAMENES}
                optionBackTxt="Saras"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <BloqueTitleIcoTxt
                ancla=""
                title="Segura, integral, extensible y personalizable"
                img="saras.png"
                alt="Saras"
                txt={<>Solución segura y extensible para exámenes personalizados con analítica integrada que se<br className="d-none d-xl-block" /> adaptan a tus necesidades, debido a sus sistema de gestión, facilitando su integracion y<br className="d-none d-xl-block" /> otorgando soporte a múltiples tipos de evaluación.</>}
            />
            <div className="mt-6">
                <BloqueTxtIco 
                    ancla={""}
                    subtitle={"Solución segura para exámenes personalizados con analítica integrada"}
                    info={<><ul><li>Seguridad de extremo a extremo en la creación, entrega, supervisión y evaluación de pruebas con estándares QTI. </li><li>Informes analíticos por su sistema de metadatos granulares.</li></ul></>}
                    buttons={""}
                    img={"grafica.png"}
                    altText={"Analítica integrada"}
                />
                <div className="mt-6" id="custom4">
                    <BloqueIcoTxt                     
                        ancla={""}
                        subtitle={"Adaptándolas a tus necesidades"}
                        info={<><ul><li>Arquitectura modular</li><li>Interoperabilidad de herramientas de aprendizaje</li><li>Flexibilidad y escalabilidad</li><li>Cumplimiento de estándares</li><li>Compatibilidad entre dispositivos móviles</li><li>Modelos de implementación</li></ul></>}
                        buttons={""}
                        img={"necesidades.png"}
                        altText={"Necesidades"}
                    />
                </div>
                <div className="container mt-6 m-auto text-center custom-color">
                    <div className="col-md-12">		
                        <h2 className="fs-subtitle ff-bold">Sistema de gestión de evaluaciones</h2>
                            <p className="m-0 fs-5 ff-normal fs-texto">Análisis adaptable y personalizable de la teoría de respuestas a elementos (IRT).</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Más de 40 tipos de preguntas.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Bancos de preguntas.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Evaluaciones basadas en audio y video, geometría, matemáticas y ecuaciones científicas.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Pruebas adaptativas.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Optimización para escenarios de internet inestables y poco ancho de banda.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Gestión de centros de pruebas.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Facilidad de integración por su arquitectura basada en microservicios.</p>
                            <p className="m-0 fs-5 ff-normal fs-texto">Múltiples tipos de evaluación.</p>
                    </div>		
                </div>
                
                <HrTitle t1="Otros Servicios" />

                <BloqueCentralTipoB
                    subtitleB1={""}
                    titleB1={(<>SERVICIOS DE<br /> TI</>)}
                    img1B1={"ti.png"}
                    altimg1B1={"Servicios de TI"}
                    linkB1={ROUTES.SERVICIOS_TI}
                    titleB2={(<>DESARROLLO DE CURSOS<br /> A LA MEDIDA</>)}
                    img2B2={"d-cursos.png"}
                    altimg2B2={"Desarrollo de cursos"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>ARTICULATE<br /> 360</>)}
                    linkB3={ROUTES.ARTICULATE_360}
                    titleB4="VYOND"
                    linkB4={ROUTES.VYOND}
                />
            </div>
        </>
    );
}