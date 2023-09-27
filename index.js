const express = require("express");
const product = require("./routes/product");

const app = express();
const port = 3000;
app.use(express.json());
app.use("/product", product);
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
