import React from "react";
import "./style.css";

const Counter = (props) => {
  return (
    <div id="scoreCard">
      <div id="scoreWrap">
        <p>SCORE: {props.score} | WIN STREAK: {props.winStreak}</p>
      </div>
    </div>
  );
}

export default Counter;
