import React from "react";
import styles from "@/styles/Home.module.css";
import NavigationBar from "@/components/navigation.bar";
import Movies from "@/components/movies";

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8181/theaters/list");
  const theaterData = await theaterRequest.json();

  return {
    props: {
      theater: theaterData,
    },
  };
}
export default function Home(props: any): JSX.Element {
  return (
    <div className={styles.main}>
      <NavigationBar />
      <Movies />
    </div>
  );
}
