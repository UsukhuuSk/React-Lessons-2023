import React from "react";
import { useState, useEffect } from "react";

export default function Movies(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([]);
  async function fetchMovies(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8181/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className=" flex justify-between flex-wrap w-px h-full  bg-white ">
      {movies.map((movie, index) => (
        <div key={index} className=" flex flex-wrap w-1/5 px-3 pb-9 pt-4">
          <img src={movie.poster} alt="poster" className="h-full rounded" />
          <p className="text-white text-xs">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
