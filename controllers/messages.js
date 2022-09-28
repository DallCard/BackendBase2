const { request, response } = require("express")

const rootMessage = (req=request, res=response) =>{
    const {texto1, texto2}=req.query
/*   if(!texto1 || !texto2){
    res.status(400).json({msg:  "No se han enviado los parametros necesarios"
})
   }*/

   if(!texto1){
    res.status(200).json({msg: "Falata el parametro Texto1"})}

    if(!texto2){
        res.status(400).json({msg:   "Falta el parametro Texto2"})}

        res.status(400).json({msg: texto1 + ' ' + texto2 })
    }

const hiMessage =  (req=request, res=response) =>{
    res.status(405).json({msg:"Hola Mundo"})}

const byeMessage = (req=request, res=response) =>{
    res.status(418).json({msg:"Adios mundo"})}

const postMessage= (req=request, res=response) =>{
    res.status(400).json({msg:"Mensajes Post"})}

const putMessage= (req=request, res=response) =>{
    res.status(407).json({msg:"Mensajes PUT"})}

const deleteMessage= (req=request, res=response) =>{
    res.status(411).json({msg:"Mensajes DELETE"})}

module.exports  = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}



