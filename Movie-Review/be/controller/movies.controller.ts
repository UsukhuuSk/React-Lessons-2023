import movieModel from "../models/movies.model";
import { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response) => {
  // const page: number = Number(req.query.page);
  // const moviesPerPage: number = Number(req.query.moviesPerPage);
  try {
    const movies = await movieModel.find({}).limit(20);
    // .skip(moviesPerPage * page);
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
export const getMoviesById = async (req: Request, res: Response) => {
  try {
    const movies = await movieModel.find({
      _id: req.params.id,
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ data: [] });
  }
};
