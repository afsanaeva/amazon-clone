/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
      />
      <div className="header_search"></div>
      <div className="header_nav"></div>
    </div>
  );
}

export default Header;
