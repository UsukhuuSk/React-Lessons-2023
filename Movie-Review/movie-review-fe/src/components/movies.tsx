import React from "react";
import { useState, useEffect } from "react";

export default function Movies(): JSX.Element {
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
    <div className=" flex justify-between flex-wrap w-px h-full  bg-white ">
      {movies.map((movie, index) => (
        <div key={index} className=" flex flex-wrap w-1/5 px-3 ">
          <img
            src={
              movie.poster
                ? movie.poster
                : "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ef4b93ef8f7157de3f97ae1ff5d21b56_0526bb98-1f4a-4da5-b928-b0025f5e6371_480x.progressive.jpg?v=1573585487"
            }
            alt="poster"
            className="h-px rounded"
          />
          <div>
            <a href="">
              <div className="flex">
                <img
                  src={
                    movie.tomatoes.viewer.meter > 60
                      ? "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg"
                      : "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg"
                  }
                  alt="icon"
                  className="w-6 pr-1"
                />
                <p className="text-black text-md">
                  {movie.tomatoes.viewer.meter
                    ? movie.tomatoes.viewer.meter
                    : 0}
                  %
                </p>
              </div>
              <p className="text-black text-md w-44 break-words ">
                {movie.title}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
