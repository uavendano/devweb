import userModel from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import { logInfo, logError, logWarn } from '../utils/logger.js';

// Controller para crear cuenta
export const register = async (req, res) => {
    // Campos minimos necesarios para crear una cuenta
    const { name, lastname, username, email, password } = req.body;

    try {
        // Validar si hay usuarios existentes en la base de datos
        const userCount = await userModel.count();

        const roleid = userCount === 0 ? 1 : 2;     // 1 = admin, 2 = empleado
        const areaid = 1;                           // Default area

        // Validar si el username ya existe (activo)
        const existingUserName = await userModel.findOne({ where: { username, deleted: false } });
        if (existingUserName) {                     
            logInfo(`Intento de registro fallido: El nombre de usuario '${username}' ya está en uso.`);
            return res.status(400).json({ error: `El nombre de usuario: '${username}' ya esta en uso.` });            
        }
        
        // Validar si el username ya existe (eliminado)
        const existingDeletedUser = await userModel.findOne({ where: { username, deleted: true } });
        if (existingDeletedUser) {
            logInfo(`Intento de registro fallido: El nombre de usuario '${username}' ya está en uso en un usuario eliminado.`);
            return res.status(400).json({ error: `El nombre de usuario: '${username}' ya esta en uso, por favor contacta al administrador.` });
        }

        // Validar si el email ya existe (activo)
        const existingUserEmail = await userModel.findOne({ where: { email, deleted: false } });
        if (existingUserEmail) {          
            logInfo(`Intento de registro fallido: El email '${email}' ya está en uso.`);  
            return res.status(400).json({ error: `El email: '${email}' ya esta en uso.` });
        }

        // Validar si el email ya existe (eliminado)
        const existingDeletedEmail = await userModel.findOne({ where: { email, deleted: true } });
        if (existingDeletedEmail) {
            logInfo(`Intento de registro fallido: El email '${email}' ya está en uso en un usuario eliminado.`);
            return res.status(400).json({ error: `El email: '${email}' ya esta en uso, por favor contacta al administrador.` });
        }

        // Crear registro de usuario nuevo
        const newRegUser = await userModel.create({ 
            roleid: roleid,
            areaid,
            name,
            lastname,
            username,
            email,
            password: await bcryptjs.hash(password, 10),
            suspended: 0, 
            timesuspended: null,
            deleted: 0,
            timedeleted: null,
            description: ''
            //createdAt     lo toma por defecto
            //updatedAt     lo toma por defecto    
        });
        logInfo(`Usuario registrado exitosamente: La cuenta con el username: '${username}' y el email: '${email}' ha sido registrado correctmente.`);
        res.status(200).json({ message: `La cuenta con el username: '${username}' ha sido registrado correctmente.`, user: newRegUser });
    } catch (error) {
        console.error('Error al crear la cuenta del usuario:', error);
        logError('Error al crear la cuenta del usuario:', { username, email, error });    
        res.status(500).json({ error: 'Error interno del servidor:', error });
    }
}

// Controller para iniciar sesion
export const login = async (req, res) => {
    // Campos necesarios
    const { username, password } = req.body;
    
    try {
        // Validar si el usuario existe en la base de datos
        const user = await userModel.findOne({ where: { username } });
        if (!user) {
            logWarn(`Inicio de sesión fallido: Usuario inexistente: '${username}'`);
            return res.status(404).json({ error: 'Usuario o contraseña incorrectos.' });
        }

        // Validar si el usuario está suspendido
        if (user.suspended) {
            logWarn(`Inicio de sesión fallido: El usuario '${username}' esta suspendido.`);
            return res.status(400).json({ error: 'Usuario o contraseña incorrectos.' });
        }

        // Validar si el usuario está eliminado
        if (user.deleted) {
            logWarn(`Inicio de sesión fallido: El usuario '${username}' esta eliminado.`);
            return res.status(400).json({ error: 'Usuario o contraseña incorrectos.' });
        }

        // Validar password
        const match = await bcryptjs.compare(password, user.password);
        if (!match) {
            logWarn(`Inicio de sesión fallido: Contraseña incorrecta para el usuario: '${username}'`);
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
        }

        // Datos de sesion
        req.session.user = {
            id: user.id,
            roleid: user.roleid,
            name: user.name,
            lastname: user.lastname
        };
        logInfo(`Inicio de sesión exitoso: El usuario con id: '${user.id}' ha iniciado sesión.`);
        res.status(200).json({ message: 'Inicio de sesión exitoso.', user: req.session.user });
        
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        logError('Error al iniciar sesión:', { error });
        res.status(500).json({ error: 'Error interno del servidor:', error });
    }
}

// Controller para cerrar sesion
export const logout = (req, res) => {
    try {
        const userid = req.session?.user?.id;
        if (!userid) {
            logWarn('Intento de cierre de sesión: No se encontró la sesión de usuario, sin sesión activa.');
            return res.status(400).json({ error: 'No se encontró la sesión de usuario.' });
        }

        req.session.destroy(err => {
            if (err) {
                console.error('Error al cerrar sesión:', err);
                logError('Error al destruir la sesión de usuario.', { error: err.message });
                return res.status(500).json({ error: 'Error interno del servidor.' });
            }
            res.clearCookie('connect.sid'); // Limpia la cookie de la sesión
            logInfo(`Sesión cerrada: El usuario con id: '${userid}' ha cerrado sesión.`);
            res.status(200).json({ message: 'Sesión cerrada correctamente.' });
        });
    } catch (error) {
        logError('Excepción al cerrar sesión.', { error: error.message });
        res.status(500).json({ message: 'Error al cerrar sesión:', error: error.message });                
    }
};

// Controller para verificar autenticación y obtener los datos de la sesion del usuario
export const checkAuth = (req, res) => {
    if (req.session.user) {        
        res.status(200).json({ authenticated: true, user: req.session.user });
    } else {        
        res.status(401).json({ authenticated: false, message: "SessionExpired." });
    }
};