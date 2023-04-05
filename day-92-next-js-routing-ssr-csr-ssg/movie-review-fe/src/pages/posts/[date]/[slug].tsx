import React from "react";

export async function getServerSideProps(req: any) {
  const { date, slug } = req.params;
  console.log(date, slug);
  return {
    props: {
      date,
      user: "usukhuu",
    },
  };
}

export default function Greeting(props: any): JSX.Element {
  return (
    <div>
      <h1>Hello {props.user}</h1>
      <h5>Today is {props.date}</h5>
    </div>
  );
}
