import { useEffect, useState } from "react";
function Timer({ onTimeUp }) {
  const [time, setTime] = useState(30 * 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div className="timer">

      ⏰ {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
export default Timer;