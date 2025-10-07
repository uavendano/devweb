import IconsMenu from '../../components/navbar/iconsMenu.js';
import ROUTES from '../../routes/routes.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentral from '../../components/bloques/bloqueCentral.js';
import BloqueTxtIco from '../../components/bloques/bloqueTxtIco.js';
import '../../css/pages/herramientasAutoria.css';

export default function HerramientasAutoria() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.ARTICULATE_360,ROUTES.VYOND];
    const name_prod = [null,null];

    const btns_INFO_ART360 = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.ARTICULATE_360,
            openInNewTab: false
        }       
    ];
    const btns_INFO_VYOND = [
        {
            text: "Más información",
            className: "fs-5 fs-texto ff-normal custom-color-blue",
            isLinkText: true,
            path: ROUTES.VYOND,
            openInNewTab: false
        }       
    ];
    return (
        <>
            <IconsMenu 
                id_ico={'HA'}                
                title={'Herramientas<br /> de autoria'} 
                iconos={2}
                urls={enlaces} 
                name={name_prod}
            />
            <div className="mt-5">
                <div className="container-fluid">
                    <div className="container">
                        <div className="col-md-12 m-auto text-center">                                                
                            <h2 className="custom-color fs-title ff-normal">Plataformas e-learning para crear<br className="d-none d-xl-block" /> contenido avanzado</h2>                  
                        </div>		
                    </div>
                </div>
                
                <div className="container-fluid bg-black mt-5 py-5" id="custom1">
                    <div className="col-md-12 col-lg-8 m-auto py-5">
                        <BloqueTxtIco 
                            ancla={""}
                            subtitle={"Articulate 360"}
                            info={"La mejor herramienta de autor y código cerrado. Crea cursos virtuales integrales en esta suite con las herramientas más completas en un sólo lugar. Interactivos y responsivos."}
                            buttons={btns_INFO_ART360}
                            img={"crear_un_curso_articulate.png"}
                            altText={"crear_un_curso_articulate"}
                        />
                    </div>	
                </div>
                <div className="container-fluid mt-5 py-0 py-md-5" id="custom2">
                    <div className="col-md-12 col-lg-8 m-auto py-5">
                        <BloqueTxtIco 
                            ancla={""}
                            subtitle={"Vyond"}
                            info={<>La plataforma integral y sencilla para la de creación de videos con IA.<br className="d-none d-xl-block" /> Vyond ofrece todo lo necesario para comunicar mejor, incluyendo Vyond Go, nuestro creador de videos instantáneos con IA, y Vyond Studio, nuestro editor de video con todas las funciones. Incluso puedes crear videos dondequiera que estés con Vyond Mobile.</>}
                            buttons={btns_INFO_VYOND}
                            img={"videos_animados_vyond.png"}
                            altText={"videos_animados_vyond"}
                        />
                    </div>	
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
                    titleB2={(<>DESARROLLO DE CURSOS <br /> A LA MEDIDA</>)}                
                    img4B2={"d-cursos.png"}
                    altimg4B2={"Desarrollo de cursos"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>CURSOS DE<br /> CATÁLOGO</>)}                
                    linkB3={ROUTES.CURSOS_CATALOGO}
                    titleB4={(<>CURSOS DE<br /> CAPACITACIÓN</>)}                
                    linkB4={ROUTES.CURSOS_CAPACITACION}
                />               
            </div>
        </>
    );
}