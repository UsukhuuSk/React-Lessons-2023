console.log("Day-56 - REST API");

const { response } = require("express");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

const PORT = 8080;
app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Express REST API is Running </h1>");
});

app.get("/timers", (request, response) => {
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }

    const timerData = JSON.parse(readData);
    console.log(timerData);
    console.log(typeof timerData);

    response.json({
      status: "success",
      data: timerData,
    });
  });
});
app.delete("/timers", (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file not found",
        data: [],
      });
    }
    const readObject = JSON.parse(readData);
    const filtered = readObject.filter((t) => t.id !== body.timerId);

    fs.writeFile("./data/data.json", JSON.stringify(filtered), (writeError) => {
      if (writeError) {
        response.json({
          status: "write file error",
          data: [],
        });
      }
      response.json({
        status: "success",
        data: filtered,
      });
    });
  });
});

app.post("/timers", (request, response) => {
  const body = request.body;
  fs.readFile("./data/data.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file does not exist",
        data: [],
      });
    }
    const dataObject = JSON.parse(readData);
    dataObject.push(body);
    fs.writeFile(
      "./data/data.json",
      JSON.stringify(dataObject),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "Error during file write",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: dataObject,
        });
      }
    );
  });
});

app.put("/timers", (request, response) => {
  fs.readFile("./data/data.json", (readError, readData) => {
    if (readError) {
      response.json({
        status: "success",
        data: [],
      });
    }
    const savedData = JSON.parse(readData);
    const changedData = savedData.map((d) => {
      if (d.title === request.body.title) {
        (d.project = request.body.project),
          (d.id = request.body.id),
          (d.elapsed = request.body.elapsed);
      }
      return d;
    });
    fs.writeFile(
      "./data/users.json",
      JSON.stringify(changedData),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file write error",
            data: [],
          });
        }
        response.json({
          status: "success",
          data: changedData,
        });
      }
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
