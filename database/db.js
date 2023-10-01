const mysql = require("mysql");

let db;
if (process.env.JAWSDB_URL) {
  db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
  });
} else {
  db = mysql.createConnection({
    host: "127.0.0.1",
    database: "grocery-product",
    user: "root",
    password: "",
  });
}

// Connect to the database
db.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;
