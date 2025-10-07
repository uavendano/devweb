import { NavLink, useLocation } from 'react-router-dom';
import logoBlack from '../../images/navbar/taec.png';
import logoWhite from '../../images/navbar/taec_logo.png';
import DropdownMenu from './dropdownMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/navbar/navbar.css';
import { useRef } from "react";
import { HashLink as Ancla } from 'react-router-hash-link';

export default function Navbar() {
    const dropdownRef = useRef(null); // Para cerrar el icono del componente DropdownMenu al cerrar el DropdownMenu
    const location = useLocation(); // Rutas donde debe mostrarse el logo blanco
    const rutasWhite = [ROUTES.ABOUT,ROUTES.DESARROLLO_CURSOS,ROUTES.SERVICIOS_TI,ROUTES.ARTICULATE_360,ROUTES.TOTARA,ROUTES.MOTRAIN,ROUTES.STORYLINE_360,ROUTES.REVIEW_360,ROUTES.RISE_360,ROUTES.AI_ASSISTANT,ROUTES.TERMINOS_CONDICIONES,ROUTES.PRIVACIDAD,ROUTES.POLITICAS]; // Si la ruta actual está en el array, usa el logo blanco; si no, usa el normal
    const logo = rutasWhite.includes(location.pathname) ? logoWhite : logoBlack; // Determina la clase de la imagen según la ruta
    const txtColor = rutasWhite.includes(location.pathname) ? "text-white" : "custom-color"; // Determina el color de texto del menu
    const backgroudColor = rutasWhite.includes(location.pathname) ? "bg-black" : "bg-white"; // Determina el fondo de color de texto del menu
    
    return (
        <>
            <div id="borde-deg"></div>
            <div id="item-soporte" className='m-auto py-1 text-end' style={{maxWidth: '1180px'}}>
                <span className='fs-7' style={{margin: '0 10px'}}>
                    <NavLink to={ROUTES.SOPORTE} className={({ isActive }) => `text-decoration-none fw-medium ${txtColor} ${isActive ? 'active-link' : ''}`}>SOPORTE</NavLink>
                </span>
            </div>
            <nav className="navbar navbar-expand-lg p-0">
                <div id="maxWidth" className="container d-flex justify-content-between align-items-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className={`bi bi-list fs-3 ${txtColor}`}></i>
                    </button>
                    <NavLink to={ROUTES.HOME} className="navbar-brand"><img src={logo} id="logo" alt="TAEC Logo" width='115px' height='auto' /></NavLink>
                    <div className={`collapse navbar-collapse custom-collapse ${backgroudColor}`} id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-evenly fw-medium">
                            <li className="nav-item position-static">                  
                                <span className={`nav-link contenedor-paddig dropdown-toggle ${txtColor}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">SERVICIOS</span>
                                <div className="dropdown-menu w-100 p-4 rounded-0 shadow" aria-labelledby="dropdownMenuButton" ref={dropdownRef}>
                                    <div className="row">
                                        <DropdownMenu dropdownRef={dropdownRef} />
                                    </div>
                                </div>
                            </li>  
                            <li className="nav-item"><NavLink to={ROUTES.CURSOS_CAPACITACION} className={({ isActive }) => `nav-link ${txtColor} ${isActive ? 'active-link' : ''}`}>CURSOS DE CAPACITACIÓN</NavLink></li>
                            <li className="nav-item"><NavLink to={ROUTES.ABOUT} className={({ isActive }) => `nav-link ${txtColor} ${isActive ? 'active-link' : ''}`}>¿QUIÉNES SOMOS?</NavLink></li>
                            <li className="nav-item"><Ancla to={ROUTES.PARTNERS} className={`nav-link ${txtColor}`}>PARTNERS</Ancla></li>
                            <li className="nav-item"><NavLink to={ROUTES.TIENDA} className={`nav-link ${txtColor}`}>TIENDA</NavLink></li>
                            <li className="nav-item"><NavLink to={ROUTES.CONTACTO} className={({ isActive }) => `nav-link ${txtColor} ${isActive ? 'active-link' : ''}`}>CONTACTO</NavLink></li>
                            <li id="subitem" className="nav-item"><NavLink to={ROUTES.SOPORTE} className={({ isActive }) => `nav-link ${txtColor} ${isActive ? 'active-link' : ''}`}>SOPORTE</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}