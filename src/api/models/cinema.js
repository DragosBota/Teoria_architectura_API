const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema({
    address: {type: String, requires: true, trim: true},
    name: {type: String, requires: true, trim: true},
    //Hasta aquí todo normal, igual que cualquier esquema
    //! Aquí vamos a relacionar dos colecciones entre si mediante el id y el MODELO al que hacemos referencia
    //! OJO que el nombre del modelo ha de ser exactamente igual que el que hemos puesto como primer parámetro endicho modelo. En este caso "Movie"
    movies: [{type: mongoose.Types.ObjectId, ref: 'Movie'}]
},{
    timestamps: true
})

const Cinema = mongoose.model("Cinema", cinemaSchema, "cinemas")

module.exports = Cinema;