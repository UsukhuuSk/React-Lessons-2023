import React, { useState, useEffect } from "react";

interface IGeo {
  type: {
    type: string;
    enum: ["Point"];
    required: true;
  };
  coordinates: {
    type: [number, number];
    required: true;
  };
}

interface IAddress {
  street1: string;
  city: string;
  state: string;
  zipcode: string;
}

interface ILocation {
  address: IAddress;
  geo: IGeo;
}

interface ITheater {
  theaterId: number;
  location: ILocation;
}
export default function Theaters(): JSX.Element {
  const [theaters, setTheaters] = useState<ITheater[]>([]);
  async function fetchTheaters(): Promise<void> {
    const FETCHED_DATA = await fetch("http://localhost:8080/theaters/list");
    const FETCHED_JSON = await FETCHED_DATA.json();
    setTheaters(FETCHED_JSON);
  }
  useEffect(() => {
    fetchTheaters();
  }, []);

  return (
    <div>
      <div>
        {theaters.map((theater, index) => (
          <div key={index}>{theater.theaterId}</div>
        ))}
      </div>
    </div>
  );
}
