import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Configurar dotenv para cargar las variables de entorno del archivo .env
dotenv.config();

// Usar las variables de entorno para configurar Sequelize
const sequelize2 = new Sequelize(
    process.env.DB_NAME_STORE,
    process.env.DB_USER_STORE,
    process.env.DB_PASSWORD_STORE,
    {
        host: process.env.DB_HOST_STORE,
        dialect: process.env.DB_DIALECT_STORE,
        logging: console.log,                   // Habilita los logs detallados
        timezone: process.env.DB_TIMEZONE_STORE      // Zona horaria
    }
);

console.log(new Date().toString());
let dbStatus_STORE = 'Conexión no iniciada a la base de datos de la tienda';

const connectDB_STORE = async () => {
    try {
        await sequelize2.authenticate();
        console.log('Conexión establecida con la base de datos de la tienda online.');                    
        dbStatus_STORE = 'Estatus: Conexión establecida con la base de datos de la tienda online.';
    } catch (error) {
        console.error('Error conectando a la base de datos de la tienda:', error.message);
        dbStatus_STORE = `Estatus: Error: ${error.message}`;
    }
};

export { sequelize2, connectDB_STORE, dbStatus_STORE };