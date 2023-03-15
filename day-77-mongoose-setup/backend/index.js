console.log("Day-77");

const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");

const MONGO_CONNECTION_STRING =
  "mongodb+srv://Usukhuusk:Sicko1219@clusteridk.mi30slj.mongodb.net/test";
const PORT = 8080;

const app = express();
app.use(express.json());
app.use(apiRouter);
mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error(error));

app.get("/", (request, response) => {
  response.send("<h1>Day-77 - Mongoose App ");
});
app.listen(PORT, console.log(`Server running @ http://localhost:${PORT}`));
