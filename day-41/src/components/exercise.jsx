import React from "react";
import { useState } from "react";
function Exercise() {
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }
  const [inputText, setInputText] = useState("");
  const handleInput = function (event) {
    setInputText(event.target.value);
  };
  return (
    <div>
      <div>
        <p>{counter}</p>
        <button
          onClick={() => {
            handleClick();
          }}
        >
          Button
        </button>
      </div>
      <p>{inputText}</p>
      <input
        value={inputText}
        onChange={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
}
export default Exercise;
