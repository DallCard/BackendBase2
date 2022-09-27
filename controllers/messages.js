const { request, response } = require("express")

const rootMessage = (req=request, res=response) =>{
    res.status(404).json({msg:"mensajes"})}

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



