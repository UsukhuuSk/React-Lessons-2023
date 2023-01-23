import { useEffect, useState } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      console.log("Its playing");
    } else {
      console.log("Its not playing");
    }
  }, [isPlaying]);

  function handleClick() {
    console.log("You clicked me");
    setIsPlaying(!isPlaying);
  }
  return <button onClick={handleClick}>Click me</button>;
}
