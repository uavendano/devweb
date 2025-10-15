import { useState, useEffect } from 'react';
import OptionsMenu from '../../components/navbar/optionsMenu.js';
import ROUTES from '../../routes/routes.js';
import API_ROUTES from '../../routes/apiRoutes.js';
import '../../css/pages/calendario.css';
import axios from "axios";

export default function CalendarioCursos() {
    const [fechas, setFechas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Cargar imagenes de calendario
    const imgCalendario = require.context('../../images/pages/calendario', true);

    // Obtener la lista de fechas de cursos
    const fetchFechas = async () => {
        try {
            const response = await axios.get(API_ROUTES.COURSE_SCHEDULE);
            setFechas(response.data.cursos); // acceder a la propiedad cursos
        } catch (err) {
            console.error('Error al obtener la lista de fechas:', err);
            setError(err.response?.data?.error || 'Error al obtener la lista de fechas.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        document.body.id = 'calendario-body';
        fetchFechas(); // Llamada al endpoint al montar el componente

        return () => {
            document.body.id = 'body'; // revertir estilo al desmontar
        };
    }, []);

    // Renderizado de fechas y cursos
    const renderFechas = () => {
        if (loading) return <p>Cargando...</p>;
        if (error) return <p className="text-danger">{error}</p>;
        if (!fechas || fechas.length === 0) {
            return (
                <p>
                    <b>Por el momento no contamos con fechas disponibles.</b><br />
                    Favor de ponerse en contacto con un vendedor{" "}
                    <a href="https://taec.com.mx/contacto.php" target="_blank" rel="noopener noreferrer">AQUI</a>.
                </p>
            );
        }

        let ultimoProducto = "";

        return fechas.map((f, i) => (
            <div key={i} className="mb-4">
                {ultimoProducto !== f.producto && (
                    <>
                        <span className="subtitle">{f.producto}</span>
                        {f.logo && (
                            <div className="my-2">
                                <img
                                    src={imgCalendario(`./${f.logo}`)}
                                    alt={f.producto}
                                    className="img-fluid img-logo"
                                    width={150}
                                />
                            </div>
                        )}
                    </>
                )}
                <span>No. Sesiones: {f.sesion} — Horario: {f.horaini} a {f.horafin} (UTC-6 CDMX)</span>
                <br />
                <span>Del {f.f_inicio} al {f.f_fin}</span>
                <br />
                <span className="txt-gral-bold">Fecha de sesiones: {f.detalle}</span>
                <hr style={{ color: "#4E4E4E" }} />
                {ultimoProducto = f.producto}
            </div>
        ));
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
                        <h1 className="fs-title ff-bold">Calendario de cursos</h1>
                        <img
                            src={imgCalendario(`./curso-ai.png`)}
                            className="img-fluid img-w-50 mt-5 mb-4"
                            width={200}
                            alt="Ottolearn"
                        />
                        {renderFechas()}
                    </div>
                </div>
            </div>
        </>
    );
}
