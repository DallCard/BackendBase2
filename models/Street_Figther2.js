const modeloPersonajes = {
    queryGetpersonajes: "SELECT * FROM juego",
    queryGetPersonajeByID: `SELECT * FROM Asphalt8 WHERE ID=?`,
    queryDeletePersonajeByID:  `UPDATE Asphalt8 SET Activo='N' WHERE ID=?`

}

module.exports=modeloPersonajes