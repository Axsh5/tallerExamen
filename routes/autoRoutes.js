const express = require('express');
const router = express.Router();
const autoController = require('../controllers/autoController');

// Definición de las rutas relacionadas con los autos de IMCRUZ

router.get('/', autoController.obtenerTodosAutos);
router.get('/:id', autoController.obtenerAutoPorId);
router.post('/', autoController.agregaAuto);
router.put('/:id', autoController.actualizarAuto);
router.delete('/:id', autoController.eliminarAuto);

// Rutas para filtrar autos por año
router.get('/autos/anio/:anio', autoController.obtenerAutosPorAnio);

// Rutas para filtrar autos por cantidad de puertas
router.get('/autos/puertas/2', autoController.obtenerAutosCon2Puertas);

// Rutas para filtrar autos por capacidad de carga de 2 toneladas o más
router.get('/autos/capacidad/2toneladas', autoController.obtenerAutosCapacidad2ToneladasOMas);

module.exports = router;
