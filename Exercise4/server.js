const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
const dataApi = require("./dataApi");
dataApi();
let productRoutes = require("./route/productRoutes");

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my MySQl application.",
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
