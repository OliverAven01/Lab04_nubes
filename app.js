const express = require('express');
const app = express();
const clientes = require('./routes/clientes');
const productos = require('./routes/productos');

app.use(express.static('public'));
app.use('/clientes', clientes);
app.use('/productos', productos);

app.listen(9000, () => console.log('Servidor corriendo en puerto 9000'));

