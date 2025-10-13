# PROYECTO PAGINA WEB TAEC MX
    Página web taec.com.mx re-estructurada

## BACKEND
### Permisos en carpetas
   $ sudo chown -R ubuntu:ubuntu /proyecto-name
### Instalar paquetes
   $ cd /proyecto-name/backend
   $ npm install 
### Crear archivo .env
   $ cd /proyecto-name/backend
   $ sudo cp .env.example .env
### Para la variable SESSION_SECRET y JWT_SECRET
   $ cd /proyecto-name/backend
   $ openssl rand -hex 64
   ## Copiamos y pegamos el valor obtenido dentro del .env
### Configurar PM2 para Ejecutar el Backend
   $ cd /home/ubuntu
   $ npm install pm2@latest -g
   ## Iniciar el backend con PM2
      cd /proyecto-name/backend
   ## Inicia tu aplicación backend con PM2: server.js archivo principal de tu backend
      $ pm2 start server.js --name proyecto-name
   ## Configura PM2 para que se inicie automáticamente al reiniciar el servidor
      $ pm2 startup
      ## Esto generará un comando que debes ejecutar. Copia y pega ese comando en tu terminal
      $ pm2 save
   ## Comando PM2 importanes
      ## Ver el estado de PM2: $ pm2 status
      ## Ver los logs de la aplicación: $ pm2 logs proyecto-name
      ## Reiniciar el proceso: $ pm2 restart proyecto-name
      ## Detener la aplicación con PM2: $ pm2 stop proyecto-name
      ## Eliminar la aplicación de PM2: $ pm2 delete proyecto-name
      ## Verificar que la aplicación fue eliminada: $ pm2 list

## FRONTEND REACTJS 19
### Instalar paquetes
   $ cd /proyecto-name/frontend
   $ npm install 
   ## Por si sale error: ERESOLVE could not resolve
   $ npm install --legacy-peer-deps
### Compilar el frontend
   $ cd /proyecto-name/frontend
   $ npm run build 


## Hay que volver a compilar y reiniciar PM2 cada que haya un cambio o un pull del proyecto