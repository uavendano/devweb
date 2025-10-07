import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB, dbStatus } from './src/config/databaseApp.js';
import { connectDB_STORE, dbStatus_STORE } from './src/config/databaseTienda.js';
import routes from './src/routes/routes.js';

// Configurar dotenv para cargar las variables de entorno del archivo .env
dotenv.config();

const app = express();
const PORT =  process.env.PORT || 8000;

// Para ver el valor de Secure Cookie
console.log('NODE_ENV:', process.env.NODE_ENV);                                             // Verifica el entorno
console.log('Secure Cookie:', process.env.NODE_ENV === 'production');                       // Verifica si la cookie será segura
console.log('sameSite Cookie:', process.env.NODE_ENV === 'production' ? 'none' : 'lax');    // Verifica si la cookie será segura

// Middleware para parsear bodies JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de sesión
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,              // No vuelve a guardar la sesión si no ha habido cambios
    saveUninitialized: false,   // No guarda sesiones vacías
    cookie: {        
        secure: process.env.NODE_ENV === 'production',                      // Establece 'secure: true' solo en producción con HTTPS
        httpOnly: true,                                                     // La cookie solo es accesible desde el servidor
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',   // `none` en producción, `lax` en desarrollo
        maxAge: 30 * 60 * 1000                                              // Tiempo de vida de la cookie en milisegundos (aquí 30 min)
    }  
}));

// Configuración necesaria si usas un proxy inverso
app.set('trust proxy', 1);

// Conexiones a las BDs
connectDB();        // BD pag web
connectDB_STORE();  // BD tienda

// Ruta para mostrar el estado de la conexión a la base de datos
app.get('/db-status', (req, res) => { res.send(dbStatus); });
//app.get('/db-status-store', (req, res) => { res.send(dbStatus_STORE); });

// Ruta raiz
app.use('/api', routes);

// Servir frontend (React build)
// Servir frontend solo en producción
if (process.env.NODE_ENV === 'production') {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const buildPath = path.join(__dirname, '..', 'frontend', 'build');

    app.use(express.static(buildPath));

    // Redirigir cualquier ruta que no sea /api al index.html
    app.get('*', (req, res) => {
        if (!req.path.startsWith('/api')) {
            res.sendFile(path.join(buildPath, 'index.html'));
        }
    });
}

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor.');
});

// Iniciar el servidor
app.listen(PORT, () => { console.log(`Servidor escuchando en http://localhost:${PORT}`); });