import React from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import quiz_main from "../../assests/quiz_main.png";
import score from "../../assests/score.png";

const Result = () => {
  return (
    <>
      <div className="user_result">
        <img src={quiz_main} alt="" className="score_icon" />
        <div className="score_content">
          <h2>Well done mate! Your score is 20.</h2>
          <p>
            Seems like you have a good knowledge of painting. Play more quizes
            on DesigningWise and flaunt your knowledge in front of your friends.
          </p>
          <Link to={"/"}>
            <button className="btn btn_primary mr_top_sm">Play More</button>
          </Link>
        </div>
      </div>

      <div className="ques_option_container">
        <div className="quiz_info">
          <div className="show_end show_flex align_center">
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
      </div>

      <div className="ques_option_container">
        <div className="quiz_info">
          <div className="show_end show_flex align_center">
            <img src={score} alt="score" className="present_score_img mr_sm" />
            <p className="size_md">20 points</p>
          </div>
        </div>

        <div className="ques_container show_flex">
          <h1 className="ques_number">2/5</h1>
          <h2 className="ques">
            Which famous artist could draw before he could walk or talk?
          </h2>
        </div>

        <div className="quiz_options">
          <div className="option hoverNone">
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
              id="waltDisney"
              name="quesOne"
              value="waltDisney"
            />
            <label for="waltDisney">Walt Disney</label>
          </div>

          <div className="option hoverNone">
            <input
              type="radio"
              id="kayleeJade"
              name="quesOne"
              value="kayleeJade"
            />
            <label for="kayleeJade">Kaylee Jade</label>
          </div>

          <div className="option right hoverRight">
            <input
              type="radio"
              id="pabloPicasso"
              name="quesOne"
              value="pabloPicasso"
            />
            <label for="pabloPicasso">Pablo Picasso</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
