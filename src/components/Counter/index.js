import React from "react";
import "./style.css";

function Counter(props) {
  return (
    <div id="scores" className="container text-center">
      <p>Score: {props.score} | Highscore: {props.topScore}</p>
      <p className="scoreBoard">{props.clickMessage}</p>
    </div>
  );
}

export default Counter;
