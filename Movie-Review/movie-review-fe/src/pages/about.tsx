import React from "react";

export async function getStaticProps() {
  return {
    props: {
      theater: "Birmingham",
    },
    revalidate: 600,
  };
}

export default function About(props: any): JSX.Element {
  return (
    <div>
      <h1>This is the About page</h1>
      <div>
        <p>Theater Name:{props.theater}</p>
      </div>
    </div>
  );
}
