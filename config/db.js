import mysql from "mysql2";

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'pwcompanion'
});
 
export default db;