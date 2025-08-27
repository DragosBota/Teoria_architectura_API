//Schema de Mongoose

// 1. Importamos la librería
const mongoose = require("mongoose");


// 2. Creamos la función para este esquema en concreto, en este caso, movies.
const movieSchema = new mongoose.Schema({
    //Este primer objeto van a ser todas las propiedades que tiene que tener cada entrada
    title: { type: String, require: true, trim: true},
    duration: { type: Number, required: true, trim: true},
    category: [{ type: String, enum: ["terror", "comedia", "ficción", "romántica"]}],
    img: { type: String}
},
{ //Este segundo objeto nos va a permitir añadir diferentes opciones
    timestamps: true
});


// 3. Creamos el modelo que ha de ir siempre en singular y con la primera letra en mayúscula
const Movie = mongoose.model("Movie", movieSchema, "movies");

// 4. Exportamos
module.exports = Movie;