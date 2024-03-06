import { getConnection } from '../database';
import { queriesUsuario } from '../database/queriesUsuario';
const jwt = require('./../utils/jwt.js')

export const validarUsuario = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;

        const pool = await getConnection();
        const result = await pool.request()
            .input('correo', correo)
            .input('contraseña', contraseña)
            .query(queriesUsuario.validarUsuario);

        const resConsulta = result.rowsAffected[0];

        if (resConsulta === 1) {
            const token = jwt.generateAccesToken({correo})
            res.json({
                token: token
            });
        } else {
            res.status(500).json('No fue posible registrar el estudiante');
        }
    } catch (error) {
        res.status(500).json('Error en la API');
        console.log(error);
    }
};

