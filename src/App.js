import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function App() {
  const [progress, setProgress] = useState(0);

  const handleIncrease = () => {
    setProgress((p) => {
      if (p >= 100) return 0;
      return p + 10;
    });
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      <button onClick={handleIncrease}>{progress >= 100 ? "Reset" : "Increase"}</button>
    </div>
  );
}
