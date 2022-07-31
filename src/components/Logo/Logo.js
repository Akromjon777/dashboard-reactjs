import React, { useState } from "react";
import Logo from "../assets/Images/logo.png";

const Logos = () => {
  return (
    <div className="flex items-center px-5 py-10">
      <img src={Logo} alt="logo dashboard" className="mr-2 cursor-pointer" />
      <h3 className="text-slate-400">Dashboard Kit</h3>
    </div>
  );
};

export default Logos;
