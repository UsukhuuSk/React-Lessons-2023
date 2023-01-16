import React from "react";
import { useState } from "react";
export default function Form() {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    await sendMessage(text);
    setIsSending(false);
    setIsSent(true);
  }
  if (isSent) {
    return <h1>Thank you for feedback</h1>;
  }
  function sendMessage(text) {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
  return (
    <div>
      <h1>Та текстээ оруулна уу?</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <textarea
          value={text}
          disabled={isSending}
          onChange={(event) => setText(event.target.value)}
        ></textarea>
        <br />
        <button>send</button>
        {isSending && <p>Sending ...</p>}
      </form>
    </div>
  );
}
