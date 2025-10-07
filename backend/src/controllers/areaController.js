import { userModel, areaModel } from '../models/index.js';
import { validationResult } from 'express-validator';
import { Op } from 'sequelize';
import { logInfo, logError, logWarn } from '../utils/logger.js';

// Crear un nueva area
export const createArea = async (req, res) => {
    // Para validar los datos de entrada antes de intentar crear el area. 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logWarn('Error validando el input al crear registro del área:', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    // Campos minimos necesarios
    const { name, shortname, description } = req.body;
    const performedBy = req.session.user?.id || null; // Usuario que realiza la acción
    
    try {
        //Verifica si el shortname ya existe por el mismo shortname
        const existingShortname = await areaModel.findOne({ where: { shortname } });
        if (existingShortname) {
            logWarn(`El nombre corto: '${shortname}' ya esta en uso por otro registro en la tabla area.`, { performedBy });
            return res.status(400).json({ error: `El nombre corto: '${shortname}' ya esta en uso por otro registro en la tabla area.`});
        }

        const newArea = await areaModel.create({
            name,
            shortname,
            deleted: 0,
            timedeleted: null,
            description
        });
        logInfo(`El área: '${name}' con nombre corto '${shortname}' ha sido registrada correctamente.`, { performedBy });
        res.status(200).json({ message: `El área: '${name}' con nombre corto '${shortname}' ha sido registrada correctamente.`, area: newArea });        
    } catch (error) {
        console.error('Error al crear el área:', error);
        logError('Error al crear el registro para la tabla área:', error);
        res.status(500).json({ message: 'Error al crear el área', error: error.message });                        
    }
};

// Obtener todos las areas
export const getAllArea  = async (req, res) => {
    try {
        const area = await areaModel.findAll({
            where: { deleted: 0 }, // Filtrar areas no eliminadas
        });
        res.status(200).json(area);        
    } catch (error) {        
        console.error('Error al obtener los registros del área:', error);
        logError('Error al obtener todos los registros de las áreas:', error);
        res.status(500).json({ message: 'Error al obtener los registros del área:', error: error.message });        
    }
};

// Obtener una area por ID
export const getAreaById = async (req, res) => {    

    try {
        const area = await areaModel.findByPk(req.params.id);
        if (!area) {
            logInfo('Datos del área no encontrados.');
            return res.status(404).json({ message: 'Datos del área no encontrados.' });
        }
        res.status(200).json(area);
    } catch (error) {
        console.error('Error al obtener los datos del área por id:', error);
        logError('Error al obtener los datos del área por id:', error);
        res.status(500).json({ message: 'Error al obtener los datos del área por id:', error: error.message });        
    }
};

// Actualizar area
export const updateArea = async (req, res) => {
    // Para validar los datos de entrada antes de intentar actualizar el area.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logWarn('Error validando el input al actualizar el registro del área:', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { id } = req.params;
        const { name, shortname, description } = req.body;
        const performedBy = req.session.user?.id || null; // Usuario que realiza la acción
        
        const area = await areaModel.findByPk(id);
        if (!area) {
            logInfo('Datos del área no encontrados al actualizar.');
            return res.status(404).json({ error: 'Datos del área no encontrados al actualizar.' });
        }

        // Verificar si el shortname ya existe en otro registro
        const existingArea = await areaModel.findOne({ where: { shortname, id: { [Op.ne]: id } } });
        if (existingArea) {
            logWarn(`El nombre corto: '${shortname}' ya esta en uso por otro registro en la tabla area.`, { performedBy });            
            return res.status(400).json({ error: `El nombre corto: '${shortname}' ya esta en uso.` }); 
        }

        area.name = name;
        area.shortname = shortname;        
        area.description = description;
        
        await area.save();
        logInfo(`El área: '${name}' con nombre corto: '${shortname}' ha sido actualizada correctamente.`, { performedBy });
        res.status(200).json({ message: `El área: '${name}' con nombre corto: '${shortname}' ha sido actualizada correctamente.`, area });
    } catch (error) {
        console.error('Error al actualizar los datos del área:', error);
        logError('Error al actualizar los datos del área:', error);
        res.status(500).json({ message: 'Error al actualizar los datos del área:', error: error.message });        
    }
};

// Eliminar area
export const deleteArea = async (req, res) => {
    const { id } = req.params;
    const performedBy = req.session.user?.id || null; // Usuario que realiza la acción

    try {
        // Evitar eliminar el área por defecto (id = 1)
        if (parseInt(id) === 1) {
            logWarn('Intento de eliminar el área por defecto (id 1).', { performedBy });
            return res.status(400).json({ error: 'El área por defecto no se puede eliminar.' });
        }

        const area = await areaModel.findByPk(id);
        if (!area) {
            logInfo('Datos del área no encontrados al eliminar.');
            return res.status(404).json({ message: 'Datos del área no encontrados al eliminar.' });
        }

        // Verificar si el área ya está eliminada
        if (area.deleted === 1) {
            logWarn(`El área con id '${id}' ya está eliminada.`, { performedBy });
            return res.status(400).json({ error: 'El área ya ha sido eliminada previamente.' });
        }
        
        // Buscar usuarios habilitados asociados a esta área
        const associatedUsers = await userModel.findAll({
            where: {
                areaid: id,
                deleted: 0 // solo usuarios activos
            }
        });

        // Si hay usuarios habilitados asociados, no se puede eliminar el área
        if (associatedUsers.length > 0) {
            logWarn('El área no se puede eliminar por que tiene usuarios asociados.', { performedBy });
            return res.status(400).json({ error: 'El área no se puede eliminar por que tiene usuarios asociados.' });
        }

        // Actualizar los usuarios eliminados para que su `areaid` sea 1 (u otra área genérica)
        await userModel.update(
            { areaid: 1 }, 
            { where: { areaid: id, deleted: 1 } }
        );

        // Marcar el área como eliminada (borrado lógico)
        area.deleted = 1;
        area.timedeleted = new Date();
        await area.save();
        logInfo(`El área con id: '${id}' ha sido eliminada correctamente.`, { performedBy });
        res.status(200).json({ message: 'El área ha sido eliminada correctamente.' });        
    } catch (error) {
        console.error('Error al eliminar los datos del área:', error);
        logError('Error al eliminar los datos del área:', error);
        res.status(500).json({ message: 'Error al eliminar los datos del área', error: error.message });                        
    }
};