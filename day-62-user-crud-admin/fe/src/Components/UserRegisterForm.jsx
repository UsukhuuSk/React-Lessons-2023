import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Grid, InputLabel, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Select from "@mui/material/Select";
export default function UserRegisterForm() {
  const URL = "http://localhost:8081/register";
  const ROLE_URL = "http://localhost:8081/users/roles";
  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(1);
  useEffect(() => {
    fetchRoles();
  }, []);
  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
    console.log(roles);
  }
  function handleSelectChange(e) {
    console.log(e.target.value);
    setCurrentRole(e.target.value);
  }
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
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
    console.log(FETCHED_JSON);
    if (FETCHED_JSON) {
      navigate("/users");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              variant="filled"
              size="small"
              label="First Name"
              name="firstname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              variant="filled"
              size="small"
              label="Last Name"
              name="lastname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              variant="filled"
              size="small"
              label="E-mail"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              variant="filled"
              size="small"
              label="Password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirm-password"
              variant="filled"
              size="small"
              label="Confirm Password"
              name="confirm-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              variant="filled"
              size="small"
              label="Address"
              name="address"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>User Roles</InputLabel>
            <Select
              id="role-selector"
              value={currentRole}
              label="Roles"
              onChange={handleSelectChange}
            >
              {roles &&
                roles.map((role, idx) => {
                  return (
                    <MenuItem key={idx} value={role.id}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
