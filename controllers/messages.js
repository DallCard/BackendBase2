const rootMessage = (req, res) =>{res.send("mensajes")}

const hiMessage =  (req, res) =>{res.send("Hola Mundo")}

const byeMessage = (req, res) =>{res.send("Adios mundo")}

const postMessage= (req, res) =>{res.send("Mensajes Post")}

const putMessage= (req, res) =>{res.send("Mensajes PUT")}

const deleteMessage= (req, res) =>{res.send("Mensajes DELETE")}

module.exports  = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}



