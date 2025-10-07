import { useEffect } from 'react';
import '../../css/pages/taec.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import SliderPartners from '../../components/forPages/sliderPartners.js';
import SliderClientes from '../../components/forPages/sliderClientes.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';
import ROUTES from '../../routes/routes.js';

export default function Taec() {
    const imgTaec = require.context('../../images/pages/taec',true);

    useEffect(() => {          
        document.body.id = 'taec-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    return (
        <>
            {/* Componente menu */}    
            <OptionsMenu
                optionBack=""
                optionBackTxt=""
                opciones={5}
                txt={["¿Quiénes somos?","Visión","Partners","Subdistribuidores","Clientes"]}
                urls={[`${ROUTES.ABOUT}#Quiénes-somos`,`${ROUTES.ABOUT}#Nuestra-Visión`,`${ROUTES.ABOUT}#Nuestros-Partners`,`${ROUTES.ABOUT}#Subdistribuidores`,`${ROUTES.ABOUT}#Clientes`]}
            />
            <div>
                {/* Titulo */}
                <div className="pt-5" id="Quiénes-somos">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="col-md-12 m-auto text-center">                                                
                                <h1 className="text-white fs-title ff-normal">¿Quiénes somos?</h1>
                            </div>		
                        </div>
                    </div>
                </div>
                {/* Bloque logos */}
                <div className="container-fluid p-5 mt-5 bg-white">	
                    <div className="container m-auto">	
                        <div className="row g-4 row-cols-2 row-cols-lg-5 text-center">
                            <div className="feature col">
                                <img src={imgTaec(`./exp.png`)} width="auto" height="auto" alt="+ 14 Años" />
                                <p className="mt-3 fs-6 ff-bold custom-color-blue">+ 17 Años</p>						
                            </div>
                            <div className="feature col">
                                <img src={imgTaec(`./HQ-CDMX.png`)} width="auto" height="87" alt="HQ CDMX" />	
                                <p className="mt-3 fs-6 ff-bold custom-color-blue">HQ CDMX</p>
                            </div>
                            <div className="feature col">
                                <img src={imgTaec(`./subsidiaria.png`)} width="auto" height="87" alt="Subsidiaria Colombia" />	
                                <p className="mt-3 fs-6 ff-bold custom-color-blue">SUBSIDIARIA COLOMBIA</p>
                            </div>
                            <div className="feature col">
                                <img src={imgTaec(`./subdistribuidores_chile.png`)} width="auto" height="87" alt="Subdistribuidores Chile, Costa Rica, Panamá y Perú" />	
                                <p className="mt-3 fs-6 ff-bold custom-color-blue">SUBDISTRIBUIDORES CHILE, COSTA RICA, PANAMÁ Y PERÚ</p>
                            </div>
                            <div className="feature col">
                                <img src={imgTaec(`./clientes_800.png`)} width="auto" height="87" alt="+ 800 Clientes en 20 países" />	
                                <p className="mt-3 fs-6 ff-bold custom-color-blue">+1500 CLIENTES 22 PAÍSES</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Video presentacion */}
                <div className="container-fluid mt-6">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-12 m-auto">
                                    <video src="https://taecweb.s3.amazonaws.com/taec.com.mx/taec/nuestro-equipo.mp4" poster={imgTaec(`./poster.png`)} width="65%" height="400" controls></video>
                                </div>				
                            </div>
                        </div>		
                    </div>
                </div>
                {/* Titulo 2*/}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h1 className="text-white fs-title ff-normal">En TAEC nos comprometemos con el desarrollo<br className="d-none d-xl-block" /> e innovación.</h1>
                        </div>		
                        <div className="col-md-12 m-auto text-center mt-3">  
                            <p className="text-white fs-texto ff-normal">A través del valor de la tecnología educativa en corporativos, gobiernos e instituciones académicas<br className="d-none d-xl-block" /> en México y Latinoamérica.</p>
                        </div>	
                    </div>
                </div>
                
                <div id="Nuestros-Partners"></div>
                <HrTitle t1="Nuestros Partners" />

                {/* txt*/}
                <div className="container-fluid mt-5">
                    <div className="container">                    
                        <div className="col-md-12 m-auto text-center">  
                            <p className="text-white fs-texto ff-normal">En TAEC sabemos que ninguna empresa puede ofrecer una solución completa sin<br className="d-none d-xl-block" /> trabajar de forma cooperativa con otras.</p>
                        </div>	
                    </div>
                </div>

                <SliderPartners />

                <div id="Subdistribuidores"></div>
                <HrTitle t1="Presencia en otros países" />

                {/* Bloque img */}
                <div className="container-fluid p-5 mt-5 bg-white">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-12 m-auto">
                                    <img src={imgTaec(`./subdistribuidores.png`)} className='img-fluid' width="auto" height="auto" alt="Subdistribuidores" />
                                </div>				
                            </div>
                        </div>		
                    </div>
                </div>

                <div id="Clientes"></div>
                <HrTitle t1="Nuestros clientes" />

                <div className='pt-2 pt-5'>
                    <SliderClientes />
                </div>

                <div id="Nuestra-Visión"></div>
                <HrTitle t1="Nuestra Visión" />

                {/* txt*/}
                <div className="container-fluid mt-5">
                    <div className="container">                    
                        <div className="col-md-12 m-auto text-center">  
                            <p className="text-white fs-texto ff-normal">Proveer a nuestros clientes las soluciones ideales para cada uno a través de nuestro gran expertise en tecnología educativa.<br className="d-none d-xl-block" /> Ser líderes de la industria y distinguirnos por el servicio al cliente en México y América Latina.</p>
                        </div>	
                    </div>
                </div>
                
                <div className='pt-5'>
                    <HrTitle t1="Otros Servicios" />
                </div>

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
                    altimg4B2={"Cursos a la medida"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>CURSOS DE <br /> CATÁLOGO</>)}                
                    linkB3={ROUTES.CURSOS_CATALOGO}
                    titleB4={(<>CURSOS DE <br /> CAPACITACIÓN</>)}                
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />
            </div>
        </>
    );
}