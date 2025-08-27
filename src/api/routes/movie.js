const { getMovies, postMovie, updateMovie, deleteMovie } = require ("../controllers/movie");


//Nos traemos express y extraemos el método Router

const moviesRouter = require("express").Router();

//Vamos a crear una ruta para cada controlador

moviesRouter.get("/", getMovies);
moviesRouter.post("/", postMovie);
moviesRouter.put("/:id", updateMovie);
moviesRouter.delete("/:id", deleteMovie);


module.exports = moviesRouter;