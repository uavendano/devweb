import { userModel, areaModel } from '../models/index.js';
import { Op } from 'sequelize';
import { logInfo, logError, logWarn } from '../utils/logger.js';

// Obtener la lista de areas activas para asignar
export const getAllAreaActive = async (req, res) => {
    try {
        const areas = await areaModel.findAll({
            where: {
                id: { [Op.ne]: 1 },  // Excluir área por defecto
                deleted: 0           // Solo áreas activas   
            },
            attributes: ['id', 'name', 'shortname']
        });
        res.status(200).json(areas);
    } catch (error) {
        console.error('Error al obtener las areas:', error);
        logError('Error al obtener las areas:', error);
        res.status(500).json({ message: 'Error al obtener las areas:', error: error.message });
    }
};

// Obtener la lista de usuarios sin area y que no esten eliminados
export const getUserWithoutArea = async (req, res) => {
    try {
        const user = await userModel.findAll({
            where: { areaid: 1, suspended: 0, deleted: 0 },
            attributes: ['id', 'name', 'lastname']
        });
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener los usuarios sin área:', error);
        logError('Error al obtener los usuarios sin área:', error);
        res.status(500).json({ message: 'Error al obtener los usuarios sin área:', error: error.message });
    }
};

// asignar un área a múltiples usuarios
export const assignAreaToUsers = async (req, res) => {
    try {
        // Obtener el areaid y la lista de userids
        const { areaid, userids } = req.body;
        const performedBy = req.session.user?.id || null; // Usuario que realiza la acción

        // Verificar si el área existe
        const area = await areaModel.findByPk(areaid);
        if (!area) {
            logInfo(`El área con ID ${areaid} no fue encontrada.`, { performedBy });
            return res.status(404).json({ message: 'Área no encontrada.' });
        }

        // Verificar si los userids se proporcionaron y no están vacíos
        if (!userids || !Array.isArray(userids) || userids.length === 0) {
            logWarn('No se proporcionaron IDs de usuarios o el formato es incorrecto.', { performedBy });
            return res.status(400).json({ message: 'Debe proporcionar al menos un usuario para asignar el área.' });
        }

        // Verificar si todos los usuarios existen en la base de datos y que no esten suspendidos o eliminados
        const users = await userModel.findAll({
            where: {
                id: userids,
                suspended: 0,
                deleted: 0
            }
        });        
        if (users.length !== userids.length) {
            logWarn('Uno o más usuarios no fueron encontrados.', { performedBy });
            return res.status(404).json({ message: 'Uno o más usuarios no fueron encontrados.' });
        }        

        // Asignar el área a cada usuario
        await userModel.update(
            { areaid },
            { where: { id: userids } }
        );

        // Responder con éxito
        logInfo(`Área ${areaid} asignada a los usuarios seleccionados correctamente.`,{ userIds: users.map(u => u.id), performedBy });
        return res.status(200).json({ message: 'Área asignada a los usuarios seleccionados correctamente.', updatedUsers: users });

    } catch (error) {
        console.error('Error al asignar área a los usuarios:', error);
        logError('Error al asignar área a los usuarios:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Obtener usuarios con área asignada
export const getUsersWithArea = async (req, res) => {
    try {
        // Buscar usuarios que tienen un área asignada (areaid no es nulo)
        const user = await userModel.findAll({
            where: {
                areaid: { [Op.not]: 1 }, // Filtrar usuarios con un área asignada
                suspended: 0,
                deleted: 0
            },
            include: [
                {
                    model: areaModel,
                    attributes: ['name','shortname'], // Incluir los detalles del área si es necesario
                    as: 'userArea'
                }
            ]
        });

        // Mapear los usuarios para incluir el nombre del área
        const usersWithNames = user.map(user => {
            const userJson = user.toJSON();
            userJson.areaName = user.userArea ? user.userArea.name : null;
            return userJson;
        });

        // Devolver la lista de usuarios con el nombre del área incluido
        res.json(usersWithNames);
    } catch (error) {
        console.error('Error al obtener usuarios con área asignada:', error);
        logError('Error al obtener usuarios con área asignada:', error);
        res.status(500).json({ message: 'Error al obtener usuarios con área asignada:', error: error.message });        
    }
};

// Desasignar un área de uno o varios usuarios
export const unassignAreaFromUsers = async (req, res) => {
    try {
        // Obtener los userids del request
        const { userids } = req.body;
        const performedBy = req.session.user?.id || null; // Usuario que realiza la acción

        // Verificar si se proporcionaron userids y son una lista
        if (!userids || !Array.isArray(userids) || userids.length === 0) {
            logWarn('No se proporcionaron IDs de usuarios o el formato es incorrecto.', { performedBy });
            return res.status(400).json({ message: 'Debe proporcionar al menos un ID de usuario.' });
        }

        // Verificar si todos los usuarios existen en la base de datos
        const users = await userModel.findAll({
            where: {
                id: userids
            }
        });

        if (users.length !== userids.length) {
            logWarn('Uno o más usuarios no fueron encontrados.', { performedBy });
            return res.status(404).json({ message: 'Uno o más usuarios no fueron encontrados.' });
        }

        // Desasignar el área de cada usuario
        await userModel.update(
            { areaid: 1 },
            { where: { id: userids } }
        );

        // Responder con éxito
        logInfo('Área por defecto con ID 1 asignada como área por defecto a los usuarios seleccionados.', { userIds: users.map(u => u.id), performedBy } );
        return res.status(200).json({ message: 'Áreas desasignadas de los usuarios seleccionados correctamente.', updatedUsers: users });

    } catch (error) {
        console.error('Error al desasignar área de los usuarios:', error);
        logError('Error al desasignar área de los usuarios:', error);
        return res.status(500).json({ message: 'Error interno del servidor:', error: error.message });
    }
};