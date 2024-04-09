const express = require('express');
const app = express();
const mongoose = require('mongoose');
const autoRoutes = require('./routes/autoRoutes');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/bddIncruz', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos de Imcruz Cochabamba'))
  .catch(err => console.error('Hubo un error al conectar a la base de datos:', err));

// Middleware para parsear JSON
app.use(express.json());

// Rutas de la aplicación
app.use('/vehiculos', autoRoutes);

// Puerto en el que escucha el servidor
const port = 4000;
app.listen(port, () => console.log(`Mi servidor esta en el puerto: ${port}`));
