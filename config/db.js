const mysql2 = require('mysql2');


const DatosConexion={
    host:process.env.DB_Host,
    user:process.env.DB_User,
    password:process.env.DB_Password,
    database:process.env.DB_Name,
    port: process.env.DB_Port,           
  ssl: {
    rejectUnauthorized:  false  
  }
}
// const connection=mysql2.createConnection(DatosConexion)
const pool = mysql2.createPool({
  ...DatosConexion,
  waitForConnections: true,
  connectionLimit: 20, // Número máximo de conexiones simultáneas
  queueLimit: 0,
  connectTimeout: 10000
}).promise();

module.exports=pool;