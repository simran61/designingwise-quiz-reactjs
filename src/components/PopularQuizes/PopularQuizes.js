import React from "react";
import "./PopularQuizes.css";
import quiz_main from "../../assests/quiz_main.png";
import { Link } from "react-router-dom";

const PopularQuizes = () => {
  return (
    <>
      <div className="categories">
        <h2 className="categories_heading">Our popular quizes</h2>
        <div className="card_container gap_sm">
          <div className="popular_card">
            <img src={quiz_main} alt="" className="popular_icon" />
            <div className="popular_content">
              <h3>Famous artists and paintings</h3>
              <p>Played by 341 people.</p>
            </div>
            <Link to="/rules">
              <button className="btn btn_primary">Play Now</button>
            </Link>
          </div>

          <div className="popular_card">
            <img src={quiz_main} alt="" className="popular_icon" />
            <div className="popular_content">
              <h3>How well do you know colors?</h3>
              <p>Played by 306 people.</p>
            </div>
            <Link to="/rules">
              <button className="btn btn_primary">Play Now</button>
            </Link>
          </div>

          <div className="popular_card">
            <img src={quiz_main} alt="" className="popular_icon" />
            <div className="popular_content">
              <h3>Understanding still life</h3>
              <p>Played by 218 people.</p>
            </div>
            <Link to="/rules">
              <button className="btn btn_primary">Play Now</button>
            </Link>
          </div>

          <div className="popular_card">
            <img src={quiz_main} alt="" className="popular_icon" />
            <div className="popular_content">
              <h3>Basics of sketching</h3>
              <p>Played by 122 people.</p>
            </div>
            <Link to="/rules">
              <button className="btn btn_primary">Play Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularQuizes;
