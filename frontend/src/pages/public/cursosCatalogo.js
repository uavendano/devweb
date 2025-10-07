import IconsMenu from '../../components/navbar/iconsMenu.js';
import ROUTES from '../../routes/routes.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import BloqueIcoTxt from '../../components/bloques/bloqueIcoTxt.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';
import "../../css/pages/cursosCatalogo.css";

export default function CursosCatalogo() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.LEARNING_COFFEE,ROUTES.GO1,ROUTES.CUSTOM_GUIDE];
    const name_prod = ["Learning Coffee",null,null];
    //botones Dropdown
    const btns_LEA_COF = [
        {
            text: "Catálogo",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        },
    ];
    const btns_GO_ONE = [
        {
            text: "Catálogo",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        },
    ];
    const btns_CUS_GUI = [
        {
            text: "Catálogo",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        },
        {
            text: "Contáctanos",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.CONTACTO,            
            openInNewTab: false
        },
    ];
    return (
        <>
            <IconsMenu 
                id_ico={'CCAT'}                
                title={'Cursos de<br />catálogo'} 
                iconos={3}
                urls={enlaces} 
                name={name_prod}
            />
            <div className="mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h2 className="mb-5 custom-color fs-title ff-normal">Cursos de catálogo creados por expertos<br className="d-none d-xl-block" /> para futuros expertos</h2>                        
                        </div>		
                    </div>
                </div>
                <BloqueTxtIco 
                    ancla={"Learning-Coffee"}
                    subtitle={"Micro cursos, macro aprendizaje"}
                    info={"Cursos rápidos de catálogo para empresas. Cuentan con una colección de cientos de cursos creados con expertos e instituciones importantes. Ofrece contenido simplificado que permite un aprendizaje ágil y veloz."}
                    buttons={btns_LEA_COF}
                    img={"coffe.png"}
                    altText={"Learning Coffe"}
                />
                <div className="container-fluid mt-6">
                    <div className="row justify-content-center">        
                        <div className="col-md-2 skills">
                            <p className="fw-medium text-center my-4 fs-5 fs-texto custom-color-blue">Capacitación</p>
                        </div>
                        <div className="col-md-2 skills">
                            <p className="fw-medium text-center my-4 fs-5 fs-texto custom-color-blue">Empresa<br className="d-none d-xl-block" /> 2.0</p>
                        </div>
                        <div className="col-md-2 skills">
                            <p className="fw-medium text-center my-4 fs-5 fs-texto custom-color-blue">Liderazgo</p>
                        </div>
                        <div className="col-md-2 skills">
                            <p className="fw-medium text-center my-4 fs-5 fs-texto custom-color-blue">Trabajo en<br className="d-none d-xl-block" /> equipo</p>
                        </div>        
                    </div>       
                </div>
                <BloqueIcoTxt                     
                    ancla={"Go-one"}
                    subtitle={"La suscripción mensual abre todo el catálogo para el usuario"}
                    info={"Escoge, agiliza, ahorra. Apoya tu selección de cursos con IA y machine learning. Gestión, servicio al cliente, habilidades de IT, desarrollo profesional y muchos otros temas más."}
                    buttons={btns_GO_ONE}
                    img={"go1.png"}
                    altText={"GO1"}
                />
                <BloqueTxtIco 
                    ancla={"Custom-Guide"}
                    subtitle={"Los paquetes de herramientas de escritorio más famosos"}
                    info={"Mide y mejora las habilidades empresariales esenciales de tus empleados, para el éxito en el mundo laboral actual."}
                    buttons={btns_CUS_GUI}
                    img={"customguide.png"}
                    altText={"Custom Guide"}
                />
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
                    titleB2={(<>DESARROLLO DE CURSOS <br /> A LA MEDIDA</>)}                
                    img4B2={"d-cursos.png"}
                    altimg4B2={"Desarrollo de cursos"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>ARTICULATE <br /> 360</>)}                
                    linkB3={ROUTES.ARTICULATE_360}
                    titleB4={"VYOND"}                
                    linkB4={ROUTES.VYOND}
                />
            </div>
        </>
    );
}