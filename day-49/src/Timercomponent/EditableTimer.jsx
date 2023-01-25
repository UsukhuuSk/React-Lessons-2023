import TimerForm from "./TimerForm";
import { useState } from "react";
import Timer from "./Timer";

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  runningSince,
  onTrashClick,
  onStartClick,
  onStopClick,
}) {
  const [editOpenForm, setEditOpenForm] = useState(false);

  return (
    <div>
      {editOpenForm ? (
        <TimerForm id={id} title={title} project={project} />
      ) : (
        <Timer
          id={id}
          title={title}
          project={project}
          elapsed={elapsed}
          runningSince={runningSince}
          onTrashClick={onTrashClick}
          onStartClick={onStartClick}
          onStopClick={onStopClick}
        />
      )}
    </div>
  );
}
