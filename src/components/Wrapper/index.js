import React from "react";
import "./style.css";

function Wrapper(props) {
  return <article className="wrapper">{props.children}</article>;
}

export default Wrapper;
