import React from "react";
import { useState, useEffect } from "react";

export default function Detail(): JSX.Element {
  const [movies, setMovies] = useState<IMovies[]>([]);
  async function fetchMovies(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8080/movies/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index}>
          <img src={movie.poster} alt="" />
        </div>
      ))}
    </div>
  );
}
