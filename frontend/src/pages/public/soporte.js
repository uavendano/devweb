import SliderProductos from "../../components/forPages/sliderProductos";
import Formulario from "../../components/forPages/formulario";
import BloqueRedesSociales from "../../components/bloques/bloqueRedesSociales";
import BloqueUbicacion from "../../components/bloques/bloqueUbicacion.js";
import Bloques from "../../components/bloques/bloques.js";
import HrTitle from '../../components/forPages/hrTitle.js';
import ROUTES from '../../routes/routes.js';

export default function Soporte() {
    return (
        <>
            <div>
                <SliderProductos />
                
                <Formulario />

                <BloqueRedesSociales 
                    title={"Soporte Técnico"}
                    img1={"tel"}
                    link1={""}
                    txt1={<>México: +52 (55) 68223300<br />Colombia: +57 601 508 5750</>}
                    img2={"email"}
                    link2={""}
                    txt2={<>soporte@taec.com.mx</>}
                    img3={"ubicacion"}
                    link3={""}
                    txt3={<>Amores 28, Piso 7, Colonia del Valle<br />03100 Ciudad de México, CDMX</>}
                />

                <BloqueRedesSociales 
                    title={<>ENCUÉNTRANOS EN<br />NUESTRAS REDES</>}
                    img1={"facebook"}
                    link1={ROUTES.FACEBOOK}
                    txt1={""}
                    img2={"linkedin"}
                    link2={ROUTES.LINKEDIN}
                    txt2={""}
                    img3={"whatsapp"}
                    link3={ROUTES.WHATSAPP}
                    txt3={""}
                />

                <BloqueUbicacion />

                <HrTitle t1="Otros Servicios" />

                <Bloques 
                    titleB1={"PLATAFORMAS"}
                    linkB1={ROUTES.PLATAFORMAS_ELEARNING}
                    titleB2={<>COMPLEMENTOS<br />DE APRENDIZAJE</>}
                    linkB2={ROUTES.EXTENCIONES_APRENDIZAJE}
                    titleB3={<>DESARROLLO DE<br />CURSOS A LA MEDIDA</>}
                    linkB3={ROUTES.DESARROLLO_CURSOS}
                    titleB4={"ARTICULATE"}
                    linkB4={ROUTES.HERRAMIENTAS_AUTORIA}
                />

            </div>
        </>
    );
}