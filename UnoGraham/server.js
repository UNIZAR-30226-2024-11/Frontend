
// 1. Construir la aplicacion
// 2. Ejecutar node server.js
// 3. Servidor en localhost:3000

const express = require('express');
const path = require('path');
const app = express();

// Ruta estática para los archivos generados por Angular
app.use(express.static(path.join(__dirname, 'dist')));

// Redireccionar todas las solicitudes a Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/uno-graham/browser/index.html'));
});

// Puerto en el que escuchará el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
