import React from "react";
import "./Card.css"
const Card = (props) => {
  return (
    <>
      <div className="Card">
        <span className="item__text">{props.data.name}</span>
        <span className="item__number">{props.data.number}</span>
      </div>
    </>
  );
};

export default Card;
