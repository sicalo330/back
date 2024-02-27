// import { consultar, queries } from "../database/index";
import { getConnection, sql, queries } from '../database'


export const getEstudiantes = async (req, res) => {
  
    try {

        // const resConsulta = await consultar(queries.getEstudiantes, []);
        const pool = await getConnection()
        const result = await pool.request().query(queries.getEstudiantes)
        const resConsulta = result.recordsets[0]
        res.json(resConsulta)
    } catch (error) {
        res.status(500).json('Error en la API')
    }

}

// export const getEstudiantes = async (req, res) => {
  
//     try {

//         const resConsulta = await consultar(queries.getEstudiantes, []);

//         res.json(resConsulta)
//     } catch (error) {
//         res.status(500).json('Error en la API')
//     }

// }

export const postEstudiantes = async (req, res) => {

    try {

        const { id, nombre, calificacion } = req.body;

        const resConsulta = await consultar(queries.registrarEstudiante, [id, nombre, calificacion]);

        if(resConsulta.affectedRows === 1){
            res.json('ok');
        }else{
            res.status(500).json('No fue posible registrar el estudiante');
        }

    } catch (error) {
        res.status(500).json('Error en la API')
    }

}

export const deleteEstudiantes = async (req, res) => {

    try {

        const { idEstudiante } = req.params;

        const resConsulta = await consultar(queries.deleteEstudiante, [idEstudiante]);

        if(resConsulta.affectedRows === 1){
            res.json('ok');
        }else{
            res.status(500).json('No fue posible eliminar el estudiante');
        }

    } catch (error) {
        res.status(500).json('Error en la API')
    }

}

export const updateEstudiantes = async (req, res) => {
    
    try {

        const { id, nombre, calificacion } = req.body;

        const resConsulta = await consultar(queries.updateEstudiante, [nombre, calificacion, id]);

        if(resConsulta.affectedRows === 1){
            res.json('ok');
        }else{
            res.status(500).json('No fue posible eliminar el estudiante');
        }

    } catch (error) {
        res.status(500).json('Error en la API')
    }

}