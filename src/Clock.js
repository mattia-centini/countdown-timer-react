import React, { useState } from "react";
import Timer from "./Timer";
import "./Clock.css";

function Clock({ year }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  //
  function calculateTimeLeft() {
    //days left until Xmas
    let difference = +new Date(`12/25/${year}`) - +new Date();
    console.log(difference);
    // if the difference is + days then do this...
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="clock">
      <h1>Countdown to Christmas 🎄</h1>
      <Timer
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        calculateTimeLeft={calculateTimeLeft}
      />
    </div>
  );
}

export default Clock;
