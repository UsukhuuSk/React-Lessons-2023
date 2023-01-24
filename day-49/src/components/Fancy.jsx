import { useState } from "react";
import Counter from "./components/Counter";
export default function Fancy() {
  const [isFancy, setIsFancy] = useState();
  return (
    <div className="App">
      <Counter isFancy={isFancy} />
      <label className="check">
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}
