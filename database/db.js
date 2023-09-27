const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  database: "grocery-product",
  user: "root",
  password: "",
});

// Connect to the database
db.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = db;
