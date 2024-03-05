// import { consultar, queries } from "../database/index";
import { getConnection, sql, queries } from '../database'
const jwt = require('./../utils/jwt.js')


export const getEstudiantes = async (req, res) => {
  
    try {
        // const resConsulta = await consultar(queries.getEstudiantes, []);
        const pool = await getConnection()
        const result = await pool.request().query(queries.getEstudiantes)
        const resConsulta = result.recordsets[0]
        // const accessToken = jwt.generateAccesToken(resConsulta[0])
        // res.header('authorization', accessToken).json({
        //     message: 'Usuario Autenticado',
        //     token: accessToken
        // })
        res.json(resConsulta)
    } catch (error) {
        console.log(error)
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

export const deleteEstudiantes = async (req, res) => {

    try {
        const { idEstudiante } = req.params;

        
        const pool = await getConnection()
        const result = await pool.request().input('id', idEstudiante).query(queries.deleteEstudiante)
        const resConsulta = result.rowsAffected[0]

        if(resConsulta === 1){
            res.json('ok');
        }else{
            res.status(500).json('No fue posible eliminar el estudiante');
        }

    } catch (error) {
        res.status(500).json('Error en la API')
        console.log(error)
    }

}

export const updateEstudiantes = async (req, res) => {
    
    try {

        const { id, nombre, calificacion } = req.body;

        const pool = await getConnection()
        const result = await pool.request()
        .input('id', id)
        .input('nombre',nombre)
        .input('calificacion',calificacion)
        .query(queries.updateEstudiante)
        const resConsulta = result.rowsAffected[0]

        if(resConsulta === 1){
            res.json('ok');
        }else{
            res.status(500).json('No fue posible eliminar el estudiante');
        }

    } catch (error) {
        res.status(500).json('Error en la API')
        console.log(error)
    }

}