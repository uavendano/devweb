import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ROUTES from '../../routes/routes.js';

export default function PageMetaManager() {
    const location = useLocation();

    const getTitleForPath = (path) => {
        switch (path) {
            case ROUTES.HOME: return 'Empresa de e-learning, articulate, plataforma, hosting | Taec';
            case ROUTES.CURSOS_CAPACITACION: return 'Cursos de capacitación';
            case ROUTES.ABOUT: return '¿Quiénes somos?';
            case ROUTES.CONTACTO: return 'Contacto Taec';
            case ROUTES.SOPORTE: return 'Soporte Técnico Taec';
            case ROUTES.SEVEN_MINUTES: return '7 Minutes';
            case ROUTES.CURSOS_CATALOGO: return 'Cursos de catálogo';
            case ROUTES.DESARROLLO_CURSOS: return 'Desarrollo de cursos';
            case ROUTES.HERRAMIENTAS_AUTORIA: return 'Herramientas de autoria';
            case ROUTES.PLATAFORMAS_ELEARNING: return 'Plataformas e-learning';
            case ROUTES.EXTENCIONES_APRENDIZAJE: return 'Extensiones de aprendizaje';
            case ROUTES.SERVICIOS_TI: return 'Servicios de TI';
            case ROUTES.EXAMENES: return 'Saras y diseño de evaluaciones de alta importancia';
            case ROUTES.ARTICULATE_360: return 'Articulate 360';
            case ROUTES.VYOND: return 'Vyond';
            case ROUTES.TOTARA: return 'Totara';
            case ROUTES.OTTOLEARN: return 'Ottolearn';
            case ROUTES.REACH_360: return 'Reach 360';
            case ROUTES.ONE_NEO: return 'One & Neo';
            case ROUTES.MOODLE: return 'Moodle';
            case ROUTES.LYS: return 'Lys';
            case ROUTES.MOTRAIN: return 'Motrain';
            case ROUTES.CLASS: return 'Class';
            case ROUTES.BBB: return 'BigBlueButton';
            case ROUTES.AUTOCERT: return 'Autocert';
            case ROUTES.ZOOLA: return 'Zoola';
            case ROUTES.SARAS: return 'Saras';
            case ROUTES.EVALUACIONES: return 'Diseño de Evaluaciones';
            case ROUTES.STORYLINE_360: return 'Storyline 360';
            case ROUTES.STUDIO_360: return 'Studio 360';
            case ROUTES.REPLAY_360: return 'Replay 360';
            case ROUTES.REVIEW_360: return 'Review 360';
            case ROUTES.ARTICULATE_TRAINING: return 'Articulate 360 Training';
            case ROUTES.CONTENT_LIBRARY: return 'Content Library 360';
            case ROUTES.RISE_360: return 'Rise 360';
            case ROUTES.PEEK_360: return 'Peek 360';
            case ROUTES.AI_ASSISTANT: return 'AI Assistant';
            case ROUTES.TERMINOS_CONDICIONES: return 'Términos y condiciones';
            case ROUTES.PRIVACIDAD: return 'Políticas de Privacidad';
            case ROUTES.POLITICAS: return 'Políticas';
            case ROUTES.CALENDARIO: return 'Calendario de cursos';
            default: return 'TAEC';
        }
    };

    const getMetaDescriptionForPath = (path) => {
        switch (path) {
            case ROUTES.HOME: return 'Expertos en e-learning. Brindamos e-learning software, plataforma e-learning, cursos e-learning en México y LATAM.';
            case ROUTES.CURSOS_CAPACITACION: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.ABOUT: return 'Expertos en e-learning. Brindamos e-learning software, plataforma e-learning, cursos e-learning en México y LATAM.';
            case ROUTES.CONTACTO: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.SOPORTE: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.SEVEN_MINUTES: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.CURSOS_CATALOGO: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.DESARROLLO_CURSOS: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.HERRAMIENTAS_AUTORIA: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.PLATAFORMAS_ELEARNING: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.EXTENCIONES_APRENDIZAJE: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.SERVICIOS_TI: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.EXAMENES: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.ARTICULATE_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.VYOND: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.TOTARA: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.OTTOLEARN: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.REACH_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.ONE_NEO: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.MOODLE: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.LYS: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.MOTRAIN: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.CLASS: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.BBB: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.AUTOCERT: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.ZOOLA: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.SARAS: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.EVALUACIONES: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.STORYLINE_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.STUDIO_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.REPLAY_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.REVIEW_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.ARTICULATE_TRAINING: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.CONTENT_LIBRARY: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.RISE_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.PEEK_360: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.AI_ASSISTANT: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            case ROUTES.TERMINOS_CONDICIONES: return 'Tecnología Avanzada para la Educación y la Capacitación S.A. de C.V.';
            case ROUTES.PRIVACIDAD: return 'Tecnología Avanzada para la Educación y la Capacitación S.A. de C.V.';
            case ROUTES.POLITICAS: return 'Tecnología Avanzada para la Educación y la Capacitación S.A. de C.V.';
            case ROUTES.CALENDARIO: return 'Taec es distribuidor autorizado y exclusivo de Articulate en México y LATAM. Obtén Articulate 360, lo mejor en e-learning software junto con servicio de capacitación y soporte.';
            default: return 'TAEC - Web site de e-learning, articulate, plataformas LMS y cursos en México y LATAM';
        }
    };

    useEffect(() => {
        // Actualiza el título directamente
        document.title = getTitleForPath(location.pathname);

        // Actualiza también el meta description
        const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) {
                metaTag.setAttribute('content', getMetaDescriptionForPath(location.pathname));
            }
    }, [location]);

    return (
        <Helmet>
            {/* Este sigue como fallback para crawlers */}
            <meta name="description" content={getMetaDescriptionForPath(location.pathname)} />
        </Helmet>
    );
}