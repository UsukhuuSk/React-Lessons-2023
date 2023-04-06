import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import NavigationBar from "@/components/navigation.bar";
import Movies from "@/components/movies";
export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8080/theaters/list");
  const theaterData = await theaterRequest.json();

  return {
    props: {
      theater: theaterData,
    },
  };
}
export default function Home(props: any): JSX.Element {
  const side = typeof window ? "client" : "server";
  return (
    <div className={styles.main}>
      <NavigationBar />
      <Movies />
      {/* <div>Welcome to</div>
      <div>You're currently on the {side}-side.</div>
      <Link href="/about">About Page</Link>
      <br />
      <Link href="/contacts">Contact Page</Link>
      <br />
      <Link href="/greeting/John?age=99">Greeting Page</Link>
      <br /> */}
      {/* <Link href="/posts/2023-08-01/first-post">Posts Page</Link> */}
      {/* <Link
        href={{
          pathname: "/posts/[date]/[slug]",
          query: { date: "2021-08-01", slug: "first-post" },
        }}
      >
        Posts Page
      </Link> */}
    </div>
  );
}