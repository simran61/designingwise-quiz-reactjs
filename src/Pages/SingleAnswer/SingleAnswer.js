import React from "react";
import "./SingleAnswer.css";
import time from "../../assests/time.png";
import score from "../../assests/score.png";
import { Link } from "react-router-dom";

const SingleAnswer = () => {
  return (
    <>
      <div className="ques_option_container">
        <div className="quiz_info">
          <div className="show_flex align_center">
            <img src={time} alt="time" className="time_img mr_sm" />
            <p className="size_md">00:13</p>
          </div>
          <div className="show_flex align_center">
            <img src={score} alt="score" className="present_score_img mr_sm" />
            <p className="size_md">-10 points</p>
          </div>
        </div>

        <div className="ques_container show_flex">
          <h1 className="ques_number">1/5</h1>
          <h2 className="ques">
            Which modern American Icon turned his sketches into an animated and
            theme park empire?
          </h2>
        </div>

        <div className="quiz_options">
          <div className="option hoverNone">
            <input
              type="radio"
              id="margotDisney"
              name="quesOne"
              value="margotDisney"
            />
            <label for="margotDisney">Margot Disney</label>
          </div>

          <div className="option right hoverRight">
            <input
              type="radio"
              id="waltDisney"
              name="quesOne"
              value="waltDisney"
            />
            <label for="waltDisney">Walt Disney</label>
          </div>

          <div className="option wrong hoverWrong">
            <input
              type="radio"
              id="royDisney"
              name="quesOne"
              value="royDisney"
            />
            <label for="royDisney">Roy Disney</label>
          </div>

          <div className="option hoverNone">
            <input
              type="radio"
              id="maddoxDisney"
              name="quesOne"
              value="maddoxDisney"
            />
            <label for="maddoxDisney">Maddox Disney</label>
          </div>
        </div>

        <div className="ques_btns">
          <Link to={"/rules"}>
            <button className="btn btn_primary">
              <i className="fa-solid fa-arrow-left-long"></i> Previous
            </button>
          </Link>
          <Link to={"/results"}>
            <button className="btn btn_primary">
              Next <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleAnswer;
