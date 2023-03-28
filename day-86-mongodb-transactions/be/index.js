const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const transactionApi = require("./routes/transaction-route");
const productApi = require("./routes/product-route");

const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/transaction", transactionApi);
app.use("/product", productApi);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello Day-86 mongodb transactions</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
