require("dotenv").config();
const express = require("express");
// importar la función
const { connectDB } = require("./src/config/db");
const moviesRouter = require("./src/api/routes/movie");
const cinemasRouter = require("./src/api/routes/cinema")

const app = express();

// conectar con la bbdd
connectDB();


//! Línea imprescindible para configurar que mi servidor sea capaz de recoger datos en formato JSON
app.use(express.json());

//Creamos una app para nuestras rutas de Movies
app.use("/api/v1/movies", moviesRouter);

//creamos una app para nuestras rutas de Cinemas
app.use("/api/v1/cinemas", cinemasRouter);





//Estyo significa que cualquier otra ruta que no sea las que nosotros hemos declarado, nos dará un error
app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found")
});


app.listen(5173, () => {
  console.log("<http://localhost:5173>");
});



