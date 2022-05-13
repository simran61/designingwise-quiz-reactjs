import React from "react";
import "./Rules.css";
import leaderboard from "../../assests/leaderBoard.png";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <>
      <div className="rules_box">
        <div className="rules_content">
          <h1 className="heading_txt">Rules of the quiz!</h1>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>Each multiple
            choice question has only one correct answer
          </p>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>For each correct
            answer you'll be awarded 30 points.
          </p>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>For each wrong
            answer 10 marks will be deducted.
          </p>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>To solve each
            question you'll be given 30 seconds.
          </p>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>Each quiz has 5
            questions (150 marks).
          </p>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>To win the quiz
            you need to score more than 70%.
          </p>
          <p className="para_txt">
            <i className="fa-solid fa-palette rules_icon"></i>On scoring more
            than 80% , level 2 will be unlocked.
          </p>
          <Link to={"/SingleQuestion"}>
            <button className="btn btn_primary btn_rules">Start Quiz</button>
          </Link>
        </div>
        <img src={leaderboard} alt="" className="rules_banner_img" />
      </div>
    </>
  );
};

export default Rules;
