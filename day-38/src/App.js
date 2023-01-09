import Button from "./components/Button";
import Toolbar from "./components/Toolbar";
import ToolbarNext from "./components/ToolbarNext";
import ParentToolbar from "./components/ParentToolbar";
import "./App.css";
import Signup from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <h1>Day - 38 - React Events</h1>
      <Button />
      <Toolbar />
      <ToolbarNext />
      <ParentToolbar />
      <Signup />
    </div>
  );
}

export default App;
