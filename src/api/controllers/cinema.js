const Cinema = require("../models/cinema");

const getCinemas = async (req, res, next) => {
    try {
        
        const cinemas = await Cinema.find();
        return res.status(200).json(cinemas);

    } catch (error) {
        return res.status(400).json("Error en la función getCinemas");
    }
};


const postCinema = async (req, res, next) => {
    try {
        
        const newCinema = new Cinema (req.body);

        const cinemaSaved = await newCinema.save();
        return res.status(201).json(cinemaSaved);

    } catch (error) {
        return res.status(400).json("Error en la función postCinema");
    }
};

const updateCinema = async (req, res, next) => {
    try {
        
        const {id} = req.params;

        const updateCinema = new Cinema(req.body);
        updateCinema._id = id;

        const cinemaUpdated= await Cinema.findByIdAndUpdate(id, updateCinema, {new: true});
        return res.status(200).json(cinemaUpdated);

    } catch (error) {
        return res.status(400).json("Error en la función updateCinema");
    }
};

const deleteCinema = async (req, res, next) => {
    try {
        const {id} = req.params;

        const cinemaDeleted = await Cinema.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Elemento eliminado: ",
            elemento: cinemaDeleted
        });

    } catch (error) {
        return res.status(400).json("Error en la función deleteCinema")
    }
};


//Hacemos un controlador que nos va a dar un cinema en función de su id

const getCinema = async (req, res, next) => {
    try {
        const {id} = req.params;
        
        const cinema = await Cinema.findById(id).populate("movies");
        return res.status(200).json(cinema)

    } catch (error) {
        return res.status(400).json("Error en la función de conexión getCinema")
    }
};


//! Si queremos que al buscar un cine por su id nos devuelva también su cartelera desglosada (no solo ids de peliculas)...
//! añadimos al final de "findById(id)" un .populate("movies")
//! OJO que el movies del populate hace referencia a como he llamado yo al campo del módulo (address, name y movies), no al modelo ni a la colección ni nada




module.exports = {
    getCinemas,
    postCinema,
    updateCinema,
    deleteCinema,
    getCinema,
}