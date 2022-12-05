const { request, response } = require("express");
const pool=require("../db/connection");
const modeloPersonajes = require("../models/juego");

const getpersonajes= async(req=request,res=response)=>{
    
    let conn;

    try{
        conn = await pool.getConnection()
        const [personajes] = await conn.query(modeloPersonajes.queryGetpersonajes,(error)=>{throw new error})
        if(!personajes){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({personajes})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getPersonajeByID = async (req=request,res=response)=>{
    const {id}=req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [personajes] = await conn.query(modeloPersonajes.queryGetPersonajeByID,[id],(error)=>{throw new error})
        if(!v){
            res.status(404).json({msg:`No se encontró registro con el ID=${id}`})
            return
        }
        res.json({personajes})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deletePersonajesByID = async (req=request,res=response)=>{
    const {id}=req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloPersonajes.queryDeletePersonajeByID,[id],(error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar el registro con el ID=${id}`})
            return
        }
        res.json({msg:`El personaje con el ID=${id} se elimino correctamente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}
module.exports={getpersonajes, getPersonajeByID,deletePersonajesByID}