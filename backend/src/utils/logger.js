import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import moment from 'moment';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

dotenv.config();

// Ruta dinámica para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Asegurar que exista la carpeta /logs
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

// Formato personalizado de log
const customFormat = format.printf(({ timestamp, level, message, ...meta }) => {
    let log = `${timestamp} ${level}: ${message}`;
    if (Object.keys(meta).length) {
        log += ` ${JSON.stringify(meta)}`;
    }
    return log;
});

// Formato de timestamp usando moment
const timestampFormat = format((info) => {
    info.timestamp = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
    return info;
});

// Filtro para un solo nivel
const levelFilter = (level) => {
  return format((info) => {
    return info.level === level ? info : false;
  })();
};

// Crear logger
const logger = createLogger({    
    format: format.combine(
        timestampFormat(),
        customFormat
    ),
    transports: [
        new DailyRotateFile({
            filename: path.join(logDir, '%DATE%-info.log'),
            datePattern: 'YYYY-MM-DD',
            level: 'info',
            format: levelFilter('info'),
            maxFiles: '14d',
        }),
        new DailyRotateFile({
            filename: path.join(logDir, '%DATE%-warn.log'),
            datePattern: 'YYYY-MM-DD',
            level: 'warn',
            format: levelFilter('warn'),
            maxFiles: '30d',
        }),
        new DailyRotateFile({
            filename: path.join(logDir, '%DATE%-error.log'),
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            format: levelFilter('error'),
            maxFiles: '30d',            
        }),
    ]
});

// Mostrar en consola si no es producción
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            timestampFormat(),
            customFormat
        )
    }));
}

// Funciones convenientes para importar donde quieras
export const logInfo = (msg, meta = {}) => logger.info(msg, meta);
export const logError = (msg, meta = {}) => logger.error(msg, meta);
export const logWarn = (msg, meta = {}) => logger.warn(msg, meta);

export default logger;