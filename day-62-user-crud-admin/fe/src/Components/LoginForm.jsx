import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const URL = "http://localhost:8081/login";
  const navigate = useNavigate();
  async function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    if (FETCHED_JSON.status === "success") {
      toast("You are logged in");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }
    console.log(FETCHED_JSON);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username
          <input name="email" type="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
