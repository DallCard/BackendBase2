const express = require('express')
const messagesRouter = require('./routes/messages')
const usuariosRouter = require('./routes/usuarios')
const cors = require("cors")
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            messages: "/api/v1/messages",
            usuarios: "/api/v1/usuarios"

        }
        this.middlewares()
        this.routes()
       

    }

    routes(){
        //this.app.get('/', (req, res) =>{
          //  res.send('Hellow Word')
   // }) // End Point

   this.app.use(this.paths.messages, messagesRouter)
   this.app.use(this.paths.usuarios, usuariosRouter)


}
middlewares(){
    this.app.use(cors())//permite solictudes del origen usado
    this.app.use(express.json())// Habilita la lectura de contenido de formato json 
}

listen(){
    this.app.listen(process.env.PORT,() => {
    // console.log("Backend en ejecucion en el puerto", process.env.PORT)
        console.log(process.env.PORT);
})
}
}

module.exports = Server