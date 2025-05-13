const pool = require('../../config/db');

exports.getEstadosActivos = async () => {
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

exports.getEstados=async()=>{
    let connection;
    try {
        connection = await pool.getConnection();
        const [results] = await connection.execute('SELECT * from Estados');

        return results;
    } catch (error) {
        console.error('Error en la base de datos:', error);
        throw error; // se maneja en el controlador
    } finally {
        if (connection) connection.release();
    }
}

exports.getEstado=async(id)=>{
    let connection;
    try {
        connection = await pool.getConnection();
        const [results] = await connection.execute(
        `SELECT * from Estados where id= ?`
        [id]);

        return results;
    } catch (error) {
        console.error('Error en la base de datos:', error);
        throw error; // se maneja en el controlador
    } finally {
        if (connection) connection.release();
    }
}

exports.postEstado=async( activo, informacion, ID_Estado)=>{
    let connection;
    try {
        connection = await pool.getConnection();
        const[results]=await connection.execute(
        "UPDATE `webcdc`.`estados` SET `info` = ?, `activo` = ? WHERE `id` = ?;",
            [informacion,activo,ID_Estado]
        );

        return results;
    } catch (error) {
        console.error('Error en la base de datos:', error);
        throw error; // se maneja en el controlador
    } finally {
        if (connection) connection.release();
    }
}

