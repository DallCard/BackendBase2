const {Router} = require("express")
const {getUsers, getUserByID, deleteUserByID} = require("../controllers/usuarios.js")
const router = Router()

// http://localhost:4000/api/v1/usuarios
// http://localhost:4000/api/v1/usuarios?id=6





router.get("/", getUsers)
router.get("/id/:id", getUserByID)
router.delete("/", deleteUserByID)

module.exports = router