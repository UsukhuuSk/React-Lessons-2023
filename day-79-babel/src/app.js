import express from "express";
const app = express();
import helloRouter from "./routes/api";

const PORT = 8080;
app.use(helloRouter);

app.get("/", (request, response) => {
  response.status(200).send("<h1>Day-79 - Babel</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running @ http://localhost:${PORT}`);
});
