import { sequelize2 } from "../config/databaseTienda.js";
import { logInfo, logError, logWarn } from '../utils/logger.js';

// Obtener fechas de cursos
export const getDates = async (req, res) => {
    try {
        logInfo("Iniciando consulta de cursos en v_cursos");
        // Query cruda para obtener todos los cursos de la vista
        const [cursos] = await sequelize2.query("SELECT id,producto,idcurso,f_inicio,f_fin,horaini,horafin,sesion,detalle FROM v_cursos");
        logInfo(`Consulta exitosa. Se encontraron ${cursos.length} cursos`);
        res.status(200).json({ message: `Se han obtenido ${cursos.length} cursos correctamente.`, cursos: cursos });
    } catch (error) {
        console.error("Error al obtener las fechas de cursos:", error);
        logError("Error al obtener las fechas de cursos:", error);
        res.status(500).json({ message: 'Error al obtener las fechas de cursos.', error: error.message });
    }
};