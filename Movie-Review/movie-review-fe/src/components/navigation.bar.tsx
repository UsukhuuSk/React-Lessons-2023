import styles from "@/styles/navigation.module.css";
import React from "react";

export default function NavigationBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
        alt="logo"
      />
      <div className={styles.search}>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </a>
        <input type="text" placeholder="Search movies, TV, actors, more..." />
      </div>
      <div className={styles.outer}>
        <div className={styles.topbtns}>
          <a href="">What's the Tomatometer®?</a>
          <a href="">Critics</a>
          <a href="">LOGIN/SIGNUP</a>
        </div>
        <div className={styles.botbtns}>
          <a href="">MOVIES</a>
          <a href="">TV SHOWS</a>
          <a href="">MOVIE TRIVIA</a>
          <a href="">NEWS</a>
          <a href="">SHOWTIMES</a>
        </div>
      </div>
    </div>
  );
}
