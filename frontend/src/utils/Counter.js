import React from "react";
import CountUp from "react-countup";

export default function Counter({ number, title, isCounting }) {
  return (
    <div className="number">
      {isCounting && <CountUp duration={7} className="counter" end={number} />}
      <span>{title}</span>
    </div>
  );
}