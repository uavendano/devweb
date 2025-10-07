import { useEffect } from 'react';
import '../../css/pages/evaluaciones.css';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import BloqueTitleIcoTxt from '../../components/bloques/bloqueTitleIcoTxt.js';
import HrTitle from '../../components/forPages/hrTitle.js';
import BloqueCentralTipoB from '../../components/bloques/bloqueCentralTipoB.js';
import ROUTES from '../../routes/routes.js';

export default function Evaluaciones() {
    useEffect(() => {          
        document.body.id = 'evaluaciones-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.EXAMENES}
                optionBackTxt="Diseño de Evaluaciones"
                opciones={2}
                txt={["Descripción","Soporte"]}
                urls={['',ROUTES.SOPORTE]}
            />
            
            <BloqueTitleIcoTxt
                ancla=""
                title="Tus evaluaciones diseñadas a la medida"
                img="evaluaciones.png"
                alt="Evaluaciones"
                txt={""}
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
        </>
    );
}