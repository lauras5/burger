// import mysql npm
var mysql = require('mysql');

// set up mysql connection
var connection = mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'burgers_db'
});

// make connection
connection.connect(function (e) {
  if (e) {
    console.error("error connecting: " + e.stack);
    return;
  }
  console.log("connected as id " + connection.threadId)
});

// export for ORM to use
module.exports = connection;
