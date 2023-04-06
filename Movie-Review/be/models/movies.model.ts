import mongoose, { Date, Schema } from "mongoose";
interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}
interface IImdb {
  rating: number;
  votes: number;
  id: number;
}
interface ITomatoes {
  viewer: IViewer;
  lastUpdated: Date;
}
interface IViewer {
  rating: number;
  numReviews: number;
  meter: number;
}
interface IMovies {
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  num_mflix_comments: number;
  title: string;
  fullplot: string;
  countries: [string];
  released: Date;
  directors: [string];
  rated: string;
  awards: IAwards;
  lastupdated: string;
  year: number;
  imdb: IImdb;
  type: string;
  tomatoes: ITomatoes;
}
const movieSchema: Schema = new Schema({});
const movieModel = mongoose.model<IMovies>("Movies", movieSchema);

export default movieModel;
