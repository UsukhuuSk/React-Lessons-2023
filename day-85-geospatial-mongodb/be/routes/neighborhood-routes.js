const { Router } = require("express");
const { getNeighborhood } = require("../controller/neighborhood.controller");

const route = Router();

route.get("/list", getNeighborhood);

module.exports = route;
