import React from "react";
import "./Items.css"
const Items = (props) => {
  return (
    <li className="saidbar__item flex justify-start">
        <img className="saidbar__img" width={25} height={25} src={props.content.img}/>
        <span className="saidbar__text">{props.content.title}</span>
    </li>
  );
};

export default Items;
