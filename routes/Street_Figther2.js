const {Router} = require("express")
const { getpersonajes, getPersonajeByID, deletePersonajesByID} = require("../controllers/juego")
const router = Router()


//GET
router.get("/", getpersonajes)
router.get("/id/:id",getPersonajeByID)

//DELETE
router.delete("/", deletePersonajesByID)


module.exports = router