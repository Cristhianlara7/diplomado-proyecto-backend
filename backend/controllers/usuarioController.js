const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;
    
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }
    
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password,
      rol
    });
    
    await nuevoUsuario.save();
    
    res.status(201).json({ msg: 'Usuario creado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select('-password');
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};