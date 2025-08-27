const Movie = require("../models/movie");

/* Esta es la plantilla de la función para cualquier controlador:

const getMovies = async (req, res, next) => {
    try {
        
--> Aquí es donde añadiremos la acción


    } catch (error) {
        return res.status(400).json("Error función getMovies")
    }
};

*/



//Vamos a ver la función GET
const getMovies = async (req, res, next) => {
    try { //Aquí añadimos la acción a realizar

    //Basicamente creamos una constante movies que contendrá todas las peliculas
     const movies = await Movie.find();
     return res.status(200).json(movies);
    
    } catch (error) {
        return res.status(400).json("Error función getMovies");
    }
};


//Vamos a ver la función POST
//! Acordarse que cada vez que usemos POST hay que añadir en el index.js la función de "app.use(express.json());"

const postMovie = async (req, res, next) => {
    try {

    /* Cada vez que se quiera añadir una película, esta ha de tener el formato que hemos definido
    previamente en el modelo. Por lo tanto, toda la información que se necesita estará dentro del 
    body de la request. Así que creamos una newMovie cuyo contenido es req.body */
        const newMovie = new Movie (req.body);

    //Ahora vamos a guardar los datos en la BD
        const movieSaved = await newMovie.save();
        return res.status(201).json(movieSaved);

    } catch (error) {
        return res.status(400).json("Error función postMovie");
    }
};


//Vamos a ver la función UPDATE
const updateMovie = async (req, res, next) => {
    try {
       //Siempre actualizaremos un elemento por su id así que aqui está como lo obtenemos
       const { id } = req.params;
       
       //Seguidamente, el contenido que queramos actualizar será como si hicieramos uno nuevo 
       const updateMovie = new Movie(req.body);
       //! Pero hemos de asignarle el id que hemos recuperado ya que sino, por defecto, new Movie nos dará uno nuevo
       updateMovie._id = id;
       
       //Por último guardamos todo en la BD
       const movieUpdated = await Movie.findByIdAndUpdate(id, updateMovie, { new: true });
       return res.status(200).json(movieUpdated);


    } catch (error) {
        return res.status(400).json("Error función updateMovie")
    }
};


//Vamos a ver la función DELETE
const deleteMovie = async (req, res, next) => {
    try {
        //Esto es muy simple, para eliminar una película solo necesitamos saber cual. Recogemos el id:
        const { id } = req.params;

        //Eliminamos la película y guardamos devolviendo un mensaje un poco más elaborado.
        const movieDeleted = await Movie.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Elemento eliminado: ",
            elemento: movieDeleted
        });

    } catch (error) {
        return res.status(400).json("Error función deleteMovie")
    }
};

module.exports = {
    getMovies,
    postMovie,
    updateMovie,
    deleteMovie
};