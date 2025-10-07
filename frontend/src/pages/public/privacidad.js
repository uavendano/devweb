import { useEffect } from 'react';
import '../../css/pages/privacidad.css';
import { Link } from 'react-router-dom';
import ROUTESPDF from '../../routes/routesPDF.js';

export default function Privacidad() {
    useEffect(() => {          
        document.body.id = 'privacidad-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <h1 className="text-white text-center fs-4 ff-bold fs-subtitle">Política de Privacidad de Tecnología Avanzada para la Educación y la Capacitación S.A. de C.V.</h1>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Introducción</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        En Tecnología Avanzada para la Educación y la Capacitación S.A. de C.V. (en adelante “TAEC” o el “Responsable”) con domicilio 
                        en Av. Amores 28, Piso 7, Col. del Valle, Delegación Benito Juárez, C.P. 03100, Ciudad de México, respetamos la privacidad de 
                        los datos personales de nuestros clientes, empleados, directivos y proveedores (en adelante, los “Titulares” o el “Titular”), 
                        de conformidad con lo establecido por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares 
                        (en adelante “Ley de Datos Personales”) publicada en el Diario Oficial de la Federación (México) el 5 de julio de 2010 y su Reglamento. 
                        En TAEC valoramos la confianza que los Titulares han depositado en nosotros. Nos comprometemos a proteger su privacidad. 
                        Esta política de privacidad (en adelante la "Política de Privacidad") describe nuestro compromiso respecto a la protección de la 
                        privacidad de los datos personales recabados, almacenados y tratados por TAEC y debe respetarse y cumplirse por todos y cada uno de 
                        los empleados y directivos de la empresa, por terceros y encargados definidos como tales en la Ley de Datos Personales y su Reglamento, 
                        y cualquier contratante o contratista de TAEC. Consecuentemente, en caso de entablar alguna relación jurídica, comercial o laboral, 
                        es recomendable compartir a esa persona, física o moral, la presente Política de Privacidad, sin perjuicio de que los terceros, 
                        encargados, contratantes o contratistas sean directamente responsables de adoptar sus propias medidas de seguridad y deban estar 
                        en estricto cumplimiento de la Ley. La presente Política de Privacidad es aplicable únicamente a TAEC. <br className="d-none d-xl-block" />
                        Solamente recolectamos información que estimamos razonablemente necesaria para servir con los intereses de nuestro giro y de tal 
                        forma que TAEC esté en condiciones de cumplir con sus obligaciones conforme a la Ley y conforme a los contratos que tiene celebrados con terceros. <br className="d-none d-xl-block" />
                        Para el desarrollo de su objeto social, TAEC recopila distinta información personal. Para asegurar su tratamiento, debe tomarse en cuenta 
                        y cumplirse el contenido de esta Política de Privacidad misma que trata, entre otros, los siguientes temas:
                    </p>
                    <ul className="text-white ms-3 ff-normal">
                        <li>La información personal que TAEC recopila.</li>
                        <li>Cómo se utiliza la información personal de los Titulares.</li>
                        <li>Con quién puede ser compartida la información personal de los Titulares y cómo proteger los derechos que la Ley prevé.</li>
                        <li>Qué medidas de seguridad implementa TAEC para proteger la pérdida, el uso incorrecto o la alteración de la información personal de los Titulares, incluyendo la información financiera.</li>
                        <li>Cómo pueden los Titulares ejercer sus Derechos ARCO.</li>
                        <li>Opciones que tienen los Titulares en lo que respecta a la recopilación, el uso y la distribución de su información personal, incluyendo su disposición a optar por recibir información promocional por correo electrónico.</li>
                    </ul>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Es importante tomar en cuenta que la presente Política de Privacidad sólo se refiere a las prácticas de privacidad de TAEC en lo que respecta 
                        a la información que como empresa recopila para la prestación de sus servicios.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección I. Datos Personales recabados por TAEC</h2>
                    <p className="mt-3 text-white ff-normal text-justify">TAEC recopila la información personal de los Titulares por distintas vías. Entre ellas pueden mencionarse:</p>
                    <ol className="text-white ms-3 ff-normal">
                        <li>De manera personal: TAEC podrá obtener y tratar la información personal que el Titular proporcione de manera personal a través del personal de TAEC.</li>
                        <li>Directamente del Titular: TAEC también obtendrá y tratará la información personal que el Titular directamente proporcione en los eventos organizados por TAEC, los contratos de prestación de servicios, o bien, a través de medios electrónicos, ópticos, sonoros, visuales, o a través de cualquier otra tecnología, incluyendo aquellos que el Titular proporcione a través de nuestras cuentas en redes sociales o los que se soliciten y obtengan por medio de nuestra página web.</li>
                    </ol>
                    <p className="mt-3 text-white ff-normal text-justify">La información que recopilamos es de dos tipos: (1) información que identifica al Titular como un individuo específico tal como su nombre, su fecha de nacimiento, su número de teléfono, su dirección física, su dirección de correo electrónico, su teléfono, entre otros e (2) información que utilizamos con fines estadísticos y comerciales.</p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Uso de Cookies al visitar la página web de TAEC</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Cada vez que una persona visita nuestra página web, recopilamos información automáticamente sobre su computadora mediante una "cookie". 
                        Se entiende por “cookie” consiste en datos de navegación que se envían al buscador del Titular de un servidor web y son almacenados en 
                        su disco duro para podernos comunicar de una manera más eficiente. El Titular cuenta con la opción de no recibir cookies si configura 
                        las opciones del navegador para rechazar o aceptar cookies; los anterior, si es preguntado por el Titular a personal de nuestra empresa, 
                        el personal debe hacérselo saber. TAEC no utiliza cookies para almacenar contraseñas o información de claves de acceso. Las cookies 
                        no nos muestran la identidad del Titular salvo que dicho Titular hubiese elegido proporcionarla. <br className="d-none d-xl-block" />
                        Por lo general utilizamos cookies para:
                    </p>
                    <ul className="text-white ms-3 ff-normal">
                        <li>Calcular el tamaño de nuestra audiencia. A cada navegador que tiene acceso al sitio se le designa una cookie única que luego se utiliza para determinar el alcance del uso reiterado, el uso de usuarios registrados y de usuarios no registrados, y para ayudar a dirigir la publicidad según sus intereses y conductas.</li>
                        <li>Medir y seguir ciertos patrones de tráfico, incluyendo información como las áreas del sitio que el Titular ha visitado y sus hábitos de visitas en conjunto. Podemos utilizar esta información para personalizar mejor el contenido, los anuncios, y promociones que nuestros clientes y otros usuarios verán en el Sitio.</li>
                        <li>Para conveniencia de nuestros usuarios para que, al re-consultar el Sitio, esa persona esté identificado. Ello permite reconocer al usuario cuando visita un Sitio, si es que inicia sesión. </li>
                    </ul>
                    <p className="mt-3 text-white ff-normal text-justify">Es posible que TAEC utilice los servicios de terceros como servidor y servicios de hospedaje o bien hacer uso de medios propios. En caso de apoyarse de servicios prestados por terceros, TAEC realizará las acciones necesarias para exigir a ese tercero el cumplimiento de la Ley de Datos Personales y la adopción de medidas de seguridad.</p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección II. Consentimiento</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        En caso de no estar de acuerdo con la presente Política de Privacidad, los Titulares deberán abstenerse de proporcionar información personal 
                        y de ingresar, utilizar, navegar y/o utilizar las funciones y servicios de la página web de TAEC. Se entenderá el acceso y uso de la página 
                        web de TAEC (y la no oposición expresa a esta Política de Privacidad) como manifestación del consentimiento tácito y aceptación de esta Política de Privacidad por parte de los Titulares. <br className="d-none d-xl-block" />
                        Asimismo, TAEC se compromete a solicitar su consentimiento expreso y por escrito siempre que deba solicitarle y obtener datos personales 
                        sensibles, asegurando en todo momento el que éstos sean tratados bajo las más estrictas medidas de seguridad que garanticen su confidencialidad. 
                        En cumplimiento de lo establecido por el artículo 8 de la Ley de Datos Personales, requeriremos del consentimiento expreso de los 
                        Titulares para el tratamiento de datos personales financieros o patrimoniales, mismo que se podrá proporcionar de forma electrónica 
                        mediante la manifestación del consentimiento expreso con el marcado de la casilla (check de box) u opt-in que al efecto incluya TAEC 
                        en su sitio web, previo al tratamiento de datos financieros o patrimoniales.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección III. Finalidades del uso de su información</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        TAEC no recolecta información personalmente identificable de los Titulares salvo que nos sea proporcionada de manera voluntaria y con pleno conocimiento. Es importante que cualquier persona que labore en TAEC, terceros, encargados y subcontratistas conozcan las finalidades que TAEC informa a los Titulares.
                        Utilizamos la información que el Titular nos proporciona o que de otra manera recopilamos para cumplir con los siguientes fines:
                    </p>
                    <ul className="text-white ms-3 ff-normal">
                        <li>Contratar personal y proporcionarle las prestaciones laborales conforme a la legislación aplicable.</li>
                        <li>Integrar bases de datos físicas y electrónicas de los sustentantes, clientes que sea personas físicas y empleados, así como mantenerlas actualizadas a fin de proporcionar los servicios correspondientes.</li>
                        <li>Notificar a nuestros empleados en caso de urgencia médica o situaciones de emergencia que sucedan durante la prestación de los servicios, dentro o fuera de las instalaciones del Responsable.</li>
                        <li>Transferir datos personales a las compañías aseguradoras con las que actualmente laboramos, únicamente en caso de urgencia médica o situaciones de emergencia.</li>
                        <li>Transferir fotografías de los sustentates a nuestros clientes y a los prestadores de servicios informáticos.</li>
                        <li>Elaborar facturas y comprobantes fiscales.</li>
                        <li>Realizar el registro de quejas para atenderlas de manera pronta, dar a conocer actividades que desempeñaremos para solucionar el retraso o incumplimiento que dio motivo a la queja, para fines estadísticos, elaboración de informes. </li>
                        <li>Registrar y almacenar la información personal en los expedientes, sistemas, manuales y/o archivos electrónicos, o cualquier otro dispositivo que determine TAEC, sus filiales y subsidiarias para integrar el inventario de recursos humanos.</li>
                        <li>Llevar a cabo actividades de reclutamiento y selección de personal, armado de expedientes, realizar estudios socio-económicos, psicométricos y análisis antidoping.</li>
                        <li>Elaborar estadísticas del inventario de recursos humanos y crear perfiles por experiencia laboral, formación académica, desarrollo y crecimiento laboral, competencias y áreas de adscripción, que permitan el análisis de la información y su utilización en reuniones de trabajo de TAEC, sus filiales y subsidiarias. </li>
                        <li>Generar constancias de participación a los empleados por su atención y participación a cursos y capacitaciones que imparta TAEC.</li>
                        <li>Administrar el personal de recursos humanos activo para la contratación, transferencia interna, nómina, promoción, participación en eventos y proyectos educativos y de salud.</li>
                        <li>Atender los requerimientos de información de las instituciones de seguros, salud y protección civil, en caso de reclamo de primas aseguradas, urgencia médica o situaciones de emergencia dentro o fuera de las instalaciones de TAEC, sus filiales y subsidiarias.</li>
                        <li>Atender los requerimientos de instituciones gubernamentales tales como: el Instituto Mexicano del Seguro Social (“IMSS”), el Instituto Fondo Nacional a la Vivienda de los Trabajadores (“INFONAVIT”), FONACOT y la Secretaría del Trabajo.</li>
                        <li>Atender los requerimientos de información de las empresas o entidades certificadoras de los procesos de TAEC, sus filiales y subsidiarias para determinar las competencias del personal.</li>
                        <li>Brindar referencias laborales a instituciones públicas y privadas.</li>
                        <li>Transferir datos personales a las empresas aseguradoras con las cuales TAEC tiene relación contractual para atender posibles contingencias de salud, enfermedades y/o accidentes de sus empleados.</li>
                        <li>Transferir datos personales a las instituciones bancarias con las cuales TAEC tenga firmados contratos para apertura de cuentas bancarias, emisión de tarjetas bancarias y corporativas y depósito de nómina de su personal de recursos humanos activo.</li>
                        <li>Proporcionar datos personales en juntas y bolsas de trabajo para intercambiar carteras de puestos vacantes.</li>
                        <li>Cumplir con las políticas o directrices internas de TAEC, incluyendo aquellas cuyo objeto sea garantizar la seguridad y salud de los empleados.</li>
                        <li>Cumplir con los lineamientos de las autoridades sanitarias en el entorno laboral derivados del estado de emergencia sanitaria decretado por el COVID-19.</li>
                    </ul>
                    <p className="mt-3 text-white ff-normal text-justify">Además, TAEC podrá utilizar sus datos personales para finalidades secundarias distintas a las que dieron origen a la relación jurídica entre el Titular y TAEC, como es el caso del envío de publicidad y promociones de nuestros servicios especiales.</p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección IV. Casos en los que TAEC transfiere o comparte información personal de los Titulares</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Nuestra Política de Privacidad permite la transferencia de datos con el consentimiento de los Titulares, por ejemplo para 
                        transferir datos de posibles candidatos a determinados puestos vacantes a empresas que efectúan estudios socioeconómicos o 
                        análisis antidopping o tratándose de empleados, a empresas administradoras de personal o a instituciones bancarias para el 
                        pago de nómina y emisión de tarjetas bancarias de débito o crédito. <br className="d-none d-xl-block" />
                        Es posible la transferencia de datos sin el consentimiento de los Titulares únicamente bajo los supuestos contenidos en el 
                        artículo 37 de la Ley de Datos Personales.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección V. Reserva de Derechos</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Nos reservamos el derecho de revelar información personal cuando tengamos razón para creer que revelar esta información es 
                        necesario para identificar, contactar o iniciar acciones legales en contra de alguien que pueda estar violando esta Política, 
                        o que pueda dañar o interferir con (ya sea de manera intencional o no intencional) los derechos o la propiedad de TAEC, 
                        otros usuarios de TAEC, o cualquier otra persona que pueda resultar dañada como resultado de dichas actividades. Podemos 
                        revelar o tener acceso a cierta información con fines administrativos u otros propósitos que consideremos necesarios para 
                        mantener o mejorar nuestros servicios o la operación de la empresa, con el objetivo de imponer el cumplimiento de la ley, 
                        o cuando creamos de buena fe que la ley así lo requiere. Asimismo, si media decisión u orden judicial solicitando a TAEC 
                        la divulgación de determinada información, la empresa se verá obligada a cumplir con dicha orden.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección VI. Medidas de seguridad que TAEC toma para proteger la pérdida, el uso incorrecto o la alteración de los datos personales de los Titulares</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        La información personal proporcionada por los Titulares estará protegida mediante distintas medidas de seguridad. 
                        Según su clase, se utilizan contraseñas, codificadores, programas de cómputo, archiveros bajo llave, registros de 
                        acceso a computadores, cámaras de seguridad y únicamente personal altamente capacitado por TAEC puede tener acceso a ella. 
                        TAEC cumple con lo dispuesto en la Legislación y Reglamento de la materia dentro de las posibilidades y esfuerzos razonables.
                        Reconocemos que no existe un nivel de seguridad totalmente garantizado, sin embargo declaramos aplicar estándares 
                        internacionales de protección, de acuerdo a herramientas disponibles en la industria.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección VII. Nuestra política de derechos ARCO</h2>
                    <p className="mt-3 text-white ff-normal text-justify">A fin de dar trámite a las solicitudes de derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) presentadas por los Titulares a TAEC, se ha elaborado un instructivo que detalla los plazos y pasos a seguir por el Titular, así como diseñado un formato que debe ponerse a disposición de cualquier usuario.<br /> El procedimiento es el siguiente:</p>
                    <ol className="text-white ms-3 ff-normal">
                        <li>Descargar y llenar el <Link to={ROUTESPDF.FOR_ARCO} target="_blank">formato de solicitud</Link> de derechos ARCO de la página de internet de TAEC. Dicha solicitud deberá contener la siguiente información y documentos:</li>
                            <ul>
                                <li>Nombre, domicilio y correo electrónico.</li>
                                <li>Una copia de los documentos que acrediten la identidad del Titular (por ejemplo, copia de credencial de elector, pasaporte o cualquier otra identificación oficial) o, en su caso, la representación legal.</li>
                                <li>Una descripción clara y precisa de los datos personales respecto de los cuales se busca ejercer alguno de los Derechos ARCO.</li>
                                <li>Cualquier documento o información que facilite la localización de los datos personales del Titular.</li>
                                <li>En caso de solicitar la rectificación de los datos personales, deberá el Titular indicar también, las modificaciones a realizarse y aportar la documentación que sustente dicha petición.</li>
                            </ul>
                        <li>Entregar personalmente o enviar dicho formato de solicitud de derechos ARCO) a nuestro Oficial de Protección de Datos Personales, Víctor Enrique Sánchez Bures al correo electrónico privacidad@taec.com.mx o en la dirección: Av. Amores 28, Piso 7, Col. del Valle, Delegación Benito Juárez, C.P. 03100, Ciudad de México. En caso de que el formato sea presentado por persona distinta al titular de los datos personales se le solicita proporcionar una carta poder debidamente firmada por el apoderado, poderdante y dos testigos, copias de las identificaciones o poder notarial y copia de la identificación del representante legal.</li>
                        <li>Una vez recibida la solicitud por TAEC, se entregará un acuse de recibo sellado y nos comunicaremos con el Titular en un plazo máximo de 20 (veinte) días, contados desde la fecha en que se recibió la solicitud para señalar la determinación adoptada respecto de dicha solicitud, y si resulta procedente, la misma se hará efectiva dentro de los 15 (quince) días siguientes a la fecha en que se comunica la respuesta.</li>
                        <li>Los plazos antes referidos podrán ser ampliados una sola vez por un período igual, siempre y cuando así lo justifiquen las circunstancias del caso.</li>
                        <li>TAEC podrá negar el acceso, la rectificación, la cancelación o la oposición al tratamiento de sus datos personales cuando:</li>
                            <ol type="a">
                                <li>el solicitante no sea el Titular o el representante no esté debidamente acreditado para ello;</li>
                                <li>en la base de datos de TAEC, no se encuentren los datos personales del solicitante;</li>
                                <li>Cuando se lesionen derechos de un tercero;</li>
                                <li>Cuando exista impedimento legal, o la resolución de una autoridad competente que restrinja el acceso a los datos personales o no permita la rectificación, cancelación u oposición de los mismos y</li>
                                <li>Cuando la rectificación, cancelación u oposición haya sido previamente realizada.</li>
                            </ol>
                    </ol>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección VIII. Revocación del consentimiento</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Para revocar el consentimiento para el tratamiento de los datos personales, el Titular deberá presentar una solicitud al 
                        Oficial de Protección de Datos Personales, especificando nombre, domicilio y correo electrónico, así como una descripción 
                        detallada de la petición, adjuntando la documentación que acredite su identidad como Titular de los datos personales o, 
                        en su caso, la representación legal del Titular. Sin embargo, no en todos los casos se podrá atender dicha solicitud y 
                        concluir el tratamiento de los datos personales de forma inmediata, ya que es posible que por alguna obligación legal 
                        TAEC requiera seguir tratando los datos personales del Titular. Se deberá tomar en cuenta también que la revocación del 
                        consentimiento podrá tener como consecuencia la imposibilidad de continuar con la prestación de los servicios que ofrece TAEC. 
                        El Oficial de Protección de Datos Personales acusará recibo de la solicitud, y llevará a cabo un análisis de la misma conforme 
                        a la Ley de Datos, su Reglamento y las políticas internas de privacidad de TAEC, dando respuesta a más tardar en los 20 días 
                        hábiles posteriores al día en que la misma haya sido recibida, pudiendo emitir dicha respuesta en sentido afirmativo o negativo 
                        y siendo debidamente fundamentada. La respuesta será enviada al correo electrónico proporcionado al momento de hacer la solicitud respectiva.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección IX. Limitación al uso o divulgación de los datos personales</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Se podrá limitar el uso o divulgación de los datos personales del Titular para evitar que sean utilizados o divulgados 
                        para finalidades distintas a las que dieron origen o son necesarias para la relación jurídica con TAEC. Si el Titular 
                        desea limitar el uso o divulgación de sus datos personales, deberá presentar una solicitud al Oficial de Protección de 
                        Datos Personales, a efecto de que se inscriba en un listado de exclusión que formará TAEC.
                    </p>
                    <h2 className="mt-3 text-white fs-5 ff-bold fs-texto">Sección X. Modificaciones a la Política de Privacidad</h2>
                    <p className="mt-3 text-white ff-normal text-justify">
                        TAEC se reserva el derecho de modificar o actualizar la presente Política de Privacidad en cualquier momento, 
                        en el entendido que toda modificación a la misma se dará a conocer mediante una publicación generalizada a 
                        través de nuestra página web, en la sección “Política de Privacidad”. Se informará al Titular sobre nuestra 
                        nueva Política de Privacidad en los casos en los que: (i) requiramos de datos personales sensibles, patrimoniales 
                        o financieros no incluido en la presente Política que requieran de consentimiento; (ii) modifiquemos las finalidades 
                        en nuestra relación jurídica con el Titular, o se incorporen nuevas finalidades que requieran de consentimiento, o (iii) 
                        modifiquemos nuestra política de transferencias a terceros o incluyamos transferencias adicionales que requieran de consentimiento.
                    </p>
                    <span className="mt-3 text-white ff-normal text-small text-justify">Última actualización: 18 de noviembre de 2021</span>
                </div>
            </div>
        </>
    );
}