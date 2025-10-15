import { Routes, Route, useLocation } from 'react-router-dom';
import PageMetaManager from './components/services/pageMetaManager.js';
// Navbar
import Navbar from './components/navbar/navbar.js';
// Auth
import Login from './pages/auth/login.js';
import Register from './pages/auth/register.js';
import ForgotPassword from './pages/auth/forgotPassword.js';
import ResetPassword from './pages/auth/resetPassword.js';
// Paginas protegidas 
import Dashboard from './pages/admin/dashboard.js';
import ListCustomers from './pages/admin/customers/listCustomers.js';
import CreateUser from './pages/admin/user/createUser.js';
import ListUser from './pages/admin/user/listUser.js';
import EditUser from './pages/admin/user/editUser.js';
import Admins from './pages/admin/assignments/Admins.js';
import CreateArea from './pages/admin/area/createArea.js';
import ListArea from './pages/admin/area/listArea.js';
import EditArea from './pages/admin/area/editArea.js';
import AssignAreaToUsers from './pages/admin/assignments/assignAreaToUsers.js';
import UnassignAreaToUsers from './pages/admin/assignments/unassignAreaToUsers.js';
// Paginas publicas
import Home from './pages/public/home.js';
import CursosCapacitacion from './pages/public/cursosCapacitacion.js';
import Taec from './pages/public/taec.js';
import Contacto from './pages/public/contacto.js';
import Soporte from './pages/public/soporte.js';
import SevenMinutes from './pages/public/sevenMinutes.js';
import CursosCatalogo from './pages/public/cursosCatalogo.js';
import DesarrolloCursos from './pages/public/desarrolloCursos.js';
import HerramientasAutoria from './pages/public/herramientasAutoria.js';
import PlataformasElearning from './pages/public/plataformasElearning.js';
import ExtensionesAprendizaje from './pages/public/extensionesAprendizaje.js';
import ServiciosTi from './pages/public/serviciosTi.js';
import Examenes from './pages/public/examenes.js';
import Articulate360 from './pages/public/articulate360.js';
import Vyond from './pages/public/vyond.js';
import Totara from './pages/public/totara.js';
import Footer from './components/footer/footer.js';
import Ottolearn from './pages/public/ottolearn.js';
import Reach360 from './pages/public/reach360.js';
import OneNeo from './pages/public/oneNeo.js';
import Moodle from './pages/public/moodle.js';
import Lys from './pages/public/lys.js';
import Motrain from './pages/public/motrain.js';
import ClassElearning from './pages/public/class.js';
import Bigbluebutton from './pages/public/bigbluebutton.js';
import Autocert from './pages/public/autocert.js';
import Zoola from './pages/public/zoola.js';
import Saras from './pages/public/saras.js';
import Evaluaciones from './pages/public/evaluaciones.js';
import Storyline360 from './pages/public/storyline360.js';
import Studio360 from './pages/public/studio360.js';
import Replay360 from './pages/public/replay360.js';
import Review360 from './pages/public/review360.js';
import ArticulateTraining from './pages/public/articulateTraining.js';
import ContentLibrary from './pages/public/contentLibrary.js';
import Rise360 from './pages/public/rise360.js';
import Peek360 from './pages/public/peek360.js';
import AiAssistant from './pages/public/aiAssistant.js';
import TerminosCondiciones from './pages/public/terminosCondiciones.js';
import Privacidad from './pages/public/privacidad.js';
import Politicas from './pages/public/politicas.js';
import CalendarioCursos from './pages/public/calendarioCursos.js';
// Landings
import LandingSevenMinutes from './pages/public/landing/landingSevenMinutes.js';
// Utils
import ScrollToTop from './components/utils/scrollToTop.js';
import BtnUp from './components/utils/btnUp.js';
// Otras
import HelloWorld from './pages/others/helloWorld.js';
import Error404 from './pages/others/error404.js';
import Unauthorized from './pages/others/unauthorized.js';
// Servicios
import ROUTES from './routes/routes.js';
import ProtectedRoute from './routes/protectedRoute.js';

