/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png"
      />
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineone">Hello Guest</span>
          <span className="header_optionLinetwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineone">Return</span>
          <span className="header_optionLinetwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineone">Your</span>
          <span className="header_optionLinetwo">Prime</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineone">Hello Guest</span>
          <span className="header_optionLinetwo">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
