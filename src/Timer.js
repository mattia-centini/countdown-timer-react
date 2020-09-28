import React, { useEffect } from "react";

function Timer({ timeLeft, setTimeLeft, calculateTimeLeft }) {
  //use effect runs when page mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      //setting timeleft
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  //using this variable to push a new timeLeft component
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? timerComponents : <span>Time's Up!</span>}
    </div>
  );
}

export default Timer;
