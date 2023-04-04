import { Router } from "express";
import {
  getTheaters,
  getTheaterById,
  searchTheaters,
} from "../controller/theater.controller";
const theaterRouter = Router();

theaterRouter.get("/list", getTheaters);
theaterRouter.get("/byId/:id", getTheaterById);
theaterRouter.get("/search", searchTheaters);

export default theaterRouter;
