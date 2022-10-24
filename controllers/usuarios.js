const {request, response } = require ("express");
const pool = require ("../db/connection")
const getUsers = async (req = request, res = response) => {
    let conn;
    try {
        conn = await pool.getConnection()
        const users = await conn.query("SELECT * FROM Usuarios", (error) => {throw new Error(error)})
        if (!users){
            res.status(404).json({msg: "No se encontraron registros"})
            return
        }         
        res.json({users}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}
const getUserByID = async (req = request, res = response) => {
    const {id} = req.params
    let conn;
    try {
        conn = await pool.getConnection()
        const [user] = await conn.query(`SELECT * FROM Usuarios WHERE ID = ${id}`, (error) => {throw new Error(error)})
        if (!user){
            res.status(404).json({msg: `No se encontro registro con el ID ${id}`})
            return
        }         
        res.json({user}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}


const deleteUserByID = async (req = request, res = response) => {
    const {id} = req.query
    let conn;
    try {
        conn = await pool.getConnection()
        const useraffectedRows= await conn.query(`UPDATE Usuarios SET activo  = 'N'  WHERE ID = ${id}`, (error) => {throw new Error(error)})
        //consle.log(userDelete)
        if (useraffectedRows === 0){
            res.status(404).json({msg: `No se puso eliminar el registro con el ID ${id}`})
            return
        }    
        res.json({msg: `el usuario con ID ${id}se elimino satisfactoriamente`}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}
module.exports = {getUsers, getUserByID, deleteUserByID }