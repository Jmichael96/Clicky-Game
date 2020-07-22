import React from "react";
import "./style.css";

const Counter = (props) => {
  return (
    <div id="scoreCard">
      <div id="scoreWrap">
        <p>Score: {props.score} | Highscore: {props.topScore}</p>
      </div>
    </div>
  );
}

export default Counter;
