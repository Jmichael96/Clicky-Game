import React from "react";
import "./style.css";

const FriendCard = (props) => {
  return (
    <div className="body">
      <div id="card" onClick={() => props.setClicked(props.id)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <strong>{props.name}</strong>
        </div>
      </div>
    </div>

  );
}

export default FriendCard;
