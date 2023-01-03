import "./App.css";
import HelloWorld from "./helloworld";

function App() {
  const customStyle = {
    color: "#2ecc71",
    fontSize: "26px",
  };
  const element = <h1 style={customStyle}>Hello, Teacher</h1>;
  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  const secondElement = <p className="my-text">My next Text</p>;
  const user = {
    firstName: "Harper",
    lastName: "Perez",
  };
  // const secondElement = <h1>Hello, {formatName(user)}!</h1>;
  // const name = "Usukhuu";
  // const thirdElement = <h1>Hello, {name}</h1>;
  return (
    <div>
      {element} {secondElement}
      <HelloWorld />
    </div>
  );
}

export default App;
