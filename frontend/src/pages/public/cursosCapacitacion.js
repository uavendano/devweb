import IconsMenu from '../../components/navbar/iconsMenu.js';
import '../../css/pages/cursosCapacitacion.css';
import ROUTES from '../../routes/routes.js';
import ROUTESPDF from '../../routes/routesPDF.js';
import BloqueIcoTxt from '../../components/bloques/bloqueIcoTxt.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import { Link } from 'react-router-dom';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function CursosCapacitacion() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.CC_ARTICULATE_ASSISTANT,ROUTES.CC_ARTICULATE360,ROUTES.CC_D_ELEARNING,ROUTES.CC_C_ACCESIBLES_ARTICULATE360,ROUTES.CC_STORYLINE_AVANZADO,ROUTES.CC_D_INSTRUCCIONAL,ROUTES.CC_VYOND,ROUTES.CC_MOODLE,ROUTES.CC_TOTARA];
    const name_prod = [null,null,null,null,null,null,null,null,null];
    //botones Dropdown
    const btns_ART_AI = [
        {
            text: "Temario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTESPDF.TEM_ART_AI,            
            openInNewTab: true
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO_ART_AI,            
            openInNewTab: false
        },
        {
            text: "Comprar",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.STORE_ART_AI,            
            openInNewTab: true
        },
    ];
    const btns_ART = [
        {
            text: "Temarios",            
            className: "fs-5 btn-grey fs-texto ff-normal",            
            isDropdown: true,
            options: [
                { text: "Temario Básico", path: ROUTESPDF.TEM_ART_BAS_360},
                { text: "Temario Avanzado", path: ROUTESPDF.TEM_ART_AVA_360},
                { text: "Temario Experto", path: ROUTESPDF.TEM_ART_EXP_360},
                { text: "Temario Rise 360+", path: ROUTESPDF.TEM_RISE_360},
                { text: "Temario Completo", path: ROUTESPDF.TEM_ART_COM_360}
            ]            
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO,            
            openInNewTab: false
        },
        {
            text: "Comprar",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.STORE_CURSOS_ARTICULATE,            
            openInNewTab: true
        },
    ];
    const btns_DIS_ELE = [
        {
            text: "Temario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTESPDF.TEM_DIS_ELE,            
            openInNewTab: true
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO_DIS_ELE,            
            openInNewTab: false
        },
        {
            text: "Comprar",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.STORE_DIS_ELEARNING,            
            openInNewTab: true
        },
    ];
    const btns_ART_ACC = [
        {
            text: "Temario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTESPDF.TEM_ART_ACC,            
            openInNewTab: true
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO_ART_ACC,            
            openInNewTab: false
        },
        {
            text: "Comprar",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.STORE_CURSOS_ARTICULATE_ACCESIBLE,            
            openInNewTab: true
        },
    ];
    const btns_STO_AVA = [
        {
            text: "Temario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTESPDF.TEM_STO_AVA,            
            openInNewTab: true
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO_STO_AVA,            
            openInNewTab: false
        },        
    ];
    const btns_DIS_INS = [
        {
            text: "Temario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTESPDF.TEM_DIS_INS,            
            openInNewTab: true
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO_DIS_INS,            
            openInNewTab: false
        },        
    ];
    const btns_VYO = [
        {
            text: "Temario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,
            path:ROUTESPDF.TEM_VYO,            
            openInNewTab: true
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: false,  
            path:ROUTES.CALENDARIO_VYO,            
            openInNewTab: false
        },
        {
            text: "Comprar",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.STORE_CURSOS_VYOND,            
            openInNewTab: true
        },
    ];
    const btns_MOO = [
        {
            text: "Temarios",            
            className: "fs-5 btn-grey fs-texto ff-normal",            
            isDropdown: true,            
            options: [
                { text: "Creación de curso Moodle", path: ROUTESPDF.TEM_CUR_MOO},
                { text: "Administración de Moodle", path: ROUTESPDF.TEM_ADM_MOO},
                { text: "Administración y creación de cursos Moodle", path: ROUTESPDF.TEM_CUR_ADM_MOO},                
            ],
        },
        {
            text: "Calendario",            
            className: "fs-5 btn-grey fs-texto ff-normal",  
            isDropdown: false,
            path:ROUTES.CALENDARIO_MOO,            
            openInNewTab: false
        },        
    ];
    const btns_TOT = [
        {
            text: "Temarios",            
            className: "fs-5 btn-grey fs-texto ff-normal",
            isDropdown: true,
            options: [
                { text: "Creación de curso Totara", path: ROUTESPDF.TEM_CUR_TOT},
                { text: "Administración de Totara", path: ROUTESPDF.TEM_ADM_TOT}                
            ],
        },        
        {
            text: "Comprar",            
            className: "fs-5 btn-blue fs-texto ff-normal",
            isDropdown: false,
            path:ROUTES.STORE_CURSOS_TOTARA,            
            openInNewTab: true,
        },
    ];

    return (
        <>
            <IconsMenu 
                id_ico={'CC'}                
                title={'Cursos de<br />capacitación'} 
                iconos={9}
                urls={enlaces} 
                name={name_prod}
            />
            <div className="mt-5">
                {/*Banner*/}                
                <div className="container-fluid p-5 text-white" id="banner-fondo">
                    <div className="container">
                        <div className="col-md-12 m-auto text-start">
                            <div className="row justify-content-center">
                                <div className="col-md-12 m-auto">
                                    <h3 className="ff-bold fs-subtitle">CONOCE NUESTRAS</h3>
                                    <h1 className="ff-bold fs-titleXL">RUTAS DE <br />APRENDIZAJE</h1>
                                    <p className={`mb-4 fs-5 text-start w-35 ff-normal fs-texto`}>
                                        El desarrollo de e-learning requiere de equipos interdisciplinarios con diferentes roles y perfiles de usuario. TAEC te guia para que logres tus metas de capacitación, elige la ruta que mejor se adapte a tus necesidades.
                                    </p>                                
                                    <a href={ROUTESPDF.MAPA_RUTAS} className="btn btn-outline-light fs-5 ff-normal fs-texto" target="_blank" rel="noopener noreferrer">Ver rutas de aprendizaje</a>
                                </div>				
                            </div>
                        </div>		
                    </div>
                </div>
                {/* Titulo */}
                <div className="container-fluid mt-5">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h2 className="mb-4 custom-color fs-title ff-normal">Aprende a crear e-learning profesional</h2>
                            <p className="fs-5 ff-normal fs-texto custom-color">Capacítate con nosotros en el uso de las plataformas y habilidades para el e-learning.</p>                        
                        </div>		
                    </div>
                </div>
                {/* Componente bloques */}
                <div className="custom-color">
                    <BloqueIcoTxt                     
                        ancla={"Articulate-Assistant"}
                        subtitle={"Creación de contenidos con inteligencia artificial Articulate 360 Assistant"}
                        info={"AI Assistant es la solución de inteligencia artificial integrada de Articulate que permite a los diseñadores de eLearning crear cursos en línea de alta calidad hasta 9 veces más rápido. Aprende en este curso a usar AI Assistant Articulate Rise y Storyline, para crear y refinar rápidamente contenidos, interacciones, imágenes personalizadas, voces neuronales, efectos de audio y mucho más."}
                        buttons={btns_ART_AI}
                        img={"curso-ai.png"}
                        altText={"Articulate 360 Assistant"}
                    />
                    <BloqueTxtIco 
                        ancla={"Articulate-360"}
                        subtitle={"Cursos certificados Articulate"}
                        info={"Te enseñamos a utilizar todas las herramientas incluidas en Articulate 360. Storyline 360, Replay 360, Content Library 360, Rise 360 y Peek 360 son los elementos que aprenderás a dominar de la mano de expertos. Descubre los secretos para sacarle el máximo provecho a Articulate 360 y crea cursos e-learning sobresalientes."}
                        buttons={btns_ART}
                        img={"360-certified.png"}
                        altText={"Articulate 360"}
                    />
                    <BloqueIcoTxt                     
                        ancla={"Diseño-elearning"}
                        subtitle={"Lo esencial para el diseño de e-learning"}
                        info={"Si deseas iniciar en el mundo del e-learning, o afianzar los fundamentos de la creación de contenidos autodirigidos, este curso es para ti. Descubre como diseñar contenidos de aprendizaje atractivos basados en los métodos y teorías claves del diseño instruccional. Revisa las reglas de composición gráfica y metodologías para diseñar objetos de aprendizaje con experiencias unicas y atractivas en Articulate 360. Este curso está lleno de ejemplos e ideas de cursos hechos en México y Estados Unidos."}
                        buttons={btns_DIS_ELE}
                        img={"ede.png"}
                        altText={"Diseño e-learning"}
                    />
                    <BloqueTxtIco 
                        ancla={"cursos-accesibles-Articulate-360"}
                        subtitle={"Crear cursos accesibles con Articulate 360"}
                        info={"La accesibilidad en el aprendizaje se refiere a la capacidad de los estudiantes para acceder al contenido y las herramientas de aprendizaje de manera equitativa, independientemente de sus habilidades, discapacidades o circunstancias personales. Con este curso aprenderás a agregar accesibilidad a tus cursos desarrollados con Articulate 360."}
                        buttons={btns_ART_ACC}
                        img={"curso-accesible.png"}
                        altText={"Cursos accesibles con Articulate 360"}
                    />
                    <BloqueIcoTxt                     
                        ancla={"Storyline-Avanzado"}
                        subtitle={"Storyline 360 Técnicas Avanzadas"}
                        info={"Dominar herramientas y técnicas avanzadas de Storyline 360 así como optimizar procesos para crear cursos altamente efectivos y sofisticados."}
                        buttons={btns_STO_AVA}
                        img={"storyline.png"}
                        altText={"Storyline Avanzado"}
                    />
                    <BloqueTxtIco 
                        ancla={"Diseño-Instruccional"}
                        subtitle={"Diseño Instruccional de guion e-learning"}
                        info={"Curso de diseño instruccional de guion e-learning.Elabora un guion para cursos e-learning mediante técnicas y procesos sistemáticos; con el curso de 8 horas, comprenderás los aspectos que un diseñador instruccional e-learning toma en cuenta para crear experiencias de aprendizaje efectivas en herramientas como Articulate 360."}
                        buttons={btns_DIS_INS}
                        img={"di.png"}
                        altText={"Diseño-Instruccional"}
                    />
                    <BloqueIcoTxt                     
                        ancla={"Vyond"}
                        subtitle={"Curso Vyond Essentials"}
                        info={"Te enseñamos a utilizar el software de animación en línea de Vyond. Permite que tu empresa pueda crear videos animados profesionales para todos los puestos de trabajo de tu industria."}
                        buttons={btns_VYO}
                        img={"vyond.png"}
                        altText={"Vyond"}
                    />
                    <BloqueTxtIco 
                        ancla={"Moodle"}
                        subtitle={"Curso Moodle"}
                        info={(
                            <>
                                Aprende a generar de forma sencilla aulas virtuales, cursos en línea, capacitaciones y clases utilizando la plataforma con la comunidad más grande del e-learning.
                                <Link to={ROUTES.CONTACTO}> Consúltanos para más información</Link>.
                            </>                        
                        )}
                        buttons={btns_MOO}
                        img={"moodle.png"}
                        altText={"Moodle"}
                    />
                    <BloqueIcoTxt                     
                        ancla={"Totara"}
                        subtitle={"Curso Totara"}
                        info={"Capacítate con expertos en Totara LXP y da el paso gigante en tu competencia de uso de Totara LXP. Te compartimos los conocimientos, habilidades reunidas a través de años de experiencia de nuestros consultores."}
                        buttons={btns_TOT}
                        img={"totara.png"}
                        altText={"Totara"}
                    />
                </div>

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
                    titleB2={"ARTICULATE 360"}                
                    img4B2={"360.png"}
                    altimg4B2={"Articulate 360"}
                    linkB2={ROUTES.HERRAMIENTAS_AUTORIA}
                    titleB3={(<>DESARROLLO DE <br /> CURSOS A LA MEDIDA</>)}                
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4={(<>CURSOS DE <br /> CATÁLOGO</>)}                
                    linkB4={ROUTES.CURSOS_CATALOGO}
                />  
            </div>                 
        </>
    )
};