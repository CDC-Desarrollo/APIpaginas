const pool = require('../../config/db');

exports.putContacto = async () => {
    let connection;
    try {
      connection = await pool.getConnection();
      const [results] = await connection.execute('SELECT * FROM vista_EstadosActivos');
  
      return results;
    } catch (error) {
      console.error('Error en la base de datos:', error);
      throw error; // se maneja en el controlador
    } finally {
      if (connection) connection.release();
    }
};