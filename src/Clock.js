import React, { useState, useEffect } from "react";
import Timer from "./Timer";

function Clock({ year }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    let difference = +new Date(`12/25/${year}`) - +new Date();
    console.log(difference);
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
    <div>
      <h1>This is a clock</h1>
      <Timer />
    </div>
  );
}

export default Clock;
