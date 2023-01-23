import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  function handleCounter() {
    console.log("button is clicked");
    setCounter(counter + 1);
  }
  return (
    <div className="counter hover">
      <p>{counter}</p>
      <button onPointerEnter={handleCounter}>Add one</button>
    </div>
  );
}
