import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "usukhuu@gmail.com",
    password: "12345678",
  });
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.password.value);
    if (
      user.loginName === event.target.username.value &&
      user.password === event.target.password.value
    ) {
      toast("User is permitted");
      navigate("/", {
        replace: true,
        state: { bookName: "Fake title" },
      });
    } else {
      toast("User is not permitted");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake page" },
      });
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username: </label>
        <input name="username" type="email" className="inputs" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" className="inputs" />
        <br />
        <button> Sign in </button>
        <ToastContainer />
      </form>
    </div>
  );
}
