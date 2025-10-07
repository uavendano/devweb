import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Configurar dotenv para cargar las variables de entorno del archivo .env
dotenv.config();

// Usar las variables de entorno para configurar Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log,                   // Habilita los logs detallados
        timezone: process.env.DB_TIMEZONE      // Zona horaria
    }
);

console.log(new Date().toString());
let dbStatus = 'Conexión no iniciada a la base de datos de la página web';

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida con la base de datos de la página web.');                    
        dbStatus = 'Estatus: Conexión establecida con la base de datos de la página web.';
    } catch (error) {
        console.error('Error conectando a la base de datos de la página web:', error.message);
        dbStatus = `Estatus: Error: ${error.message}`;
    }
};

export { sequelize, connectDB, dbStatus };