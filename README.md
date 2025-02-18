# Conexión a Base de Datos con MongoDB

Este README.md contiene **todo** el contenido del proyecto en un solo archivo. El proyecto demuestra cómo conectarse a una base de datos MongoDB utilizando Mongoose en Node.js, realizar una consulta para obtener todos los registros de la colección `users` y mostrar los resultados en la consola.

---

## Descripción

El proyecto utiliza Mongoose para conectarse a una base de datos MongoDB alojada en Atlas. Una vez establecida la conexión, se define un esquema para la colección `users` (en este ejemplo, el modelo se llama `User` y espera que los documentos tengan los campos `nombre` y `edad`). Luego, se realiza una consulta para obtener todos los registros y se imprimen en la consola. Finalmente, se cierra la conexión a la base de datos.

---

## Código

### Archivo: `index.js`

```javascript
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
