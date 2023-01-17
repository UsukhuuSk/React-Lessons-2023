import { useLocation, useParams } from "react-router-dom";
import movieData from "../data/Movies";
export default function Movie() {
  const { id } = useParams();
  //   const location = useLocation();
  const movie = movieData.filter((data) => data.id == id);

  return (
    <div>
      <h1>Movie Detail Page {id}</h1>
      {movie &&
        movie.map((m, idx) => {
          return (
            <div key={idx}>
              <p>{m.name}</p>
              <p>{m.id}</p>
              <p>{m.ISBN}</p>
              <p>{m.genre}</p>
            </div>
          );
        })}
      {/* <div>{location.state.id}</div>
      <div>{location.state.name}</div>
      <div>{location.state.ISBN}</div> */}
    </div>
  );
}
