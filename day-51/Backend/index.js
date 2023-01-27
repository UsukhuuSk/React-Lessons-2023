console.log("Day-51 : API Express JS");
const { response, request } = require("express");
const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

let data = [
  {
    id: 1,
    name: "usukhuu",
    major: "nothing",
  },
];

app.get("/", (request, response) => {
  response.send("Here i am, a brutally powerful Express Server");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  console.log(request.body);
  const length = data.length;
  const requestData = {
    id: length + 1,
    name: request.body.name,
    major: request.body.major,
  };
  data = [...data, requestData];
  data.push(requestData);
  response.json(data);
});

app.delete("/data", (request, response) => {
  const deletedData = data.filter((d) => d.id !== request.body.id);
  data = deletedData;
  response.json(data);
});

app.put("/data", (request, response) => {
  const found = data.filter((d) => d.id === request.body.id);
  console.log(found);
  console.log(request.body);
  console.log(data);

  data = [...found, request.body];
  response.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
