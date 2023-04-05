import styles from "@/styles/navigation.module.css";
import Link from "next/link";
import React from "react";

export default function NavigationBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
        alt="logo"
      />
      <div className={styles.search}>
        <Link href="">
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
        </Link>
        <input type="text" placeholder="Search movies, TV, actors, more..." />
      </div>
      <div className={styles.outer}>
        <div className={styles.topbtns}>
          <Link href="">What's the Tomatometer®?</Link>
          <Link href="">Critics</Link>
          <Link href="">LOGIN/SIGNUP</Link>
        </div>
        <div className={styles.botbtns}>
          <Link href="">MOVIES</Link>
          <Link href="">TV SHOWS</Link>
          <Link href="">MOVIE TRIVIA</Link>
          <Link href="">NEWS</Link>
          <Link href="">SHOWTIMES</Link>
        </div>
      </div>
    </div>
  );
}
