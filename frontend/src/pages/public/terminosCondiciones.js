import { useEffect } from 'react';
import '../../css/pages/terminosCondiciones.css';

export default function TerminosCondiciones() {
    useEffect(() => {          
        document.body.id = 'terminos-condiciones-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente
    
    return (
        <>
            <div className="mt-5">
                <div class="container">
                    <h1 className="text-white text-center ff-bold fs-subtitle">Términos y Condiciones de Tecnología Avanzada para la Educación y la Capacitación S.A. de C.V.</h1>
                    <p className="mt-3 text-white ff-normal text-justify">
                        Sea usted bienvenido al sitio web de Tecnología Avanzada para la educación y la capacitación S.A. de C.V. 
                        La información facilitada en este sitio tiene únicamente fines informativos y educativos. Rogamos que lea y 
                        examine detenidamente estas Condiciones de Uso antes de utilizar o acceder a este sitio web. Al utilizar o 
                        acceder a este sitio web, usted reconoce que ha leído, entendido y aceptado el Contrato de Condiciones de Uso. 
                        Si no está de acuerdo con las Condiciones de Uso, no puede usar ni acceder a este sitio. Además, si realiza actividades 
                        de comercio electrónico, se compromete a respetar los términos y condiciones estipulados por TAEC. La información 
                        facilitada en este sitio tiene únicamente fines informativos y educativos. El acceso y uso de la información contenida 
                        en este sitio web están sujetos a este Contrato de Condiciones de Uso. Al usar y acceder a este sitio web, acepta, 
                        sin limitaciones ni salvedades, el presente Contrato de Condiciones de Uso. Usted acepta que el acceso y uso de este sitio Web y del 
                        contenido del mismo se efectúa a su propio riesgo. TAEC excluye todas las garantías, expresas o implícitas, incluidas las garantías 
                        de comerciabilidad y uso para un fin determinado. Ni TAEC ni ninguna entidad implicada en la creación, producción o suministro de 
                        este sitio web responderá por daños, incluidos, a título meramente enunciativo y no limitativo, daños directos, accesorios, 
                        consecuenciales, indirectos o sancionadores, derivados del acceso, del uso o de la imposibilidad de usar este sitio web, o de 
                        errores u omisiones en su contenido. Esta limitación incluye los daños a su equipo informático o los derivados de virus que 
                        infecten su equipo informático. Usted se compromete a indemnizar y resarcir a TAEC, sus directivos, administradores, empleados, 
                        gentes, proveedores y socios terceros frente a cualesquiera pérdidas, gastos, daños y costes, incluidos los honorarios razonables 
                        de abogados, derivados de cualquier vulneración por parte de usted de estas Condiciones de Uso. TAEC respeta la confidencialidad de 
                        los usuarios del sitio web. Consulte la política de privacidad de TAEC en la que se explican los derechos y responsabilidades de 
                        os usuarios en relación con la información facilitada a este sitio web. Este sitio web puede contener vínculos o referencias a 
                        otros sitios web mantenidos por terceros sobre los que TAEC carece de control. Dichos vínculos se incluyen únicamente para 
                        facilitar la consulta. Sin perjuicio de los términos y condiciones aplicables establecidos en nuestra política de privacidad, 
                        cualquier comunicación o material que nos envíe a través de Internet o que coloque en el sitio web por correo electrónico o de 
                        otro modo, como preguntas, comentarios, sugerencias o similares, se considera y se considerará no confidencial y TAEC no tendrá 
                        ninguna obligación de ningún tipo en relación con dicha información. TAEC podrá utilizar libremente cualesquiera ideas, conceptos 
                        o técnicas que se contengan en dicha comunicación para cualquier fin, incluido, a título meramente enunciativo y no limitativo, 
                        el de desarrollar, producir y comercializar productos. Todos los nombres de productos, figuren o no en mayúsculas o con el 
                        símbolo de marcas registradas, son propiedad de sus respectivos propietarios. La utilización o uso indebido de estas marcas 
                        o de otros materiales, salvo según lo permitido aquí, está expresamente prohibido y puede vulnerar las leyes de Propiedad 
                        Intelectual, de Marcas, la legislación sobre confidencialidad y publicidad, y las leyes y reglamentos de comunicaciones. 
                        El contenido de este sitio web no podrá ser reproducido con fines distintos de la consulta individual, reservándose todos 
                        los derechos o notificaciones exclusivas, y posteriormente no podrá ser reproducido de nuevo o distribuido de otro modo. 
                        Excepto según lo expresamente previsto antes, no podrá reproducir, exponer, descargar, distribuir, modificar, reproducir, 
                        publicar o retransmitir ninguna información, texto o documentos contenidos en este sitio Web o en una parte del mismo en 
                        ningún medio electrónico ni en copia impresa, ni podrá crear obras derivadas basadas en dichas imágenes, texto o documentos, 
                        sin el consentimiento expreso por escrito de TAEC. Nada de lo contenido en las presentes Condiciones de Uso se interpretará 
                        en el sentido de que concede, mediante implicación, consentimiento implícito o de otro modo, una licencia o derecho bajo una 
                        patente o marca de TAEC o de un tercero. El presente Contrato de Condiciones de Uso y su utilización del sitio web se regularán 
                        por las leyes mexicanas. Cualquier acción legal o procedimiento relativo a este sitio web se planteará exclusivamente ante un 
                        tribunal mexicano. Si una disposición del presente Contrato es declarada ilegal, nula o inexigible, se prescindirá de dicha 
                        disposición sin que ello afecte a la exigibilidad de las disposiciones restantes. TAEC se reserva el derecho de modificar o 
                        suprimir materiales de este sitio web en cualquier momento con arreglo a su criterio discrecional.
                    </p>
                </div>
            </div>
        </>
    );
}