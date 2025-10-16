import { useState, useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import API_ROUTES from '../../routes/apiRoutes.js';
import '../../css/pages/calendario.css';
import axios from "axios";
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Link } from 'react-router-dom';

// Carga todas las img
const imgCalendario = require.context('../../images/pages/calendario',true);

// Lista maestra de productos (usa el id real de cada producto)
const productosMaestra = [
    { id: 9},
    { id: 91 },
    { id: 7 },
    { id: 25, img: imgCalendario(`./ede_logo.png`), anchor: ROUTES.CALENDARIO_DIS_ELE },
    { id: 93 },
    { id: 94, img: imgCalendario(`./art_360_logo.png`), anchor: ROUTES.CALENDARIO_ART_360 },
    { id: 111, img: imgCalendario(`./curso-ai.png`), anchor: ROUTES.CALENDARIO_ART_AI },
    { id: 100, img: imgCalendario(`./curso-accesible.png`), anchor: ROUTES.CALENDARIO_ART_ACC }, // ejemplo sin fechas
    { id: 81, img: imgCalendario(`./story_logo.png`), anchor: ROUTES.CALENDARIO_STO_AVA },
    { id: 80, img: imgCalendario(`./di_logo.png`), anchor: ROUTES.CALENDARIO_DIS_INS },
    { id: 24, img: imgCalendario(`./vyond_logo.png`), anchor: ROUTES.CALENDARIO_VYO },
    { id: 23, img: imgCalendario(`./moodle.png`), anchor: ROUTES.CALENDARIO_MOO }
];

export default function Calendario() {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await axios.get(API_ROUTES.COURSES_DATES);
                const cursosData = response.data.cursos;

                // Mapear la lista maestra
                const grouped = productosMaestra.map((producto) => {
                const ediciones = cursosData.filter((curso) => curso.id === producto.id);
                const nombre = ediciones.length > 0 ? ediciones[0].producto : '';
                return { ...producto, ediciones, nombre };
            });
                setCursos(grouped);
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Error al cargar los cursos');
                setLoading(false);
            }
        };

        fetchCursos();
        document.body.id = 'calendario-body';               
        // Para revertir el estilo cuando el componente se desmonte
        return () => {      
            document.body.id = 'body';           
        };
    }, []);

    if (loading) return (
        <div className="container mt-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
     
    if (error) return (
        <div className="container mt-5">
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        </div>
    );

    return (
        <>
            <OptionsMenu 
                optionBackLink={ROUTES.CURSOS_CAPACITACION}
                optionBackTxt="Calendario"
                opciones={0}
                txt={["","",""]}
                urls={['','','']}
            />
        
            <div className="mt-5 container">
                <h1 className="text-center mb-5 fs-title ff-bold custom-color">Calendario de cursos</h1>
                {cursos.slice()
                    .sort((a, b) => {
                        // Si alguno no tiene nombre (sin ediciones), ponerlo al final
                        if (!a.nombre) return 1;
                        if (!b.nombre) return -1;
                        return a.nombre.localeCompare(b.nombre, 'es');
                    }).map((producto) => ( 
                    <div key={producto.id} className="col-sm-12 col-md-12 col-xl-9 m-auto">
                        {producto.img && (
                            <div className="text-center mt-5 mb-5" id={producto.anchor}>
                                <img src={producto.img} className="img-fluid img-w-50" width="200" alt={producto.nombre} />
                            </div>
                        )}
                        <div>
                            <h2 className="mt-3 fs-subtitle ff-bold custom-color-blue">{producto.nombre}</h2>
                            {producto.ediciones.length > 0 ? (
                                producto.ediciones.map((curso) => {
                                    const fInicio = format(parseISO(curso.f_inicio), 'dd MMMM yyyy', { locale: es }); 
                                    const fFin = format(parseISO(curso.f_fin), 'dd MMMM yyyy', { locale: es });
                                    return (
                                        <div key={curso.idcurso}>
                                            <p className="m-0 fs-5 fs-texto ff-normal custom-color">No. sesiones: {curso.sesion}</p>
                                            <p className="m-0 fs-5 fs-texto ff-normal custom-color">Horario: {curso.horaini} a {curso.horafin} (UTC-6 CDMX)</p>
                                            <p className="m-0 fs-5 fs-texto ff-normal custom-color">Del {fInicio} al {fFin}</p>
                                            <p className="m-0 fs-5 fs-texto ff-bold custom-color">Fecha de sesiones: {curso.detalle}</p>
                                            <hr className="custom-color" />
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="fs-5 fs-texto ff-bold">
                                    Por el momento no contamos con fechas disponibles, favor de ponerse en contacto con un vendedor<Link to={ROUTES.CONTACTO}> AQUI</Link>
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}