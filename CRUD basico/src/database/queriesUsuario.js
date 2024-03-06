export const queriesUsuario = {
    //postUsuario: 'INSERT INTO Usuarios VALUES (@correo, @contraseña)',
    validarUsuario: 'SELECT * FROM Usuarios WHERE correo LIKE @correo AND contraseña LIKE @contraseña'
    //select * from Usuarios where correo like '@correo' and contraseña like '@contraseña'    
}