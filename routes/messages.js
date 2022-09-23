const {Router} = require("express")

const router = Router()

const {
    rootMessage, 
    hiMessage, 
    byeMessage,
    postMessage,
    putMessage,
   deleteMessage} = require('../controllers/messages')

//router.get("", () =>{})

router.get("/", rootMessage ) // End Point

router.get("/hi", hiMessage) // End Point
//router.get("/hi"   En esta parte se le agrego el /Hi el cual al poner la ruta en el navegaor nos arrola el mensaje que se encuentra entre comilla

router.get("/bye",byeMessage  ) // End Point

router.post('/', postMessage)
router.put('/', putMessage)
router.delete('/', deleteMessage)



module.exports = router
