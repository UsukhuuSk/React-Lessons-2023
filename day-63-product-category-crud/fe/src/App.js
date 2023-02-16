import { Routes, Route } from "react-router-dom";
import "./App.css";
import CategoryForm from "./Components/CategoryForm";
import Categories from "./Components/Categories";
import { ToastContainer } from "react-toastify";
import CategoryEditForm from "./Components/CategoryEditForm";

function App() {
  return (
    <div className="App">
      <h1>Day-63 - Category CRUD</h1>
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
