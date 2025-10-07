import IconsMenu from '../../components/navbar/iconsMenu.js';
import ROUTES from '../../routes/routes.js';
import '../../css/pages/examenes.css';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';

export default function Examenes() {
    //Enlaces y txt para el componente IconsMenu
    const enlaces = [ROUTES.SARAS,ROUTES.EVALUACIONES];
    const name_prod = [null,<>Diseño de<br />Evaluaciones</>];

    return (
        <>
            <IconsMenu 
                id_ico={'EXA'}                
                title={'Plataformas de<br /> alta seguridad'} 
                iconos={2}
                urls={enlaces}
                name={name_prod}
            />
            <div className="mt-5">
                <BloqueTitleIcoTxt
                    ancla=""
                    title="Sistema anti-fraude para exámenes e-learning personalizados en línea, con analítica integrada"
                    img="saras.png"
                    alt="Saras"
                    txt="Solución segura y escalable para exámenes personalizados a distancia. Con analítica integrada que se adapta a tus necesidades de gestión facilitando la integración y otorgando soporte simultáneo a múltiples tipos de evaluaciones."
                />
                <BloqueTitleIcoTxt
                    ancla=""
                    title="Diseño de evaluaciones"
                    img="de.png"
                    alt="Diseño de evaluaciones"
                    txt=""
                />

                <HrTitle t1="Otros Servicios" />

                <BloqueCentralTipoB
                    subtitleB1={""}
                    titleB1={(<>SERVICIOS DE<br /> TI</>)}
                    img1B1={"ti.png"}
                    altimg1B1={"Servicios de TI"}
                    linkB1={ROUTES.SERVICIOS_TI}
                    titleB2={(<>DESARROLLO DE CURSOS<br /> A LA MEDIDA</>)}
                    img2B2={"d-cursos.png"}
                    altimg2B2={"Desarrollo de cursos"}
                    linkB2={ROUTES.DESARROLLO_CURSOS}
                    titleB3={(<>ARTICULATE<br /> 360</>)}
                    linkB3={ROUTES.ARTICULATE_360}
                    titleB4="VYOND"
                    linkB4={ROUTES.VYOND}
                />
            </div>
        </>
    );
}