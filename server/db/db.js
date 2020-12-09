require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : `${process.env.DB_USER}`,
  password : `${process.env.DB_PASS}`,
  database : 'aprender_espanol'
});

console.log('db file connected')
 
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

exports.connection = connection