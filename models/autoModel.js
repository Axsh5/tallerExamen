const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  año: { type: Number, required: true },
  puertas: { type: Number, required: true },
  capacidad: { type: Number, required: true },
  precio: { type: Number, required: true },
},{ versionKey: false });

const vehiculo = mongoose.model('bddImcruz', autoSchema, 'vehiculo');

module.exports = vehiculo;
