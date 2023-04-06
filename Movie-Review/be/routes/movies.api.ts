import { Router } from "express";
import { getMovies, getMoviesById } from "../controller/movies.controller";

const movieRouter = Router();

movieRouter.get("/list", getMovies);
movieRouter.get("/byId/:id", getMoviesById);

export default movieRouter;
