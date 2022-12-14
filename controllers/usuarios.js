const {request, response } = require ("express");
const bcryptjs =require ("bcryptjs")
const pool = require ("../db/connection");
const {modeloUsuarios, updateUsuario}= require ("../models/usuarios");

//const { use } = require("../routes/usuarios");
const getUsers = async (req = request, res = response) => {
    let conn;
    try {
        conn = await pool.getConnection()
        const [users] = await conn.query(modeloUsuarios.queryGetUsers, (error) => {throw new Error(error)})
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
        const [user] = await conn.query(modeloUsuarios.queryUsersByID,[id],(error) => {throw new Error(error)})
        if (!user){
            res.status(404).json({msg: `No se encontro registro con el ID=${id}`})
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
        const useraffectedRows= await conn.query(modeloUsuarios.queryDeleteUserByID, [id], (error) => {throw new Error(error)})
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


const addUser= async (req = request, res = response) => {


    const {
        Usuario, 
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrase??a,
        Fecha_Nacimiento = '1900-01-01',
        Activo
  
} = req.body

if(
    !Usuario||
    !Nombre||
    !Apellidos||
    !Edad||
    !Contrase??a||
    !Activo

) {
    res.status(400). json({msg: "Falta informacion del Usuario"})
    return
}
    let conn;
    try {
        conn = await pool.getConnection()
        const [user] = await conn.query(modeloUsuarios.queryUserExists,[Usuario])
       
        if (user){
            res.status(403).json({msg: `El usuario ${Usuario} ya se encuentra registrado `})
            return
        }    

        const salt  = bcryptjs.genSaltSync()
        const contrase??aCifrada = bcryptjs.hashSync(Contrase??a, salt)


        const {affectedRows}= await conn.query(modeloUsuarios.queryAddUser,[ 
            Usuario,
            Nombre,
            Apellidos,
            Edad,
            Genero ||'',
            contrase??aCifrada,
            Fecha_Nacimiento,
            Activo
        ], (error) => {throw new Error(error)})
        //consle.log(userDelete)
        if (affectedRows === 0){
            res.status(404).json({msg: `No se pudo agregar el registro del usuario ${Usuario}`})
            return
        }    
        res.json({msg: `el usuario ${Usuario}se agrego correctamente`}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}



const updateUserByUsuario= async (req = request, res = response) => {


    const {
        Usuario, 
        Nombre,
        Apellidos,
        Edad,
        Genero,
        Contrase??a,
        Fecha_Nacimiento = "1900-01-01"
       
  
} = req.body

if(
    !Usuario||
    !Nombre||
    !Apellidos||
    !Edad||
    !Contrase??a

) {
    res.status(400). json({msg: "Falta informacion del Usuario"})
    return
}
    let conn;
    try {
        conn = await pool.getConnection()

        const [user] = await conn.query(modeloUsuarios.queryGetUserInfo,[Usuario])
       
        if (!user){
            res.status(403).json({msg: `El usuario ${Usuario} no se encuentra registrado `})
            return
        }    
        const {affectedRows}= await conn.query(updateUsuario(
            Nombre,
            Apellidos,
            Edad,
            Genero,
            Fecha_Nacimiento,
            Usuario
        ),
        (error) => {throw new Error(error)})

        //consle.log(userDelete)
        if (affectedRows === 0){
            res.status(404).json({msg: `No se pudo actualizar el registro del usuario ${Usuario}`})
            return
        }    
        res.json({msg: `el usuario ${Usuario} se actualizo correctamente`}) 
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    } finally{
        if (conn){
            conn.end()
        }
    }
}


const signIn = async (req=request,res=response)=>{
    const {
        Usuario,
        Contrase??a
    }=req.body

    if(
        !Usuario||
        !Contrase??a
    ){
        res.status(400).json({msg:"Falta informaci??n del usuario."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloUsuarios.querySignIn,[Usuario])

        if(!user || user.Activo == 'N'){
            let code = !user ? 1: 2;
            res.status(403).json({msg:`El usuario o la contrase??a son incorrectos`,errorCode:code})
            return
        }

        const accesoValido = bcryptjs.compareSync(Contrase??a,user.Contrase??a)

        if(!accesoValido){
            res.status(403).json({msg:`El usuario o la contrase??a son incorrectos`,errorCode:"3"})
            return
        }


        res.json({msg:`El usuario ${Usuario} ha iniciado seci??n satisfactoriamenente`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


const newPassword = async (req=request,res=response)=>{
    const {
        Usuario,
        AContrase??a,
        NContrase??a
    }=req.body

    if(
        !Usuario||
        !AContrase??a||
        !NContrase??a
    ){
        res.status(400).json({msg:"Faltan informacion del usuario."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()
        const [user]=await conn.query(modeloUsuarios.querySignIn,[Usuario])

        if(!user || user.Activo == 'N'){
            let code = !user ? 1: 2;
            res.status(403).json({msg:`El usuario o la contrase??a son incorrectos`,errorCode:code})
            return
        }

        const accesoValido = bcryptjs.compareSync(AContrase??a,user.Contrase??a)

        if(!accesoValido){
            res.status(403).json({msg:`El usuario o la contrase??a son incorrectos`,errorCode:"3"})
            return
        }
        
        const salt  = bcryptjs.genSaltSync()
        const contrase??aCifrada = bcryptjs.hashSync(NContrase??a, salt)



        const {affectedRows}= await conn.query(modeloUsuarios.queryUpdatePassword,[contrase??aCifrada,Usuario], (error) => {throw new Error(error)})

        //consle.log(userDelete)
        if (affectedRows === 0){
            res.status(404).json({msg: `No se pudo actualizar el registro del usuario ${Usuario}`})
            return
        }    
        res.json({msg: `el usuario ${Usuario} se actualizo correctamente`}) 
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}


module.exports = {getUsers,getUserByID,deleteUserByID,addUser, updateUserByUsuario, signIn, newPassword}