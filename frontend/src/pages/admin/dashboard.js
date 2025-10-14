import LogoTaec from '../../images/navbar/taec.png';
import { Link, Outlet, useNavigate, useLocation  } from 'react-router-dom';
import ROUTES from '../../routes/routes.js';
import { logout } from "../../components/services/logout.js";
import useAuth from '../../hooks/useAuth.js';

export default function Dashboard() {
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignOut = () => logout(navigate);
    const { user, error } = useAuth();
    const isAdmin = user?.roleid === 1;

    return (
        <>
            <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"> 
                <Link className="navbar-brand col-md-3 col-lg-2 px-3 fs-6 text-white" to={ROUTES.HOME}>
                    <img src={LogoTaec} width="100" alt="Logo taec" />
                </Link> 
                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap"> 
                        <button className="nav-link px-3 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"> 
                            <i className="bi bi-list"></i>
                        </button> 
                    </li>                    
                </ul>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
                        <div className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex ="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel"> 
                            <div className="offcanvas-header"> 
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">TAEC</h5> 
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button> 
                            </div> 
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto"> 
                                <ul className="nav flex-column">
                                    {/* Enlace siempre visible */}
                                    <li className="nav-item">
                                        <Link  className={`nav-link d-flex align-items-center gap-2 ${location.pathname === ROUTES.DASHBOARD ? "active" : ""}`}
                                            to={ROUTES.DASHBOARD}>
                                            <i className="bi bi-house-fill"></i> Inicio
                                        </Link >
                                    </li>
                                    {/* Solo se muestra si es admin */}
                                    {isAdmin && (
                                        <>
                                            <li className="nav-item">
                                                <Link  className={`nav-link d-flex align-items-center gap-2 ${location.pathname === ROUTES.CUSTOMERS ? "active" : ""}`}
                                                    to={ROUTES.LIST_CUSTOMERS}>
                                                    <i className="bi bi-person-rolodex"></i> Clientes
                                                </Link >
                                            </li>
                                            <ul className="nav flex-column list-unstyled">     
                                                <li className="nav-item">
                                                    <Link className="dropdown-toggle nav-link d-flex align-items-center gap-2" data-bs-toggle="collapse" data-bs-target="#user-collapse" aria-expanded="true">
                                                        <i className="bi bi-people"></i> Usuarios
                                                    </Link> 
                                                    <div className="collapse show ms-5" id="user-collapse">
                                                        <ul className="btn-toggle-nav list-unstyled small"> 
                                                            <li><Link to={ROUTES.CREATE_USERS} className="d-inline-flex text-decoration-none" >Nuevo usuario</Link></li>
                                                            <li><Link to={ROUTES.LIST_USERS} className="d-inline-flex text-decoration-none" >Lista de usuarios</Link></li>
                                                        </ul> 
                                                    </div> 
                                                </li> 
                                            </ul>
                                            <ul className="nav flex-column list-unstyled">
                                                <li className="nav-item">
                                                    <Link className="dropdown-toggle nav-link d-flex align-items-center gap-2" data-bs-toggle="collapse" data-bs-target="#admins-collapse" aria-expanded="true">
                                                        <i className="bi bi-person-gear"></i> Permisos
                                                    </Link>
                                                    <div className="collapse show ms-5" id="admins-collapse">
                                                        <ul className="btn-toggle-nav list-unstyled small">
                                                            <li><Link to={ROUTES.ADMINS} className="d-inline-flex text-decoration-none" >Administradores del sitio</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="nav flex-column list-unstyled">
                                                <li className="nav-item">
                                                    <Link className="dropdown-toggle nav-link d-flex align-items-center gap-2" data-bs-toggle="collapse" data-bs-target="#areas-collapse" aria-expanded="true">
                                                        <i className="bi bi-bounding-box-circles"></i> Áreas
                                                    </Link>
                                                    <div className="collapse show ms-5" id="areas-collapse">
                                                        <ul className="btn-toggle-nav list-unstyled small">
                                                            <li><Link to={ROUTES.CREATE_AREAS} className="d-inline-flex text-decoration-none" >Nueva área</Link></li>
                                                            <li><Link to={ROUTES.LIST_AREAS} className="d-inline-flex text-decoration-none" >Lista de áreas</Link></li>
                                                            <li><Link to={ROUTES.ASSIGN_AREA_USER} className="d-inline-flex text-decoration-none" >Asignar área a usuario</Link></li>
                                                            <li><Link to={ROUTES.UNASSIGN_AREA_USER} className="d-inline-flex text-decoration-none" >Quitar área a usuario</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </>
                                    )}
                                    <hr className="my-3" />
                                    <li className="nav-item">
                                        <button className="nav-link d-flex align-items-center gap-2" onClick={handleSignOut}>
                                            <i className="bi bi-door-closed"></i> Sign out
                                        </button>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </div>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {/* Saludo solo en /dashboard */}
                        {location.pathname === ROUTES.DASHBOARD && (
                            <>
                                <h1 className="mt-3 ff-bold fs-subtitle custom-color">¡Bienvenido...!</h1>
                                <h2 className="ff-normal fs-subtitle custom-color">
                                    {error ? error : user ? `${user.name} ${user.lastname}` : ''}
                                </h2>
                            </>
                        )}
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"> 
                            <Outlet /> 
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}