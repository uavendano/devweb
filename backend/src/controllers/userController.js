import { userModel, areaModel, roleModel } from '../models/index.js';
import bcryptjs from 'bcryptjs';
import { logInfo, logError, logWarn } from '../utils/logger.js';
import { validationResult } from 'express-validator';
import { Op } from 'sequelize';

// Crear registro de usuarios   
export const createUser = async (req, res) => {
    // Para validar los datos de entrada antes de intentar crear el usuario.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logWarn('Error validando el input al crear registro del usuario:', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }

    // Campos minimos necesarios
    const { name, lastname, username, email, password, description } = req.body;

    try {                
        // Verificar si username o email ya existen en usuarios tanto activos como eliminados
        const existingUser = await userModel.findOne({
            where: {
                [Op.or]: [ { username }, { email } ]
            }
        });
        
        if (existingUser) {
            let errorMessage = '';
            if (existingUser.username === username) errorMessage = `El usuario: '${username}' ya está en uso.`;
            if (existingUser.email === email) errorMessage = `El email: '${email}' ya está en uso.`;            
            if (existingUser.deleted) errorMessage += ' Por favor, contacta con el administrador.';

            logWarn(errorMessage);
            return res.status(400).json({ error: errorMessage });
        }

        // Crear el nuevo usuario con la imagen de perfil si se subió
        const newUser = await userModel.create({ 
            roleid: 2,
            areaid: 1,
            name,
            lastname,
            username,
            email,
            password: await bcryptjs.hash(password, 10),
            suspended: 0, 
            timesuspended: null,
            deleted: 0,
            timedeleted: null,
            description
        });
        logInfo(`El usuario: '${name} ${lastname}' ha sido registrado correctamente.`, { performedBy: req.session.user?.id || null, newUserId: newUser.id});
        res.status(200).json({ message: `El usuario: '${name} ${lastname}' ha sido registrado correctamente.`, user: newUser });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        logError('Error al crear el registro para la tabla inv_user:', error);
        res.status(500).json({ message: 'Error al crear el usuario:', error: error.message });
    }
};

