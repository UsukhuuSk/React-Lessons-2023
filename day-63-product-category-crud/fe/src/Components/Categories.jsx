import React, { useEffect, useState } from "react";

export default function Categories() {
  const URL = "http://localhost:8080/category";
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  async function fetchCategories() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      setCategories(FETCHED_JSON.data);
    }
  }
  return (
    <div>
      <h1>Category List</h1>
      <table>
        <thead>
          <tr>
            <td>Category ID</td>
            <td>Category Name</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category, index) => {
              return (
                <tr key={index}>
                  <td>{category.id}</td>
                  <td>{category.name}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
