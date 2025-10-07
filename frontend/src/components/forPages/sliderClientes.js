import '../../css/components/sliderClientes.css';

export default function SliderClientes() {
    return (
        <>
            <div className="container mt-5">
                <div id="ClientesTaec" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#ClientesTaec" data-bs-slide-to="0" className="active radio" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#ClientesTaec" data-bs-slide-to="1" className="radio" aria-label="Slide 2"></button>			
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="col-md-12 m-auto" style={{textAlign: 'justify'}}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 clientes-border">
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">GS1</h2>    
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "La colaboración con TAEC ha sido fructífera, hemos podido implementar exitosamente la plataforma de Totara y nos ayudaron a desarrollar el contenido que necesitábamos para las capacitaciones a distancia".
                                                </p>        												
                                            </div>
                                            <div className="col-md-6 clientes-border-bottom">
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">VivaAerobús</h2>
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "Articulate nos brinda la oportunidad de transformar contenido a un formato dinámico, atractivo y divertido para los cursos online que ofrecemos a nuestros colaboradores. Reducimos tiempos de desarrollo utilizando plantillas o diseñando desde cero".
                                                </p>
                                            </div>
                                        </div>
                                    </div>		
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="col-md-12 m-auto" style={{textAlign: 'justify'}}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 clientes-border-right">
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">Mosaic USA</h2>    
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "TAEC nos permitió respaldar el desarrollo de cursos y las necesidades gráficas y audiovisuales de nuestros clientes. Es un factor de crecimiento notable. Por el profesionalismo, anticipamos que nuestra relación continuará fortaleciéndose".
                                                </p>        												
                                            </div>
                                            <div className="col-md-6">                     												
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">Fundación Omar Dengo</h2>
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "Utilizamos Vyond para desarrollar modelos educativos innovadores centrados en las personas. Nos permite crear oportunidades de aprendizaje para el desarrollo y plena participación social y productiva de las personas en la sociedad del conocimiento".
                                                </p>
                                            </div>
                                        </div>
                                    </div>		
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="col-md-12 m-auto" style={{textAlign: 'justify'}}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 clientes-border">
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">OIM Perú</h2>    
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "Los cursos que se desarrollaron han cumplido con toda su funcionalidad. La colaboración y productividad nos han dejado satisfechos. Esperamos poder seguir trabajando con TAEC en el futuro".
                                                </p>        												
                                            </div>
                                            <div className="col-md-6 clientes-border-bottom">
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">UNICEF Costa Rica</h2>
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "Articulate es de gran apoyo para gestionar los cursos en línea de nuestras contrapartes y lograr nuestros objetivos. TAEC otorga un gran apoyo y servicio gracias a su cercana colaboración y disponibilidad de atención".
                                                </p>
                                            </div>
                                        </div>
                                    </div>		
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="col-md-12 m-auto" style={{textAlign: 'justify'}}>
                                        <div className="row justify-content-center">
                                            <div className="col-md-6 clientes-border-right">
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">Colegio KB</h2>    
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "Taec nos ayudó a llegar a una implementación integral de ONE y NEO en nuestro colegio. Gracias a su colaboración podemos afirmar que estamos posicionados a la vanguardia de la educación a distancia en México".                                                    
                                                </p>        												
                                            </div>
                                            <div className="col-md-6">                    												
                                                <h2 className="ms-3 mt-5 mb-4 fs-title ff-normal custom-color-blue">Linktech</h2>
                                                <p className="ms-3 me-3 fs-5 fs-texto ff-normal custom-color">
                                                    "Escogimos a Taec como nuestro socio en e-learning por su calidad, profesionalismo y conocimiento en la creación de estrategias de capacitación".
                                                </p>
                                            </div>
                                        </div>
                                    </div>		
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}