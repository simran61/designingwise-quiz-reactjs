import React from "react";
import { Link } from "react-router-dom";
import logoFinal from "../../assests/logofinal.png";
import profile from "../../assests/profile.jpeg";
import "./TopNavBar.css";

const TopNavBar = () => {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="logo">
          <img src={logoFinal} alt="" />
        </Link>
        <div className="show_flex">
          <div className="search">
            <input type="text" name="" id="" placeholder="Search a quiz" />
            <i className="icon fa-solid fa-magnifying-glass"></i>
          </div>
          <Link to="/profilepage">
            <img className="user" src={profile} alt="" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default TopNavBar;
