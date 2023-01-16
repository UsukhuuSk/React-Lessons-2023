import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Form from "./components/FeedbackForm";
import Usukhuu from "./components/about/Usukhuu";
import Khangai from "./components/about/khangai";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <h1>Day-43-React-Route</h1>
      <div id="navbar">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
        <a href="/feedback">Feedback</a>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about/*" element={<About />}>
          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="khangai" element={<Khangai />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feedback" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
