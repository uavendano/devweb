import nodemailer from 'nodemailer';
import { logInfo, logError, logWarn } from '../utils/logger.js';

export const sendContactEmail = async (req, res) => {
    try {
        const { name, email, tel, empresa, pais, asunto, servicio, comentario } = req.body;

        // Validacion de campos
        if (!email) {
            logError('El email es obligatorio:', { errors: errors.array() });
            return res.status(400).json({ errors: errors.array() });
        }
        if (!asunto) {
            logError('El asunto es obligatorio:', { errors: errors.array() });
            return res.status(400).json({ errors: errors.array() });
        }

        // Configuración del transporte SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.MAILGUN_HOST,
            port: process.env.MAILGUN_PORT,
            auth: {
                user: process.env.MAILGUN_SMTP_USER,
                pass: process.env.MAILGUN_SMTP_PASS,
            },
        });

        // Contenido del correo
        const mailOptions = {
            from: `"${name || 'Formulario'}" <${email}>`,           // quien envía
            to: process.env.MAIL_RECEIVER,                          // receptor
            subject: asunto,
            text: `
                Nombre: ${name}
                Email: ${email}
                Teléfono: ${tel || 'No proporcionado'}
                Empresa: ${empresa || 'No proporcionado'}
                País: ${pais || 'No proporcionado'}
                Servicio: ${servicio || 'No proporcionado'}
                Comentario: ${comentario || 'No proporcionado'}
            `,
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${tel || 'No proporcionado'}</p>
                <p><strong>Empresa:</strong> ${empresa || 'No proporcionado'}</p>
                <p><strong>País:</strong> ${pais || 'No proporcionado'}</p>
                <p><strong>Servicio:</strong> ${servicio || 'No proporcionado'}</p>
                <p><strong>Comentario:</strong> ${comentario || 'No proporcionado'}</p>
            `,
        };

        // Enviar correo
        await transporter.sendMail(mailOptions);
        logInfo('Correo enviado exitosamente!');
        res.status(200).json({ message: 'Correo enviado exitosamente!' });

    } catch (error) {
        console.error('Error enviando correo:', error);
        logError('Error enviando correo:', error);
        res.status(500).json({ message: 'Error enviando el correo.', error: error.message });
    }
};