import sequelize from "../config/databaseTienda.js";

// Obtener fechas por ID
export const getDatesById = async (req, res) => {
  try {
    const { id } = req.params;
    const [resultados] = await sequelize.query(
      "SELECT * FROM v_cursos WHERE id = ?",
      { replacements: [id] }
    );

    if (resultados.length === 0) {
      return res.status(404).json({ message: "No hay fechas disponibles" });
    }

    res.json(resultados);
  } catch (error) {
    console.error("Error al obtener fechas por ID:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};