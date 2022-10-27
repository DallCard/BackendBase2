const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID, addUser, updateUserByUsuario} = require("../controllers/usuarios.js")
const router = Router()

// http://localhost:4000/api/v1/usuarios
// http://localhost:4000/api/v1/usuarios?id=6




//GET
router.get("/", getUsers)
router.get("/id/:id", getUserByID)

//POST
router.post("/", addUser)

// PUT//
router.put("/", updateUserByUsuario)

//DELETE
router.delete("/", deleteUserByID)


module.exports = router