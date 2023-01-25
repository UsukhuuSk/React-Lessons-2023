import { useState } from "react";
import TimerForm from "./TimerForm";
export default function ToggleableTimerForm({ onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleFormSubmit(timer) {
    onFormSubmit(timer);
    setIsOpen(false);
  }
  function handleFormOpen() {
    setIsOpen(true);
  }
  function handleFormClose() {
    setIsOpen(FontFaceSetLoadEvent);
  }
  return (
    <div>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <div>
          <button onClick={handleFormOpen}>Click me</button>
        </div>
      )}
    </div>
  );
}
