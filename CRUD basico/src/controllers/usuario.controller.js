import { getConnection, queries } from '../database'

export const postUsuario = async (req, res) => {

    try {
        const {id, nombre, calificacion} = req.body

        const pool = await getConnection()
        const result = await pool.request()
        .input('id', id)
        .input('nombre', nombre)
        .input('calificacion', calificacion)
        .query(queries.registrarEstudiante)
        const resConsulta = result.rowsAffected[0]

        if(resConsulta === 1){
            res.json('ok');
        }else{
            res.status(500).json('No fue posible registrar el estudiante');
        }

    } catch (error) {
        res.status(500).json('Error en la API')
        console.log(error)
    }

}