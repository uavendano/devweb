import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import ROUTES from './../../routes/routes.js';
import '../../css/navbar/dropdownMenu.css';

export default function DropdownMenu({ dropdownRef }) {
    const [isVisible, setIsVisible] = useState(false);
    const iconRef = useRef(null); // Referencia para el ícono y el texto

    // Función para alternar la visibilidad del texto
    const toggleVisibility = (e) => {
        e.stopPropagation(); // Detiene la propagación para evitar cierres inmediatos
        setIsVisible(!isVisible);
    };

    useEffect(() => {
    if (!dropdownRef?.current) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.attributeName === "class" &&
          !dropdownRef.current.classList.contains("show")
        ) {
          setIsVisible(false); // cerrar el texto del ícono cuando se cierre el dropdown
        }
      }
    });

    observer.observe(dropdownRef.current, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, [dropdownRef]);

    return (
        <>            
            <div className="container-fluid m-auto">
                <div className="row justify-content-start">
                    <div className="col-md-4">						
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 custom-color-blue">Cursos e-learning</li>
                            <li><Link to={ROUTES.SEVEN_MINUTES} className="fs-6 text-decoration-none" style={{color:"#F7D13B"}}><span>&#8226; 7 Minutes</span></Link></li>
                            <li><Link to={ROUTES.CURSOS_CATALOGO} className="fs-6 text-decoration-none custom-color"><span>&#8226; Otros cursos de catálogo</span></Link></li>
                            <li><Link to={ROUTES.DESARROLLO_CURSOS} className="fs-6 text-decoration-none custom-color"><span>&#8226; Desarrollo de cursos a medida</span></Link></li>
                            <li><Link to={ROUTES.HERRAMIENTAS_AUTORIA} className="fs-6 text-decoration-none custom-color"><span>&#8226; Herramientas para creación de cursos</span></Link></li>                                
                        </ul>
                    </div>
                    <div className="col-md-4">						
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 custom-color-blue">Plataformas e-learning</li>
                            <li><Link to={ROUTES.PLATAFORMAS_ELEARNING} className="fs-6 text-decoration-none custom-color"><span>&#8226; LMS's y otras plataformas</span></Link></li>
                            <li><Link to={ROUTES.EXTENCIONES_APRENDIZAJE} className="fs-6 text-decoration-none custom-color"><span>&#8226; Extensiones de aprendizaje</span></Link></li>
                            <li><Link to={ROUTES.SERVICIOS_TI} className="fs-6 text-decoration-none custom-color"><span>&#8226; Servicios de TI</span></Link></li>                           
                        </ul>
                    </div>
                    <div className="col-md-4">						
                        <ul className="list-unstyled">
                            <li className="fw-bold fs-5 custom-color-blue">Exámenes de alta seguridad</li>
                            <li><Link to={ROUTES.EXAMENES} className="fs-6 text-decoration-none custom-color"><span>&#8226; Plataforma especializada en éxamenes y diseño de evaluaciones de alta importancia</span></Link></li>                         
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div id="subconthov" ref={iconRef}>                                                        
                        {isVisible && (
                            <div className="mt-1 me-3">
                                <Link to={ROUTES.IMPLEMENTAR_ELEARNING} className="fw-bold fs-5 text-decoration-none custom-color-blue">
                                    <span>¿Cómo implementar e-learning y los servicios necesarios?</span>
                                </Link>
                            </div>
                        )}                            
                        <span title="Saber más" onClick={toggleVisibility}>
                            <h2><i className="bi bi-question-circle-fill custom-color-blue"></i></h2>
                        </span>
                    </div>
                </div>         
            </div>            
        </>
    );
}