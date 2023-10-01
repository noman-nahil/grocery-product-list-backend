const express = require("express");
const cors = require("cors");
const product = require("./routes/product");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/product", product);
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
