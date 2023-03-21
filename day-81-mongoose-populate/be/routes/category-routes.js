const express = require("express");
const categoryRouter = express.Router();
const Category = require("../models/category");

categoryRouter.get("/list", async (request, response) => {
  const result = await Category.find({});
  response.status(200).json({
    data: result,
  });
});
categoryRouter.post("/create", async (request, response) => {
  const body = request.body;
  const result = await Category.create(body);
  response.status(200).json({
    data: result,
  });
});

categoryRouter.delete("/delete", async (request, response) => {
  const body = request.body;
  const result = await Category.deleteMany(body);
  response.status(200).json({
    data: result,
  });
});

module.exports = categoryRouter;
