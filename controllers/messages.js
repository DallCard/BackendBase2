const rootMessage = (req, res) =>{res.send("mensajes")}

const hiMessage =  (req, res) =>{res.send("Hola Mundo")}

const byeMessage = (req, res) =>{res.send("Adios mundo")}

module.exports  = {rootMessage, hiMessage, byeMessage}

