import React from "react";
import List from "../List/List";
import Items from "../Items/Items";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import "./Saidbar.css";

const Saidbar = ({ contents }) => {
  return (
    <div className="wrapper">
      <Header />
      <List>
        <Logo />
        {contents.map((content, i) => (
          <Items content={content} key={i}></Items>
        ))}
      </List>
    </div>
  );
};

export default Saidbar;
