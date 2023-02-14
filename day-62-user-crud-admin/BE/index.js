console.log("Day-62 - User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const PORT = 8081;
const app = express();

app.use(cors());
app.use(express.json());

///API user register
app.post("/register", (request, response) => {
  const body = request.body;
  console.log(body);
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "read file error",
        data: [],
      });
    }
    const readDataObj = JSON.parse(readData);

    fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
      if (readError) {
        response.json({
          status: "file read error",
          data: [],
        });
      }
      const roleData = JSON.parse(readData);
      const roleName = roleData.filter((role) => role.id === body.role)[0];
      const userData = {
        ...body,
        role: roleName,
      };
      readDataObj.push(userData);
      //fs write

      fs.writeFile(
        "./data/users.json",
        JSON.stringify(readDataObj),
        (writeError) => {
          if (writeError) {
            response.json({
              status: "file write error",
            });
          }
          response.json({
            status: "success",
            data: readDataObj,
          });
        }
      );
    });
  });
});
///api get all users
app.get("/users", (request, response) => {
  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

/// API get all user roles
app.get("/users/roles", (request, response) => {
  fs.readFile("./data/userRole.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file doesnt exit",
      });
    }
    response.json({
      status: "success",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http:localhost:${PORT}`);
});
