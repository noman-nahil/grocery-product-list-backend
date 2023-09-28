const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Product List");
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
