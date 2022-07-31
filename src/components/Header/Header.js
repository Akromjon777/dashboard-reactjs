import React, { useState } from "react";
import HeaderImg1 from "../assets/Images/header-img1.svg";
import HeaderImg2 from "../assets/Images/header-img2.svg";
import HeaderImgAva from "../assets/Images/header-img-avatar.png";
import "./Header.css"
const Header = () => {

  return (
    <div className="container">
      <div className="header__inner">
        <h1 className="font-semibold main-header-logo">Overwiew</h1>
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__item">
              <img width={16} height={16} src={HeaderImg1} alt="search" />
              <img width={16} height={16} src={HeaderImg2} alt="notifactions" />
            </li>
            <li class="menu__item">
              <span className="font-thin text-slate-400 border-l-2 border-slate-400 mr-2 pl-5">Jones Ferdinand</span>
              <img src={HeaderImgAva} alt="search" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
