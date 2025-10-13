# PROYECTO PAGINA WEB TAEC MX
    Página web taec.com.mx re-estructurada

## BACKEND
### Crear carpeta raiz   
   $ mkdir -p backend
   $ cd backend
### Instalar paquetes
   $ npm init -y
   $ npm install express mysql2 sequelize bcryptjs express-session dotenv cors jsonwebtoken nodemailer winston winston-daily-rotate-file moment express-validator mailgun-js
### Configurar Scripts de npm dentro de package.json
   "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js"
   },    
### Tener "type": "module" en el archivo package.json [despues de "main": "server.js",]
   "type": "commonjs",   =>   "type": "module",
### Crear estructura
$ mkdir -p src/config src/controllers src/db src/middleware src/models src/routes src/utils
$ touch src/config/database.js
$ touch src/controllers/authController.js src/controllers/forgotPasswordController.js
$ touch src/db/querys.txt
$ touch src/middleware/authMiddleware.js
$ touch src/models/areaModel.js src/models/index.js src/models/roleModel.js src/models/userModel.js
$ touch src/routes/routes.js
$ touch src/utils/logger.js
$ touch .env .env.example server.js
### Para las variables SESSION_SECRET y JWT_SECRET dentro de [.env]
   $ openssl rand -hex 64
### Desinstalar paquetes
   $ npm uninstall name_paquete
### Ejecutar server   
   $ npm run dev

## FRONTEND REACTJS 19
### Crear carpeta raiz   
   $ npx create-react-app frontend
   $ cd frontend
### Instalar paquetes
   $ npm install react-router-dom react-router-hash-link axios dotenv bootstrap@5.3.7 react-slick slick-carousel date-fns
   $ npm install react-scripts@latest
   $ npm install react-helmet-async --legacy-peer-deps (Para forzar la instalación en React 19)
### Crear estructura
$ rm src/setupTests.js src/reportWebVitals.js src/App.test.js src/index.css src/app.css src/logo.svg
$ rm -Rf .git .gitignore README.md
$ mkdir -p src/components/modales src/components/navbar src/components/services src/components/utils
$ mkdir -p src/css/pages src/css/navbar src/css/utils src/hooks src/routes
$ mkdir -p src/images/pages/auth src/images/pages/home src/images/navbar
$ mkdir -p src/pages/admin src/pages/auth src/pages/others src/pages/public
$ cd ..
$ touch DEPLOYMENT-DEV.md
### Editar y borrar la importacion de img borradas en App.js y index.js
### Desinstalar paquetes
   $ npm uninstall name_paquete
### Ejecutar server   
   $ npm start