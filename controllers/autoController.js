const Auto = require('../models/autoModel');

// Lógica para trabajar con el modelo auto

// Obtener todas los autos
exports.obtenerTodosAutos = async (req, res) => {
  try {
    const autos = await Auto.find();
    res.json(autos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener autos de Imcruz' });
  }
};

// Obtener una auto por su ID
exports.obtenerAutoPorId = async (req, res) => {
  try {
    const auto = await Auto.findById(req.params.id);
    if (!auto) {
      return res.status(404).json({ error: 'Auto no encontrado' });
    }
    res.json(auto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la auto por su ID' });
  }
};

// Agregar una nueva auto
exports.agregaAuto = async (req, res) => {
  try {
    const newAuto = new Auto(req.body);
    await newAuto.save();
    res.status(201).json({ message: 'Auto agregada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar un auto' });
  }
};

// Actualizar una auto
exports.actualizarAuto = async (req, res) => {
  try {
    const actualizarAuto = await Auto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizarAuto) {
      return res.status(404).json({ error: 'Auto no encontrado' });
    }
    res.json({ message: 'Auto actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el auto' });
  }
};

// Eliminar un auto
exports.eliminarAuto = async (req, res) => {
  try {
    const autoEliminado = await Auto.findByIdAndDelete(req.params.id);
    if (!autoEliminado) {
      return res.status(404).json({ error: 'Auto no encontradoo' });
    }
    res.json({ message: 'Auto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el auto' });
  }
};


// Obtener todos los autos del año
exports.obtenerAutosPorAnio = async (req, res) => {
  try {
    const anio = req.params.anio;
    const autos = await Auto.find({ año: anio });
    res.json(autos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener autos del año' });
  }
};

// Obtener todos los autos con 2 puertas
exports.obtenerAutosCon2Puertas = async (req, res) => {
  try {
    const autos = await Auto.find({ puertas: 2 });
    res.json(autos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener autos con 2 puertas' });
  }
};

// Obtener todos los autos con capacidad de carga de 2 toneladas o más
exports.obtenerAutosCapacidad2ToneladasOMas = async (req, res) => {
  try {
    const autos = await Auto.find({ capacidad: { $gte: 2 } }); // $gte significa "mayor o igual que"
    res.json(autos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener autos con capacidad de carga de 2 toneladas o más' });
  }
};



// // Búsqueda por descripción
// exports.getPizzasByDescription = async (req, res) => {
//   try {
//     const descripcion = req.params.descripcion;
//     const pizzas = await Auto.find({ descripcion: { $regex: descripcion, $options: 'i' } });
//     res.json(pizzas);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al buscar pizzas por descripción' });
//   }
// };

// // Ordenamiento por precio descendente
// exports.getPizzasSortedByPriceDesc = async (req, res) => {
//   try {
//     const pizzas = await Auto.find().sort({ precio: -1 });
//     res.json(pizzas);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al ordenar las pizzas por precio descendente' });
//   }
// };

// // Filtrado por precio mayor a cierto valor
// exports.getPizzasPriceGreaterThan = async (req, res) => {
//   try {
//     const pizzas = await Auto.find({ precio: { $gt: parseFloat(req.params.price) } });
//     res.json(pizzas);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al filtrar pizzas por precio mayor a cierto valor' });
//   }
// };
