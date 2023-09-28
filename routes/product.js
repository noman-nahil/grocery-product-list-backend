const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM product_list", (error, results) => {
    if (error) {
      console.error("Error querying the database:", error);
      res.status(500).json({ error: "An error occurred" });
    } else {
      res.json(results);
    }
  });
});
router.post("/", (req, res) => {
  const { name, price, description, link } = req.body;
  if (name !== "" && price !== "" && description !== "" && link !== "") {
    //console.log(req.body);
    const sql = `INSERT INTO product_list (name, price, description, link) VALUES ('${name}', ${price}, '${description}', '${link}')`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      res.json({ message: "Item added" });
    });
  } else {
    console.log("Something is missing");
  }
});

module.exports = router;
