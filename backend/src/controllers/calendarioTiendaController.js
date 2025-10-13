import { sequelize2 } from "../config/databaseTienda.js";

// Obtener fechas por ID
export const getDatesById = async (req, res) => {
    try {
        const { ids } = req.query; // Ej: ?ids=7,8,9
        if (!ids) return res.status(400).json({ error: "No se proporcionaron IDs" });

        const idArray = ids.split(','); // Convertimos a array ["7","8","9"]

        const [resultados] = await sequelize2.query(
        `SELECT * FROM v_cursos WHERE id IN (${idArray.map(() => '?').join(',')})`,
        { replacements: idArray }
        );

        res.json(resultados);
    } catch (error) {
        console.error("Error al obtener fechas por IDs:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};