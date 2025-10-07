import { userModel } from '../models/index.js';
import { logInfo, logError, logWarn } from '../utils/logger.js';

// Obtener la lista de administradores y que no esten eliminados
export const getAdmins = async (req, res) => {
    try {
        const admins = await userModel.findAll({
            where: { roleid: 1, suspended:0, deleted: 0 }, // roleid=1 es el rol de administrador
            attributes: ['id', 'name', 'lastname']
        });
        res.status(200).json(admins);
    } catch (error) {
        console.error('Error al obtener los administradores:', error);
        logError('Error al obtener los administradores:', error);
        res.status(500).json({ message: 'Error al obtener los administradores:', error: error.message });
    }
};

// Obtener la lista de empleados sin los admins y que no esten eliminados
export const getEmployee = async (req, res) => {
    try {
        const employee = await userModel.findAll({
            where: { roleid: 2, suspended: 0, deleted: 0 }, // roleid=2 es el rol de empleado
            attributes: ['id', 'name', 'lastname']
        });
        res.status(200).json(employee);
    } catch (error) {
        console.error('Error al obtener los empleados:', error);
        logError('Error al obtener los empleados:', error);
        res.status(500).json({ message: 'Error al obtener los empleados:', error: error.message });
    }
};

// Añadir un usuario como administrador
export const addAdmin = async (req, res) => {
    try {
        const { userid } = req.body;
        const user = await userModel.findByPk(userid);

        if (!user) {
            logInfo('Usuario no encontrado al intentar añadir como administrador.',{performedBy: req.session.user?.id || null,targetUserId: userid});
            return res.status(404).json({ message: 'Usuario no encontrado al añadir como administrador.' });
        }

        user.roleid = 1; // Cambiar el rol a administrador
        await user.save();
        logInfo(`Usuario id: '${user.id}' (${user.name} ${user.lastname}) añadido como administrador.`, {performedBy: req.session.user?.id || null });
        res.status(200).json({ message: 'Usuario añadido como administrador.' });
    } catch (error) {
        console.error('Error al añadir administrador:', error);
        logError('Error al añadir administrador:', error);
        res.status(500).json({ message: 'Error al añadir administrador', error: error.message });
    }
};

// Quitar un usuario como administrador
export const removeAdmin = async (req, res) => {
    try {
        const { userid } = req.body;
        const loggedInUserId = req.session.user.id.toString(); // ID del usuario logueado desde la sesión        

        // Verificar si el usuario está intentando quitarse a sí mismo como administrador
        if (userid.toString() === loggedInUserId) {
            logInfo(`El usuario id: '${loggedInUserId}' intentó quitarse a sí mismo como administrador.`,{performedBy: loggedInUserId});
            return res.status(400).json({ message: 'No puedes quitarte a ti mismo como administrador.' });
        }

        const user = await userModel.findByPk(userid);

        if (!user) {
            logInfo('Usuario no encontrado, al quitar el admin.');
            return res.status(404).json({ message: 'Usuario no encontrado, al quitar el admin.' });
        }

        user.roleid = 2; // Cambiar el rol a un usuario normal
        await user.save();

        logInfo(`Usuario id: '${user.id}' (${user.name} ${user.lastname}) quitado como administrador.`,{performedBy: loggedInUserId});
        res.status(200).json({ message: 'Se ha quitado el rol administrador al usuario.' });
    } catch (error) {
        console.error('Error al quitar el administrador:', error);
        logError('Error al quitar el administrador:', error);
        res.status(500).json({ message: 'Error al quitar el administrador:', error: error.message });
    }
};