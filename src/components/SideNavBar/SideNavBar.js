import React from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";

const SideNavBar = () => {
  return (
    <>
      <div className="side_nav">
        <ul className="nav_list">
          <li className="active">
            <Link to="/" className="list_item">
              <i className="icon mr_sm fa-solid fa-house"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/" className="list_item">
              <i className="icon mr_sm fa-brands fa-wpexplorer"></i>Discover
            </Link>
          </li>
          <li>
            <Link to="/rules" className="list_item">
              <i className="icon mr_sm fa-solid fa-chalkboard"></i>Quizes
            </Link>
          </li>
          <li>
            <Link to="/leaderboard" className="list_item">
              <i className="icon mr_sm fa-solid fa-chart-column"></i>Leader
              Board
            </Link>
          </li>
          <li>
            <Link to="/profilepage" className="list_item">
              <i className="icon mr_sm fa-regular fa-user"></i>Profile
            </Link>
          </li>
          <li>
            <Link to="logout" className="list_item">
              <i className="icon mr_sm fa-solid fa-arrow-right-from-bracket"></i>
              Log Out
            </Link>
          </li>
        </ul>
        <div className="social_icons">
          <a
            href="https://github.com/simran61"
            target="_blank"
            className="side_nav_icon"
          >
            <i className="fab fa-github-alt"></i>
          </a>
          <a
            className="side_nav_icon"
            target="_blank"
            href="https://www.linkedin.com/in/simran-gangwani-b93a441b2/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="side_nav_icon"
            target="_blank"
            href="https://www.instagram.com/simran_wb65/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="side_nav_icon"
            target="_blank"
            href="https://twitter.com/SimranGangwani3"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
