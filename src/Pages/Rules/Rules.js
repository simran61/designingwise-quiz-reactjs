import React from "react";
import "./Rules.css";
import leaderboard from "../../assests/leaderBoard.png";

const Rules = () => {
  return (
    <>
      <div class="rules_box">
        <div class="rules_content">
          <h1 class="heading_txt">Rules of the quiz!</h1>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>Each multiple choice
            question has only one correct answer
          </p>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>For each correct
            answer you'll be awarded 30 points.
          </p>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>For each wrong answer
            10 marks will be deducted.
          </p>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>To solve each question
            you'll be given 30 seconds.
          </p>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>Each quiz has 5
            questions (150 marks).
          </p>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>To win the quiz you
            need to score more than 70%.
          </p>
          <p class="para_txt">
            <i class="fa-solid fa-palette rules_icon"></i>On scoring more than
            80% , level 2 will be unlocked.
          </p>
          <a href="../quizQues/quizQues1.html">
            <button class="btn btn_primary btn_rules">Start Quiz</button>
          </a>
        </div>
        <img src={leaderboard} alt="" class="rules_banner_img" />
      </div>
    </>
  );
};

export default Rules;
