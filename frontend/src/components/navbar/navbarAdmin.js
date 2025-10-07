import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import Logout from '../services/logout.js';
import ROUTES from '../../routes/routes.js';
import '../../css/navbar/navbarAdmin.css';

export default function Navbar() {
    const imgNavbar = require.context('../../images/navbar',true);
    const { isAuthenticated, user } = useAuth(); // Obtener el estado de autenticación desde useAuth
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated); // Estado local para manejar la autenticación            
    const locationpage = useLocation();
    
    useEffect(() => {
        // Actualiza el estado local de autenticación cuando cambie en useAuth
        setIsLoggedIn(isAuthenticated);
    }, [isAuthenticated]);    
    
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary" id='navbar'>
                <div className="container-fluid">                    
                    <Link to={ROUTES.HOME} className="navbar-brand">                        
                        <img src={imgNavbar(`./logo.png`)} className="object-fit-cover" style={{width:"125px", height:"40px"}} alt="Logo Taec" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* Enlace visible para cualquier usuario autenticado (admin o normal) */}
                            {isAuthenticated && user && (
                                <>                                      
                                    <li className="nav-item">   
                                    </li>
                                </>
                            )}
                            {/* Enlace exclusivo para admin */}
                            {isAuthenticated && user && user.roleid === 1 && (
                                <>                                                                          
                                    <li className="nav-item">                                    
                                        <Link to={ROUTES.PAGE_ADMIN} className={`nav-link ${locationpage.pathname === ROUTES.PAGE_ADMIN ? 'active-link' : ''}`} aria-current="page">Página admin</Link>
                                    </li>                                                                                                       
                                </>
                            )}                            
                        </ul>
                        {isLoggedIn ? (
                            <>                                
                                <ul className="navbar-nav mb-2 mb-lg-0" style={{marginRight:"5%"}}>                                    
                                    <li className="nav-item dropdown d-flex">                                        
                                        <a className="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="bi bi-gear-fill me-2"></i> Opciones
                                        </a>                            
                                        <ul className="dropdown-menu">                                             
                                            <li><Logout /></li>                                                                                                                   
                                        </ul>                                
                                    </li>
                                    <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                                        <div className="vr d-none d-lg-flex h-100 mx-lg-2"></div>
                                        <hr className="d-lg-none my-2 text-white-50" />
                                    </li>
                                    <li></li>
                                </ul>                            
                            </>
                            ) : (                                                        
                                <Link to={ROUTES.LOGIN} className="nav-link text-decoration-none me-5">Acceder</Link>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}