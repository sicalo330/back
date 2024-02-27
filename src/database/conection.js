// import sql from 'mysql'
// import util from 'util'
import config from '../config'
import sql from 'mssql'

// const pool = sql.createPool({
//     user: config.dbUser,
//     password: config.dbPass,
//     database: config.dbDatabase,
//     host: config.dbServer
// });

// pool.getConnectionAsync = util.promisify(pool.getConnection).bind(pool);
// pool.queryAsync = util.promisify(pool.query).bind(pool);

// async function consultar(consulta, parametros){
//     const connection = await pool.getConnectionAsync();
//     try {
//       connection.queryAsync = await util.promisify(connection.query).bind(connection);
//       const resultadosLista = await connection.queryAsync(consulta, parametros);
//       return resultadosLista;
//     } catch (error) {
//       console.error(error);
//     } finally {
//       connection.release();
//     }
// }

// module.exports = {
//     consultar
//   };


const sqlConfig = {
  user: config.dbUser,
  password: config.dbPass,
  database: config.dbDatabase,
  server: config.dbServer,
  options: {
      encrypt: false,
      trustServerCertificate: true
  }
};

export async function getConnection(){
  try {
      const pool = await new sql.ConnectionPool(sqlConfig)
      return pool.connect()
  } catch (err) {
      console.log(err)
  }
}

export { sql }