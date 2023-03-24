import React, { useState, useEffect } from "react";

export default function Register() {
  const ROLE_URL = "http://localhost:8080/admin/role/list";
  const REGISTER_URL = "http://localhost:8080/admin/register";

  const initialFormData = Object.freeze({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    UserRole: 0,
    address: "",
  });

  const [roles, setRoles] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const fetchRoles = async () => {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
  };

  useEffect(() => {
    fetchRoles();
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label htmlFor="firstName">
          First Name
          <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <label htmlFor="lastName">
          Last Name
          <input type="text" name="lastName" onChange={handleChange} />
        </label>

        <label htmlFor="email">
          Email
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label htmlFor="phone">
          Phone
          <input type="number" name="phone" onChange={handleChange} />
        </label>
        <label htmlFor="UserRole">
          Roles:
          <select name="UserRole" onChange={handleChange}>
            {roles &&
              roles.map((role, idx) => (
                <option key={idx} id={role._id} value={role._id}>
                  {role.name}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="address">
          Address
          <textarea name="address" onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
