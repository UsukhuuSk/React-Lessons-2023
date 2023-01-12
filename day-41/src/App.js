import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Exercise from "./components/exercise";
import UpdateArrays from "./components/UpdateArrays";
import List from "./components/SpreadArray";
import UpdatingObjects from "./components/UpdatingObject";

function App() {
  return (
    <div className="App">
      <Exercise />
      <Counter />
      <UpdateArrays />
      <UpdatingObjects/>
      <List />
    </div>
  );
}

export default App;
