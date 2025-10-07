import userModel from '../models/userModel.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { logInfo, logError, logWarn } from '../utils/logger.js';

dotenv.config();

// Configurar Nodemailer con Mailgun SMTP
const transporter = nodemailer.createTransport({
    host: process.env.MAILGUN_HOST,
    port: process.env.MAILGUN_PORT,
    auth: {
        user: process.env.MAILGUN_SMTP_USER,
        pass: process.env.MAILGUN_SMTP_PASS
    }
});

// Enviar correo de recuperación
export const forgotPassword = async (req, res) => {
    const { email } = req.body;
  
    try {
        // Validar si el usuario existe
        const user = await userModel.findOne({ where: { email } });
        if (!user) {
            logInfo(`Email no encontrado: El email del usuario: '${email}' no fue encontrado.`);
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
  
        // Generar token de recuperación con expiración de 1 hora
        const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '10m' });
  
        // Crear enlace de recuperación
        const resetLink = `${process.env.API_FRONTEND}/reset-password?token=${resetToken}`;
  
        // Configurar el correo
        const mailOptions = {
            from: 'no-reply@taec.com.mx',
            to: email,
            subject: 'Recuperación de contraseña',
            text: `Haga clic en el siguiente enlace para restablecer su contraseña: ${resetLink}`,
        };
  
        // Enviar el correo con Nodemailer
        await transporter.sendMail(mailOptions);
        logInfo(`Email enviado: Correo de recuperación enviado a: '${email}'`);
        res.json({ message: 'Correo de recuperación enviado.' });
        
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        logError('Error al enviar el correo:', { email, error: error.message });
        res.status(500).json({ message: 'Error interno del servidor.' });
    }
};

// Resetear la contraseña
export const resetPassword = async (req, res) => {
    const { token } = req.query;
    const { password } = req.body;
  
    try {
        // Verificar el token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // El token es válido, puedes continuar con el restablecimiento de la contraseña
  
        // Buscar el usuario
        const user = await userModel.findByPk(decoded.id);
        if (!user) {
            logInfo(`Usuario no encontrado: El usuario: '${decoded.id}' no fue encontrado.`);
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }
  
        // Hashear la nueva contraseña
        const hashedPassword = await bcryptjs.hash(password, 10);
  
        // Actualizar la contraseña en la base de datos
        await user.update({ password: hashedPassword });
  
        logInfo(`Contraseña actualizada correctamente.`);
        res.json({ message: 'Contraseña actualizada correctamente.' });
        
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            logWarn('Token expirado.');
            return res.status(400).json({ message: 'El token ha expirado. Solicita uno nuevo.' });
        }
        logError('Token inválido:', { error: error.message });
        res.status(400).json({ message: 'Token inválido' });
    }
};