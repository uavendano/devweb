import { useEffect } from 'react';
import '../../css/pages/ottolearn.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Ottolearn() {
    const imgOttolearn = require.context('../../images/pages/ottolearn',true);

    useEffect(() => {          
        document.body.id = 'ottolearn-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.PLATAFORMAS_ELEARNING}
                optionBackTxt="Ottolearn"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold">Consigue una mejor retención del aprendizaje</h1>
                        <img src={imgOttolearn(`./ottolearn.png`)} className="img-fluid img-w-65 mt-5" alt="Ottolearn" />
                        <h3 className="fs-subtitle ff-bold">Descubre lo que OttoLearn puede hacer por ti</h3>
                        <p className="fs-5 fs-texto ff-normal">
                            Simplifica la creación y asignación de la capacitación a través de una plataforma sencilla. Crea un mapa de conocimiento <br className="d-none d-xl-block" />
                            para llevar a los colaboradores a conseguir las habilidades y conocimientos de su trabajo. Aprovecha los <br className="d-none d-xl-block" />
                            beneficios de la gamificación y el microlearning para alcanzar los resultados en tu empresa.
                        </p>
                        <div>
                            <img src={imgOttolearn(`./new_way.png`)} className="img-fluid img-w-65 mt-5" width="650" height="auto" alt="The new way" />
                        </div>
                        <div>
                            <img src={imgOttolearn(`./movil.png`)} className="img-fluid img-w-50 mt-5" width="325" height="auto" alt="Movil" />
                        </div>
                    </div>
                </div>
                <div className="container custom-color mt-6">
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold">¿Cómo puede ayudar OttoLearn?</h1>
                        <p className="fs-5 fs-texto ff-normal">
                            Desde simplificar la formación, hasta eliminar lagunas de conocimientos para garantizar la retención de conocimientos a largo plazo. Obtén más información acerca de los beneficios de OttoLearn y cómo puede brindarte la ventaja que tu empresa necesita en la capacitación en línea.
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