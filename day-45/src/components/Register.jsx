import { Navigate } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }
  const handleSubmit = function (event) {
    event.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="labels">
          Email:{" "}
        </label>
        <br />
        <input type="email" name="email" className="inputs" />
        <br />
        <label htmlFor="username" className="labels">
          Username:{" "}
        </label>
        <br />
        <input type="text" name="username" className="inputs" />
        <br />
        <label htmlFor="password" className="labels">
          Password:{" "}
        </label>
        <br />
        <input type="password" name="password" className="inputs" />
        <br />
        <label htmlFor="Phonenumber" className="labels">
          Phone Number:{" "}
        </label>
        <br />
        <input type="text" name="Phonenumber" className="inputs" />
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}
