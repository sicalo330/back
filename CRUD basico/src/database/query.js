export const queries = {
    
    getEstudiantes: 'SELECT * FROM Estudiantes',

    registrarEstudiante: 'INSERT INTO Estudiantes VALUES (@id,@nombre,@calificacion)',

    deleteEstudiante: 'DELETE FROM Estudiantes WHERE id = @id',

    updateEstudiante: 'UPDATE Estudiantes SET nombre = @nombre, calificacion = @calificacion WHERE id = @id'

}