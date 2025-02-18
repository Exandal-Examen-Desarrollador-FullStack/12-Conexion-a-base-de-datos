// db.js
const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb+srv://exandal:3x4nd4l321@cluster0.20lgw.mongodb.net/', {
      useUnifiedTopology: true
    });
    console.log('Conectado a MongoDB');

    const userSchema = new mongoose.Schema({
      nombre: String,
      edad: Number
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
