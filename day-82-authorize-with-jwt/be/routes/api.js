const express = require("express");
const apiRouter = express.Router();
const auth = require("../middleware/auth");

apiRouter.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: "Successfully got the protected route",
  });
});
apiRouter.post("/unprotected", (request, response) => {
  response.status(200).json({
    data: "Successfully got the unprotected route",
  });
});
module.exports = apiRouter;
