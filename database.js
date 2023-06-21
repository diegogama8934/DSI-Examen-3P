const fs = require('fs');

// Leer el archivo JSON
const jsonData = fs.readFileSync('data.json');
const data = JSON.parse(jsonData);

// Obtener todos los usuarios
function getAllUsuarios() {
  return data.usuarios;
}

// Obtener un usuario por ID
function getUsuarioById(id) {
  return data.usuarios.find(usuario => usuario.id === id);
}

// Agregar un nuevo usuario
function addUsuario(usuario) {
  data.usuarios.push(usuario);
  guardarDatos();
}

// Guardar los cambios en el archivo JSON
function guardarDatos() {
  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  addUsuario
};