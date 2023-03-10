console.log("Day-69");

import express from "express";
import cors from "cors";
import admin from "./routes/admin.js";
import apiRouter from "./routes/api.js";
const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());
app.use("/admin", admin);
app.use("/api", apiRouter);

app.get("/", (request, response) => {
  response.send(
    "<h1 style='text-align:center; background-color:beige'>Day-69 HELLOOO</h1>"
  );
});

app.listen(PORT, () => {
  console.log(`Express app is running on http://localhost:${PORT}`);
});
