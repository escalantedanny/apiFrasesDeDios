// instanciamos servidor express
const express = require('express');
const conectDB = require('./config/db');

// importamos CORS para poder tener control de acceso de un dominio al otro
const cors = require('cors');

// asignamos a variable CUALQUIERA la funcion express()
const app = express();
// conectar a la base de datos
conectDB();

// habilitar cors para enlace entre dominios
app.use(cors());

// habilitamos express.json
app.use(express.json({ extended: true}));

// asignamos el PUERTO  a utilizar para la conexión
const port = process.env.port || 3200;

// importamos todas nuestras rutas
app.use('/api/frases', require('./routes/frases'));

// levantamos el servidor
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`);
});
