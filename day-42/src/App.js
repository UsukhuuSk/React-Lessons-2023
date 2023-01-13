import "./App.css";
import { useState } from "react";

function App() {
  const [Users, setUsers] = useState([]);
  function handleRegister(event) {
    console.log(event.target.firstname.value);
    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
    };
    setUsers([...Users, user]);
    event.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <label>First Name:</label>
        <input name="firstname" />
        <label>Last Name:</label>
        <input name="lastname" />
        <label>Password:</label>
        <input name="password" />
        <label>Confirm Password:</label>
        <input name="confirmpass" />
        <button>Register</button>
      </form>
      <h2>Prev</h2>
      {Users.map((u) => {
        return (
          <div>
            <div> {u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
