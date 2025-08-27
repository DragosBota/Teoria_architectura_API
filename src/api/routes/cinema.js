//Nos traemos express y extraemos el método Router

const { getCinemas, postCinema, updateCinema, deleteCinema, getCinema } = require("../controllers/cinema");

const cinemasRouter = require("express").Router();

//Vamos a crear una ruta para cada controlador

cinemasRouter.get("/", getCinemas);
cinemasRouter.post("/", postCinema);
cinemasRouter.put("/:id", updateCinema);
cinemasRouter.delete("/:id", deleteCinema);
cinemasRouter.get("/:id", getCinema);


module.exports = cinemasRouter;