// Obtener todos los usuarios
export const getAllUser  = async (req, res) => {    
    try {
        // Consulta para obtener todos los usuarios
        const user = await userModel.findAll({
            where: { deleted: 0 }, // Filtrar usuarios no eliminados
            include: [
                {
                    model: areaModel,
                    attributes: ['name'], // Solo obtener el nombre del área 
                    as: 'userArea'              
                },           
                {
                    model: roleModel,
                    attributes: ['name'], // Solo obtener el nombre del rol    
                    as: 'userRole'
                                    
                },
            ],        
        });                    

        // Devolver la lista de usuarios
        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener todos los registros de los usuarios:', error);
        logError('Error al obtener todos los registros de los usuarios:', error);
        res.status(500).json({ message: 'Error al obtener todos los registros de los usuarios:', error: error.message });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {    

    try {
        const user = await userModel.findByPk(req.params.id);
        if (!user) {
            logInfo('Datos del usuario no encontrados.');
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Validamos que no se muestren registros con estatus deleted = 1 (eliminado) 
        if (user.deleted) {
            logInfo('Este usuario ha sido eliminado.');
            return res.status(400).json({ message: 'Este usuario ha sido eliminado.' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
        logError('Error al obtener los datos del usuario:', error);
        res.status(500).json({ message: 'Error al obtener los datos del usuario:', error: error.message });
    }
};

// Actualizar usuario
export const updateUser = async (req, res) => {
    // Para validar los datos de entrada antes de intentar editar el usuario.
    const errors = validationResult(req);
    if (!errors.isEmpty()) {    
        logWarn('Error validando el input al actualizar registro del usuario:', { errors: errors.array() });
        return res.status(400).json({ errors: errors.array() });
    }
    
    try {
        const { id } = req.params;
        const { name, lastname, username, email, password, description } = req.body;
        const user = await userModel.findByPk(id);

        if (!user) {
            logInfo('Usuario no encontrado.');
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }        
        
        // Validamos que no se muestren registros con estatus deleted = 1 (eliminado) 
        if (user.deleted) {
            logInfo('Este usuario ha sido eliminado.');
            return res.status(400).json({ message: 'Este usuario ha sido eliminado.' });
        }

        // Verificar si el nuevo username ya existe en otro usuario
        const existingUsername = username ? await userModel.findOne({ where: { username, id: { [Op.ne]: id } } }) : null;
        if (existingUsername) {
            const errorMsg = existingUsername.deleted
                ? 'Este [username] pertenece a un usuario eliminado.'
                : 'Este [username] ya está en uso por otro usuario.';
            logWarn(errorMsg);
            return res.status(400).json({ error: errorMsg });
        }

        // Verificar si el nuevo email ya existe en otro usuario
        const existingUserEmail = email ? await userModel.findOne({ where: { email, id: { [Op.ne]: id } } }) : null;
        if (existingUserEmail) {
            const errorMsg = existingUserEmail.deleted
                ? 'Este [email] pertenece a un usuario eliminado.'
                : 'Este [email] ya está en uso por otro usuario.';
            logWarn(errorMsg);
            return res.status(400).json({ error: errorMsg });
        }
        
        // Actualizar los campos del usuario     
        user.name = name;
        user.lastname = lastname;
        user.username = username;
        user.email = email;
        if (password) {
            // Hash the password before saving it
            user.password = await bcryptjs.hash(password, 10);
        }    
        user.description = (description && description !== 'null' && description !== "") ? description : null;

        await user.save();
        logInfo(`Usuario: '${user.name} ${user.lastname}' actualizado correctamente.`, {performedBy: req.session.user?.id || null,updatedUserId: user.id});
        res.status(200).json({ message: 'Usuario actualizado correctamente.', user });

    } catch (error) {
        console.error('Error al actualizar los datos del usuario:', error);
        logError('Error al actualizar los datos del usuario:', error);
        res.status(500).json({ message: 'Error al actualizar los datos del usuario:', error: error.message });
    }
};

// Suspender usuario por ID
export const suspendUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await userModel.findByPk(id);
        if (!user) {
            logInfo('Datos del usuario no encontrados.');
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        // Verificar si el usuario es administrador
        if (user.roleid === 1) {
            logInfo('No se puede suspender a un administrador.');
            return res.status(403).json({ message: 'No se puede suspender a un administrador.' });
        }

        // Cambiar el estado a suspendido
        user.suspended = !user.suspended; // Invertir el estado actual
        user.timesuspended = user.suspended ? new Date() : null; // Establecer la fecha solo si se suspende
        await user.save();
        
        logInfo(`El usuario id: '${user.name} ${user.lastname}', ha sido ${user.suspended ? 'suspendido' : 'activado'}.`,{performedBy: req.session.user?.id || null});
        res.status(200).json({ message: `Usuario ${user.suspended ? 'suspendido' : 'activado'} correctamente.` });
    } catch (error) {
        console.error('Error suspending user:', error);
        logError('Error al suspender usuario.', error);
        res.status(500).json({ message: 'Error suspending user', error: error.message });
    }
};

// Eliminar usuario
export const softDeleteUser = async (req, res) => {
    // ID del usuario se pasa como un parámetro en la URL
    const { id } = req.params;

    try {
        // Verificar si el usuario existe
        const user = await userModel.findByPk(id);
        if (!user) {
            logInfo('Datos del usuario no encontrados al eliminar.');
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }        

        // Verificar si el usuario está suspendido para no eliminarlo
        if (user.suspended) {
            logInfo('No se puede eliminar un usuario suspendido.');
            return res.status(400).json({ message: 'No se puede eliminar un usuario suspendido.' });
        }

        // Verificar si el usuario es administrador para no eliminarlo
        if (user.roleid === 1) {
            logInfo('No se puede eliminar a un administrador.');
            return res.status(403).json({ message: 'No se puede eliminar a un administrador.' });
        }

        // Verificar si el usuario tienen area asignada
        if (user.areaid && user.areaid !== 1) {
            logInfo('No se puede eliminar el usuario ya que tienen un área asignada.');
            return res.status(403).json({ message: 'No se puede eliminar el usuario ya que tienen un área asignada.' });
        }

        user.deleted = true;
        user.timedeleted = new Date();
        await user.save();

        logInfo(`El usuario '${user.username}' ha sido eliminado correctamente.`,{performedBy: req.session.user?.id || null,deletedUserId: user.id});
        res.status(200).json({ message: 'Usuario eliminado correctamente.' });
    } catch (error) {
        console.error('Error al eliminar los datos del usuario:', error);
        logError('Error al eliminar los datos del usuario:', error);
        res.status(500).json({ message: 'Error al eliminar los datos del usuario', error: error.message });
    }
};