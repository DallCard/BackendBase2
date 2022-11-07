const modeloUsuarios ={ 
    queryGetUSers: "SELECT * FROM Usuarios",
    queryGetUserByID:`SELECT * FROM Usuarios WHERE ID = ${id}`,
    queryGetUserDeleteByID: `UPDATE Usuarios SET activo  = 'N'  WHERE ID = ${id}`
    queryUSerExist: 
queryAddUser: `
INSERT INTO Usuarios(
    Usuario,
    Nombre,
    Apellidos,
    Edad,
    Genero,
    Contraseña,
    Fecha_Nacimiento,
    Activo

) VALUES (
    '?',
    '?',
    '?',
     ?,
    '?',
    '?',
    '?', 
    '?'
)
`

queryGetUserinfo: `
SELECT Usuario, Nombre, Apellidos, Edad, Genero, Fecha_Nacimiento
FROM Usuarios
WHERE Usuario= '$?'
`
queryUpdateUsuario:
`
   
   
        UPDATE Usuarios SET
    
        Nombre= '${Nombre || user.Nombre}',
        Apellidos= '${Apellidos || user.Apellidos}',
        Edad= ${Edad || user.Edad},
        Genero= '${Genero || user.Genero }',
        Fecha_Nacimiento=  '${Fecha_Nacimiento }'
        WHERE Usuario = '${Usuario}'

`

}


module.exports = modeloUsuarios