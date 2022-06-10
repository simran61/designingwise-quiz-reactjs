import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { database } from "../../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import moment from "moment";
import Grid from "../../components/common/Grid";
import parse from "html-react-parser";

import "../SingleQuestion/SingleQuestion.css";
import time from "../../assests/time.png";
import score from "../../assests/score.png";
import "react-toastify/dist/ReactToastify.css";

export default function PlayQuiz() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [questionCounter, setQuesCounter] = useState(1);
  const [totalQuiz, setTotalQuiz] = useState(1);
  const [questionsArray, setQuesArray] = useState([]);
  const [quizType, setQuizType] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");
  const [result, setResult] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const databaseRef = collection(database, "Leader Board");
  React.useEffect(() => {
    const { quizData, quizCount, quizType, quizDifficulty } = state;
    setQuesArray(quizData);
    setTotalQuiz(quizCount);
    setQuizDifficulty(quizDifficulty);
    setQuizType(quizType);
    setPlayerName(localStorage.getItem("Playername"));
  }, []);

  const nextQuestion = () => {
    if (questionCounter < questionsArray.length + 1) {
      setQuesCounter(questionCounter + 1);
    }
  };

  const submitQuiz = () => {
    addDoc(databaseRef, {
      playerName: playerName,
      timeStamp: moment().format("LLL"),
      difficulty: quizDifficulty,
      category: questionsArray[0].category,
      finalScore: result,
    }).then(() => {
      navigate("/results", {
        state: {
          finalResults: result,
        },
      });
    });
  };

  return (
    <div>
      {questionCounter < questionsArray.length + 1 ? (
        <div className="ques_option_container">
          <div className="quiz_info">
            <div className="show_flex align_center">
              <img src={time} alt="time" className="time_img mr_sm" />
              <p className="size_md">
                {parse(questionsArray[questionCounter - 1].category)}
              </p>
            </div>

            <div className="show_flex align_center">
              <img
                src={score}
                alt="score"
                className="present_score_img mr_sm"
              />
              <p className="size_md">Level: {quizDifficulty}</p>
            </div>
          </div>

          {questionsArray.length > 0 ? (
            <div>
              <div className="ques_container show_flex">
                <h1 className="ques_number">Q.{questionCounter}</h1>
                <h2 className="ques">
                  {parse(questionsArray[questionCounter - 1].question)}
                </h2>
              </div>
              <div className="check">
                {[
                  ...questionsArray[questionCounter - 1].incorrect_answers,
                  questionsArray[questionCounter - 1].correct_answer,
                ]
                  .sort(() => Math.random() - 0.5)
                  .map((options) => {
                    return (
                      <div className="all_options">
                        <Grid
                          nextQuestion={nextQuestion}
                          options={parse(options)}
                          setResult={setResult}
                          result={result}
                          correctAnswer={
                            questionsArray[questionCounter - 1].correct_answer
                          }
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="submit-container">
          <h2>The Quiz is now finished..</h2>
          <p>You can Submit your Score..</p>
          <Button
            onClick={submitQuiz}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
