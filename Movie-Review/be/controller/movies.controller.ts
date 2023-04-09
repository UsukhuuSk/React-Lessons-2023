import movieModel from "../models/movies.model";
import { Request, Response } from "express";

export const getMovies = async (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 0;
  const moviesPerPage: number = Number(req.query.moviesPerPage) || 32;
  try {
    const movies = await movieModel
      .find()
      .limit(moviesPerPage)
      .skip(moviesPerPage * page)
      .sort({ year: -1 });

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
