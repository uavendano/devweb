import { useState, useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import API_ROUTES from '../../routes/apiRoutes.js';
import { Link } from 'react-router-dom';
import '../../css/pages/calendario.css';
import axios from "axios";
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Calendario() {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const imgCalendario = require.context('../../images/pages/calendario', true);

    // Mapeo de logos según idcurso
    const logos = {
        111: "curso-ai.png",
        7: "curso-articulate-rise.png",
        2: "curso-articulate-completo.png",
        3: "curso-articulate-basico.png",
        4: "curso-articulate-avanzado.png",
        5: "curso-storyline-experto.png",
        6: "curso-elearning.png"
    };

    // Obtener la lista de cursos desde el backend
    const fetchCursos = async () => {
        try {
            const response = await axios.get(API_ROUTES.COURSES_DATES);
            setCursos(response.data.cursos);
        } catch (err) {
            console.error('Error al obtener la lista de cursos:', err);
            setError(err.response?.data?.error || 'Error al obtener la lista de cursos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.body.id = 'calendario-body';
        fetchCursos();

        return () => {
            document.body.id = 'body';
        };
    }, []);

    // Agrupar cursos por producto
    const groupByProducto = (cursos) => {
        const grouped = {};
        cursos.forEach(curso => {
            if (!grouped[curso.producto]) grouped[curso.producto] = [];
            grouped[curso.producto].push(curso);
        });
        return grouped;
    };

    // Renderizado
    const renderCursos = () => {
        if (loading) return <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div>;
        if (error) return <div className="container alert alert-danger" role="alert">{error}</div>;
        if (!cursos || cursos.length === 0) {
            return (
                <p className="fs-5 fs-texto ff-bold">
                    Por el momento no contamos con fechas disponibles, favor de ponerse en contacto con un vendedor
                    <Link to={ROUTES.CONTACTO} target="_blank" rel="noopener noreferrer">AQUI</Link>.
                </p>
            );
        }

        const groupedCursos = groupByProducto(cursos);

        return Object.keys(groupedCursos).map((producto, i) => {
            const cursoGroup = groupedCursos[producto];
            // Tomamos el logo del primer registro de ese producto
            const logoFile = logos[cursoGroup[0].idcurso];
            const logoSrc = logoFile ? imgCalendario(`./${logoFile}`) : null;

            return (
                <div key={i} className="container col-sm-12 col-md-12 col-xl-8 mb-5 text-start">
                    <div className="mb-3">
                        <div className="text-center">
                            {logoSrc && (
                                <img
                                    src={logoSrc}
                                    alt={producto}
                                    className="img-fluid mb-3"
                                    width={200}
                                />
                            )}
                        </div>
                        <h3 className="fs-subtitle ff-bold custom-color-blue">{producto}</h3>
                        {cursoGroup.map((curso, j) => (
                            <div key={j} className="mb-3">
                                <p className="fs-5 m-0 fs-texto ff-normal">No. de sesiones: {curso.sesion}</p>
                                <p className="fs-5 m-0 fs-texto ff-normal">Horario: {curso.horaini} a {curso.horafin} (UTC-6 CDMX)</p>
                                <p className="fs-5 m-0 fs-texto ff-normal">Del: {format(parseISO(curso.f_inicio), "dd MMMM yyyy", { locale: es })} al {format(parseISO(curso.f_fin), "dd MMMM yyyy", { locale: es })}</p>                                        
                                <p className="fs-5 m-0 fs-texto ff-bold">Fecha de sesiones: {curso.detalle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            );
        });
    };

    return (
        <>
            <OptionsMenu
                optionBackLink={ROUTES.CALENDARIO}
                optionBackTxt="Calendario"
                opciones={0}
                txt={["", ""]}
                urls={['', '']}
            />
            <div className="mt-5">
                <div className="container custom-color">
                    <div className="col-md-12 m-auto text-center">
                        <h1 className="fs-title ff-bold mb-5">Calendario de cursos</h1>
                        {renderCursos()}
                    </div>
                </div>
            </div>
        </>
    );
}