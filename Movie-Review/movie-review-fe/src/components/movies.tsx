import React from "react";
import { useState, useEffect } from "react";

export default function Movies(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([]);
  async function fetchMovies(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8080/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
    console.log("testgit");
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="flex flex-wrap max-w-screen-lg justify-around ">
      {movies.map((movie, index) => (
        <div key={index} className=" flex flex-wrap w-40">
          <img src={movie.poster} alt="poster" className="" />
        </div>
      ))}
    </div>
  );
}
