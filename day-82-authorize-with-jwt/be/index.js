const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin-api");
const apiRouter = require("./routes/api");

const app = express();
const PORT = 8080;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://Usukhuusk:Sicko1219@clusteridk.mi30slj.mongodb.net/test";

app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  response.status(200).send("<h1>Hello Day-82 Authentication</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("DATABASE CONNECTED SUCCESSFULLY"))
    .catch((error) => console.error(error));
  console.log(`Server is running on http://localhost:${PORT}`);
});