function App() {
    // Hook useLocation para obtener la ruta actual
    const location = useLocation();
    // Rutas sin el Navbar
    const hideNavbarRoutes = [ROUTES.HELLOWORLD, ROUTES.LOGIN, ROUTES.REGISTER, ROUTES.FORGOT_PASSWORD, ROUTES.RESET_PASSWORD,ROUTES.DASHBOARD,ROUTES.DASHBOARD + "/*" ];

    return (
        <div className="App">
            {/* Renderiza el Navbar solo si la ruta actual no está en hideNavbarRoutes */}
            {!hideNavbarRoutes.some(route => location.pathname.startsWith(route)) && <Navbar />}

            <ScrollToTop />
 
            <PageMetaManager />

            <Routes>
                {/* Rutas Auth */}                
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path={ROUTES.REGISTER} element={ <Register /> } />
                <Route path={ROUTES.FORGOT_PASSWORD} element={ <ForgotPassword /> } /> 
                <Route path={ROUTES.RESET_PASSWORD} element={ <ResetPassword /> } />

                {/* Dashboard base: solo requiere estar autenticado */}               
                <Route path={ROUTES.DASHBOARD} element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> }>
                    {/* Rutas internas protegidas solo para admins */}
                    <Route path={ROUTES.LIST_CUSTOMERS} element={<ProtectedRoute requiredRole="1"> <ListCustomers /> </ProtectedRoute> } />         
                    <Route path={ROUTES.CREATE_USERS} element={<ProtectedRoute requiredRole="1"> <CreateUser /> </ProtectedRoute> } />   
                    <Route path={ROUTES.LIST_USERS} element={<ProtectedRoute requiredRole="1"> <ListUser /> </ProtectedRoute>} />   
                    <Route path={`${ROUTES.EDIT_USER}/:id`} element={<ProtectedRoute requiredRole="1"> <EditUser /> </ProtectedRoute> } /> 
                    <Route path={ROUTES.ADMINS} element={<ProtectedRoute requiredRole="1"> <Admins /> </ProtectedRoute> } />
                    <Route path={ROUTES.CREATE_AREAS} element={<ProtectedRoute requiredRole="1"> <CreateArea /> </ProtectedRoute> } /> 
                    <Route path={ROUTES.LIST_AREAS} element={<ProtectedRoute requiredRole="1"> <ListArea /> </ProtectedRoute>} />
                    <Route path={`${ROUTES.EDIT_AREA}/:id`} element={<ProtectedRoute requiredRole="1"> <EditArea /> </ProtectedRoute> } />
                    <Route path={ROUTES.ASSIGN_AREA_USER} element={<ProtectedRoute requiredRole="1"> <AssignAreaToUsers /> </ProtectedRoute>} />
                    <Route path={ROUTES.UNASSIGN_AREA_USER} element={<ProtectedRoute requiredRole="1"> <UnassignAreaToUsers /> </ProtectedRoute>} />
                </Route>
                 
                {/* Paginas publicas */}
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.CURSOS_CAPACITACION} element={<CursosCapacitacion />} />
                <Route path={ROUTES.ABOUT} element={<Taec />} />
                <Route path={ROUTES.CONTACTO} element={<Contacto />} />
                <Route path={ROUTES.SOPORTE} element={<Soporte />} />
                <Route path={ROUTES.SEVEN_MINUTES} element={<SevenMinutes />} />
                <Route path={ROUTES.CURSOS_CATALOGO} element={<CursosCatalogo />} />
                <Route path={ROUTES.DESARROLLO_CURSOS} element={<DesarrolloCursos />} />
                <Route path={ROUTES.HERRAMIENTAS_AUTORIA} element={<HerramientasAutoria />} />
                <Route path={ROUTES.PLATAFORMAS_ELEARNING} element={<PlataformasElearning />} />
                <Route path={ROUTES.EXTENCIONES_APRENDIZAJE} element={<ExtensionesAprendizaje />} />
                <Route path={ROUTES.SERVICIOS_TI} element={<ServiciosTi />} />
                <Route path={ROUTES.EXAMENES} element={<Examenes />} />
                <Route path={ROUTES.ARTICULATE_360} element={<Articulate360 />} />
                <Route path={ROUTES.VYOND} element={<Vyond />} />
                <Route path={ROUTES.TOTARA} element={<Totara />} />
                <Route path={ROUTES.OTTOLEARN} element={<Ottolearn />} />
                <Route path={ROUTES.REACH_360} element={<Reach360 />} />
                <Route path={ROUTES.ONE_NEO} element={<OneNeo />} />
                <Route path={ROUTES.MOODLE} element={<Moodle />} />
                <Route path={ROUTES.LYS} element={<Lys />} />
                <Route path={ROUTES.MOTRAIN} element={<Motrain />} />
                <Route path={ROUTES.CLASS} element={<ClassElearning />} />
                <Route path={ROUTES.BBB} element={<Bigbluebutton />} />
                <Route path={ROUTES.AUTOCERT} element={<Autocert />} />
                <Route path={ROUTES.ZOOLA} element={<Zoola />} />
                <Route path={ROUTES.SARAS} element={<Saras />} />
                <Route path={ROUTES.EVALUACIONES} element={<Evaluaciones />} />
                <Route path={ROUTES.STORYLINE_360} element={<Storyline360 />} />
                <Route path={ROUTES.STUDIO_360} element={<Studio360 />} />
                <Route path={ROUTES.REPLAY_360} element={<Replay360 />} />
                <Route path={ROUTES.REVIEW_360} element={<Review360 />} />
                <Route path={ROUTES.ARTICULATE_TRAINING} element={<ArticulateTraining />} />
                <Route path={ROUTES.CONTENT_LIBRARY} element={<ContentLibrary />} />
                <Route path={ROUTES.RISE_360} element={<Rise360 />} />
                <Route path={ROUTES.PEEK_360} element={<Peek360 />} />
                <Route path={ROUTES.AI_ASSISTANT} element={<AiAssistant />} />
                <Route path={ROUTES.TERMINOS_CONDICIONES} element={<TerminosCondiciones />} />
                <Route path={ROUTES.PRIVACIDAD} element={<Privacidad />} />
                <Route path={ROUTES.POLITICAS} element={<Politicas />} />
                <Route path={ROUTES.CALENDARIO} element={<CalendarioCursos />} />

                {/* Landings pages */}
                <Route path={ROUTES.LAND_SEVEN_MINUTES} element={<LandingSevenMinutes />} />
                
                {/* Otras */}
                <Route path={ROUTES.UNAUTHORIZED} element={<ProtectedRoute> <Unauthorized /> </ProtectedRoute>} />
                <Route path={ROUTES.HELLOWORLD} element={<HelloWorld />}/>
                <Route path="*" element={<Error404 />}/>
            </Routes>
            
            <BtnUp />

            <Footer />  
        </div>
    );
}

export default App;