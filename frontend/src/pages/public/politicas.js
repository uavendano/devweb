import { useEffect } from 'react';
import '../../css/pages/politicas.css';

export default function Politicas() {
    useEffect(() => {          
        document.body.id = 'politicas-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []); // El efecto se ejecuta solo una vez al montar el componente

    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <h1 className="text-white fs-4 ff-bold fs-subtitle">Política de inscripción</h1>
                    <ol className="text-white ms-3 ff-normal">
                        <li>La fecha límite de inscripción será de 24 horas antes del inicio del curso.</li>
                        <li>TAEC se reserva el derecho de cancelar cualquier curso que no cubra el número mínimo de inscripciones. El curso será reagendado para la siguiente fecha publicada.</li>
                    </ol>
                    <h1 className="text-white fs-4 ff-bold fs-subtitle">Políticas de cancelación y/o reprogramación de cursos abiertos</h1>
                    <ol className="text-white ms-3 ff-normal">
                        <li>TAEC podría verse obligado a dar aviso de cancelación, o suspensión de cursos cuando:</li>
                        <ul>
                            <li>No se logró el mínimo de 2 participantes para abrir el curso.</li>
                            <li>El facilitador o TAEC, por causas de fuerza mayor no puedan impartirlo*</li>
                        </ul>    
                        <span>
                            *Se consideran causas de fuerza mayor alguna emergencia de salud o suspensión de actividades por eventos como sismos, 
                            fallas técnicas imputables al proveedor en el suministro de energía eléctrica e internet, entre otras de índole similar.
                        </span>  
                        <li>Taec a través de las cuentas de correo registradas en la inscripción notificará el aviso de cancelación o reprogramación con una semana de anticipación.</li>  
                        <li>En caso de reprogramación, la notificación se hará llegar al participante indicando la nueva fecha y horario establecidos para la sesión, clase o curso no impartido.</li>
                    </ol>
                    <h1 className="text-white fs-4 ff-bold fs-subtitle">Políticas de reembolso por cancelación</h1>
                    <p className="mt-3 text-white ff-normal text-justify">Ante la cancelación de algún curso, TAEC, a través de las áreas correspondientes, procederá a dar trámite a las solicitudes de reembolso tomando en cuenta las siguientes consideraciones:</p>
                    <ol type="a" className="text-white ms-3 ff-normal">
                        <li>De acuerdo al aviso de cancelación del curso, el participante deberá enviar una solicitud de reembolso durante los siguientes 5 días hábiles.</li>
                        <li>El monto pagado por el curso se podrá reembolsar a la tarjeta con la que se realizó el pago.</li>
                    </ol>
                    <p className="mt-3 text-white ff-normal text-justify">Para solicitar reembolso o aplicación del monto pagado por un curso cancelado, el participante deberá enviar correo electrónico a la cuenta training@taec.com.mx adjuntando la imagen del comprobante de pago del curso.</p>
                </div>
            </div>
        </>
    );
}