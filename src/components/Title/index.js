import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="header">
      <h1 className="text-center">CLICKY GAME</h1>
      <img id="southparkimg" className="left" alt="southpark" src="/assets/images/southpark2.jpg" />
      <div className="text-center">
        <p id="titleText">
          Click on an image to earn points, But dont click on an image twice
          or you lose and the game starts over.
    </p>
      </div>
    </div>
  );
}

export default Title;
