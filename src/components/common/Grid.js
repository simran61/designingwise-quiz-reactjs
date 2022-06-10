import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rightAnswer from "../../assests/correct_answer.mp3";
import wrongAnswer from "../../assests/wrong_answer.mp3";
import JSConfetti from "js-confetti";

export default function BasicGrid({
  options,
  correctAnswer,
  nextQuestion,
  setResult,
  result,
}) {
  const jsConfetti = new JSConfetti();
  const handleOptions = (option) => {
    if (correctAnswer === option) {
      setResult(result + 1);
      document.getElementById("correct-answer").play();
      jsConfetti.addConfetti({
        confettiNumber: 300,
        confettiColors: [
          "#e91e63",
          "#00bcd4",
          "#9c27b0",
          "#ffeb3b",
          "#ff5722",
          "#212121",
          "#ffc107",
          "#76ff03",
          "#00e676",
          "#cddc39",
        ],
      });
      toast.success("Right Answer", {
        autoClose: 2000,
      });
    } else {
      document.getElementById("wrong-answer").play();
      toast.error("Wrong Answer", {
        autoClose: 2000,
      });
    }
    nextQuestion();
  };
  return (
    <div>
      <>
        <audio src={rightAnswer} id="correct-answer"></audio>
        <audio src={wrongAnswer} id="wrong-answer"></audio>
      </>
      <ToastContainer />

      <div className="quiz_options">
        <div className="option" onClick={() => handleOptions(options)}>
          {options}
        </div>
      </div>
    </div>
  );
}
