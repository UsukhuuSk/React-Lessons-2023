import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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
  async function sendPage(page: any) {
    const URL = `http://localhost:8181/movies/list?page=${page}`;
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setMovies(FETCHED_JSON);
  }
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    sendPage(value);
    setPage(value);
  };

  return (
    <div className="">
      <div className=" flex justify-between flex-wrap w-px   bg-white ">
        {movies.map((movie, index) => (
          <div key={index} className="flex flex-wrap w-1/5  p-2">
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
                      movie.tomatoes?.viewer?.meter > 60
                        ? "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/certified_fresh-notext.56a89734a59.svg"
                        : "https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg"
                    }
                    alt="icon"
                    className="w-6 pr-1"
                  />
                  <p className="text-black text-md">
                    {movie.tomatoes?.viewer?.meter
                      ? movie.tomatoes?.viewer?.meter
                      : 0}
                    %
                  </p>
                </div>
                <Link href={{ pathname: "/movies/" + movie._id }} passHref>
                  <h3 className="text-black text-md w-44 break-words">
                    {movie.title}
                  </h3>
                </Link>
              </a>
            </div>
          </div>
        ))}
      </div>
      <Stack spacing={2} className="flex items-center px-50 my-10">
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
}
