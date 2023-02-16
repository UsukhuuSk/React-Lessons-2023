import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryEditForm() {
  const URL = "http://localhost:8080/category";
  const { id } = useParams();
  console.log(id);

  const [category, setCategory] = useState({
    name: "TEST",
  });
  async function fetchCategory() {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategory(FETCHED_JSON.data);
    }
  }
  useEffect(() => {
    fetchCategory();
  }, []);

  function handleInputChange(e) {
    setCategory(e.target.value);
  }

  const navigate = useNavigate();

  async function handleEditSubmit(e) {
    e.preventDefault();
    console.log(e.target.categoryName.value);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: id,
        categoryName: e.target.categoryName.value,
        isEdit: true,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      navigate("/category/list");
    }
  }
  return (
    <div>
      <h1>Category Edit Form</h1>
      <form onSubmit={handleEditSubmit}>
        <input
          name="categoryName"
          value={category.name}
          onChange={handleInputChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
