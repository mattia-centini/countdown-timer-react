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

  return <div></div>;
}

export default Timer;
