import logo from "./yellow.png";
import submit from "./rose.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr/>
      </header>
      <body>
        <div className="overall">
          <div className="productno1">
          <i class="fa-solid fa-triangle"></i>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="rightside">
              <p className="title">Haught or Naught</p>
              <p>High minded or absent-minded? You decide.</p>
              <p className="submit">Submitted by:{<img src={submit} className="submit-pic"/>} </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
