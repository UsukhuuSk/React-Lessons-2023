import Place from "./Place";
import { places } from "../data/data";
export default function List() {
  const items = places.map((place, index) => {
    return <Place key={index} place={place} />;
  });
  return <div>{items}</div>;
}
