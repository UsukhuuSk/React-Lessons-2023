import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";

function App() {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <Input label="First input" value={text} onChange={handleChange} />
      <Input label="First input" value={text} onChange={handleChange} />
      <Anime />
      {/* <Button /> */}
      <TopAnime />
    </div>
  );
}

export default App;
