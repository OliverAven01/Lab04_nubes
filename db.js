const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: '123456',
  database: 'miapp',
  port: 3306
});
// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
  }); 
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return;
    }
    console.log('Resultados de la consulta:', results);
  });
  // No olvides cerrar la conexión cuando termines
  connection.end();

