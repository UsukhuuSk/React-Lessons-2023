import userList from "../data/data.js";
import { useState } from "react";

export default function User() {
  const [index, setIndex] = useState(0);

  let user = userList[index];
  const [memo, setMemo] = useState("");
  return (
    <div>
      <button
        onClick={() => {
          setIndex(index + 1);
          setMemo(userList[index + 1].name);
        }}
      >
        Next
      </button>
      <p>{user.name}</p>
      <input value={memo} />
    </div>
  );
}
