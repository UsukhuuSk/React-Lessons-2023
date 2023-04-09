import React from "react";
import mongoose, { Date, Schema } from "mongoose";
import { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "@/components/navigation.bar";
import styles from "@/styles/Home.module.css";
import moment from "moment";

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
  viewer: {
    rating: number;
    numReviews: number;
    meter: number;
  };
  lastUpdated: Date;
}

interface IMovies {
  plot: string;
  genres: [string];
  runtime: number;
  rated: string;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: IAwards;
  lastupdated: Date;
  year: Date;
  imdb: IImdb;
  countries: [string];
  tomatoes: ITomatoes;
}

interface IComments {
  name: string;
  email: string;
  movie_id: { type: mongoose.Schema.Types.ObjectId };
  text: string;
  date: Date;
}

export default function Movies({ data }: { data: any }): JSX.Element {
  return (
    <div>
      <div className={styles.main}>
        <NavigationBar />
        <div className="text-black max-w-screen-xl">
          <div className="flex">
            <img
              src={
                !data[0].poster
                  ? "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ef4b93ef8f7157de3f97ae1ff5d21b56_0526bb98-1f4a-4da5-b928-b0025f5e6371_480x.progressive.jpg?v=1573585487"
                  : data[0].poster
              }
              className="h-auto w-4/12	 rounded m-5 shadow-2xl"
            />
            <div className="w-4/6 m-5 p-5 font-sans rounded-lg bg-neutral-200 flex flex-col justify-center items-center">
              <h2 className="text-5xl font-bold text-center">
                {data[0].title}
              </h2>
              <h3 className="p-2 text-slate-700">
                {data[0].year}, {data[0].genres}
              </h3>
              <div className="flex justify-between mt-5">
                <div>
                  <div className="flex m-5 ">
                    <img
                      src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/tomatometer/tomatometer-rotten.f1ef4f02ce3.svg"
                      className="w-16 mr-2"
                    />
                    <p className="text-5xl font-semibold hover:text-sky-600">
                      {data[0].tomatoes?.viewer?.meter}%
                    </p>
                  </div>
                  <p className="text-center font-semibold">TOMATOMETER</p>
                  <p className="text-center text-sky-600">
                    {data[0].tomatoes?.viewer?.numReviews} Reviews
                  </p>
                </div>
                <div>
                  <div className="flex my-5 mx-7">
                    <img
                      src="https://www.rottentomatoes.com/assets/pizza-pie/images/icons/audience/aud_score-fresh.6c24d79faaf.svg"
                      className="w-16 mr-2"
                    />
                    <p className="text-5xl font-semibold hover:text-sky-600">
                      {data[0].imdb.rating}
                    </p>
                  </div>
                  <p className="text-center font-semibold">AUDIENCE SCORE</p>
                  <p className="text-center text-sky-600">
                    1,000 + Verified Rating
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-5 mt-16">
            <h2 className="my-5 text-3xl font-semibold">
              <span className="text-rose-600">|</span> MOVIE INFO
            </h2>
            <div className="text-xl">
              <p className="my-5">{data[0].plot}</p>
              <p className="my-3">
                <span className="font-semibold">Genre:</span>{" "}
                {data[0].genres.map((d, idx) => (
                  <span key={idx}> {d} </span>
                ))}
              </p>
              <p className="my-3">
                <span className="font-semibold">Original Language:</span>{" "}
                {data[0].languages}
              </p>
              <p className="my-3">
                <span className="font-semibold">Director:</span>{" "}
                {data[0].directors}
              </p>
              <p className="my-3">
                <span className="font-semibold">Writer:</span> {data[0].writers}
              </p>
              <p className="my-3">
                <span className="font-semibold">Release Date (Theaters):</span>{" "}
                {moment(data[0].released).format("MMM Do YYYY")}
              </p>
              <p className="my-3">
                <span className="font-semibold">Runtime:</span>{" "}
                {data[0].runtime}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const res = await axios(`http://localhost:8181/movies/byid/${id}`);
  const data = await res.data;
  console.log("id:", id);
  console.log("data:", data);

  return {
    props: { data },
  };
}
