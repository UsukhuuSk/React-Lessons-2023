import { useContext, useState } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import { TimerContext } from "../context/TimerContext";

export default function TimersDashboard() {
  const URL = "http://localhost:8080/timers";

  const { timers, setTimers } = useContext(TimerContext);

  return (
    <div>
      <h1>Timers</h1>
      <div>
        <EditableTimerList />
        <ToggleableTimerForm />
      </div>
    </div>
  );
}
