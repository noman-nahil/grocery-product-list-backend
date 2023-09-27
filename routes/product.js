const express = require("express");
const db = require("../database/db");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Product List");
});

module.exports = router;
