import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import Index from "./components/Index";
import Movies from "./components/Movies";
import movieData from "./data/Movies";
import Movie from "./components/Movie";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/aboutpage"} element={<AboutPage />} />
        <Route path={"/accordion"} element={<Accordion />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/movie/:id"} element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
