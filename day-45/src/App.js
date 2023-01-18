import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path={"/accordion"} element={<Accordion />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
