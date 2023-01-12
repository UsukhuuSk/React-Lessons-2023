import React from "react";
import { useState } from "react";
export default function List() {
  let nextId = 0;
  const [name, setName] = useState("");
  const [books, setBooks] = useState([]);
  return (
    <div>
      <h1>Book List</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setName("");
          setBooks([...books, { id: nextId++, name: name }]);
          setBooks(books);
        }}
      >
        Add
      </button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}
