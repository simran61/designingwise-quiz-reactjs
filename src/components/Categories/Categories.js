import React from "react";
import "./Categories.css";
import notepad from "../../assests/notepad.svg";

const Categories = () => {
  return (
    <>
      <div className="categories" id="discover_quizes">
        <h2 className="categories_heading">Browse Categories</h2>
        <div className="card_container padding_categories">
          <div className="card card1">
            <img src={notepad} alt="" className="quiz_icon" />
            <i className="card_icon fa-regular fa-circle-play"></i>
            <p className="card_tagline">6 Quizes</p>
            <h2>Figma Prototyping</h2>
          </div>

          <div className="card card2">
            <img src={notepad} alt="" className="quiz_icon" />
            <i className="card_icon fa-regular fa-circle-play"></i>
            <p className="card_tagline">3 Quizes</p>
            <h2>Sketching</h2>
          </div>

          <div className="card card3">
            <img src={notepad} alt="" className="quiz_icon" />
            <i className="card_icon fa-regular fa-circle-play"></i>
            <p className="card_tagline">4 Quizes</p>
            <h2>UI Designing</h2>
          </div>

          <div className="card card4">
            <img src={notepad} alt="" className="quiz_icon" />
            <i className="card_icon fa-regular fa-circle-play"></i>
            <p className="card_tagline">2 Quizes</p>
            <h2>Adobe Photoshop</h2>
          </div>

          <div className="card card5">
            <img src={notepad} alt="" className="quiz_icon" />
            <i className="card_icon fa-regular fa-circle-play"></i>
            <p className="card_tagline">5 Quizes</p>
            <h2>Adobe Illustrator </h2>
          </div>

          <div className="card card6">
            <img src={notepad} alt="" className="quiz_icon" />
            <i className="card_icon fa-regular fa-circle-play"></i>
            <p className="card_tagline">7 Quizes</p>
            <h2>Painting</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
