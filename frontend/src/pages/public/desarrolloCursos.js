import { useEffect } from 'react';
import IconsMenu from '../../components/navbar/iconsMenu.js';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import ROUTES from '../../routes/routes.js';
import { Link } from 'react-router-dom';
import "../../css/pages/desarrolloCursos.css";
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';

export default function DesarrolloCursos() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.MICROLEARNING,ROUTES.BLENDED_LEARNIGN,ROUTES.MOOCS,ROUTES.ADAPTIVE_LEARNING];
    const name_prod = ["Microlearning","Blended learning","Moocs","Adaptive Learning"];

    useEffect(() => {          
        document.body.id = 'dcursos-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente 

    return (
        <>
            {/* Componente menu iconos*/}    
            <IconsMenu 
                id_ico={'DCUR'}                
                title={'Desarrollo<br /> de cursos'} 
                iconos={4}
                urls={enlaces} 
                name={name_prod}
            />
            <div className='mt-5'>
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h1 className="text-white fs-title ff-normal">Creamos el curso que deseas. Apóyate con profesionales para crear<br className="d-none d-xl-block" /> tus proyectos</h1>
                        </div>		
                    </div>
                </div>
                <BloqueTitleIcoTxt
                    ancla=""
                    title="E - learning"
                    img="elearning.png"
                    alt="elearning"
                    txt={<>Diseño de cursos interactivos, simuladores, animación 2D, motion graphics,<br className="d-none d-xl-block" /> ludificación y más.</>}
                />
                <div className="container mt-6 ratio ratio-21x9">
                    <iframe title="E-learning" src="https://taecweb.s3.amazonaws.com/taec.com.mx/Desarrollo+de+cursos+a+la+medida/cursos/E-LEARNING/story.html" />		
                </div>
                <BloqueTitleIcoTxt
                    ancla="Microlearning"
                    title="Microlearning"
                    img="microlearning.png"
                    alt="Microlearning"
                    txt={<>Creación de estrategias mobile, 100% responsivas, rapid learning, infografía<br className="d-none d-xl-block" /> interactiva, manuales digitales y más.</>}
                />
                <div className="container mt-6 ratio ratio-21x9">
                    <iframe title="E-learning" src="https://taecweb.s3.amazonaws.com/taec.com.mx/Desarrollo+de+cursos+a+la+medida/cursos/MICROLEARNING/index.html" />		
                </div>
                <BloqueTitleIcoTxt
                    ancla="Blended-Learning"
                    title="Blended learning"
                    img="blended.png"
                    alt="Blended learning"
                    txt="Elaboración de complementos, manuales, e-actividades, infografías, carteles y más."
                />
                <BloqueTitleIcoTxt
                    ancla="Moocs"
                    title="MOOCS"
                    img="virtual.png"
                    alt="Virtual Learning"
                    txt={<>Construcción de cursos masivos (Massive Online Open Courses), horizontales-colaborativos<br className="d-none d-xl-block" /> o verticales-tutorizados.</>}
                />
                <BloqueTitleIcoTxt
                    ancla="Adaptive-Learning"
                    title="Adaptive Learning"
                    img="adaptative.png"
                    alt="Adaptive Learning"
                    txt="Generación de estrategias para la capacitación y educación mediante rutas de aprendizaje individualizadas."
                />
                <div className="container text-center mt-6">
                    <Link to={ROUTES.CONTACTO} className="my-5 fs-5 btn-blue fs-texto ff-normal" >Contáctanos</Link>
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
                    titleB2={(<>ARTICULATE <br /> 360</>)}                
                    img4B2={"360.png"}
                    altimg4B2={"Articulate 360"}
                    linkB2={ROUTES.HERRAMIENTAS_AUTORIA}
                    titleB3={(<>CURSOS DE <br /> CATÁLOGO</>)}                
                    linkB3={ROUTES.CURSOS_CATALOGO}
                    titleB4={(<>CURSOS DE <br /> CAPACITACIÓN</>)}                
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />
            </div>
        </>
    );
}