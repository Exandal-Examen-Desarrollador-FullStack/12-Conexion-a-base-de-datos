// db.js
const mongoose = require('mongoose');

async function main() {
  try {
    /* 
    Se sugiere que el usuario y la contraseña sean almacenadas en variables de entorno .env
    Por efecto de ejemplo se usa esta base de datos de ejemplo
    */
    await mongoose.connect('mongodb+srv://exandal:3x4nd4l321@cluster0.20lgw.mongodb.net/');
    console.log('Conectado a MongoDB');

    const userSchema = new mongoose.Schema({
      nombre: String,
      edad: Number,
    });
    const User = mongoose.model('User', userSchema);

    const users = await User.find({});

    console.log('Usuarios:', users);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Conexión cerrada');
  }
}

main();
