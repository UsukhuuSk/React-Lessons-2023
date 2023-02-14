import "./App.css";
import UserRegisterForm from "./Components/UserRegisterForm";
import { Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
function App() {
  return (
    <div className="App">
      <h1>Day-62 - User Login CRUD</h1>
      <h5>User Register Form</h5>
      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
