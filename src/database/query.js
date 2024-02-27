export const queries = {
    
    getEstudiantes: 'SELECT * FROM Estudiantes',

    registrarEstudiante: 'INSERT INTO Estudiantes VALUES (?,?,?)',

    deleteEstudiante: 'DELETE FROM Estudiantes WHERE id = ?',

    updateEstudiante: 'UPDATE Estudiantes SET nombre = ?, calificacion = ? WHERE id = ?'

}