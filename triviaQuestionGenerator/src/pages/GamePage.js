import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import "../App.css";

const GamePage = ({ points, setPoints }) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [questionTopic, setQuestionTopic] = useState("");
  const [isTopicConfirmed, setIsTopicConfirmed] = useState(false);
  const apiKey = "e22rXXo43vmsNIPN8zmgSWyUI8aoJ5I";
  const url = "https://api.opexams.com/questions-generator";

  const fetchTriviaQuestions = async () => {
    try {
      const response = await axios.post(
        url,
        {
          type: "topicBased",
          topic: questionTopic,
          questionType: "MCQ",
          difficulty: "medium",
        },
        {
          headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      setQuestions(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleConfirmTopic = () => {
    setIsTopicConfirmed(true);
  };

  useEffect(() => {
    if (isTopicConfirmed && questionTopic.trim() !== "") {
      fetchTriviaQuestions();
    }
  }, [isTopicConfirmed, questionTopic]);

  const handleAnswerSelection = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);
    setShowResult(true);
    if (selectedAnswer === questions[questionNum].answer) {
      setPoints(points + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setShowResult(false);
    if (questionNum < 9) {
      setQuestionNum(questionNum + 1);
    } else {
      // Reset to input field
      setQuestionNum(0);
      setQuestions([]);
      setSelectedAnswer("");
      setShowResult(false);
      setQuestionTopic("");
      setIsTopicConfirmed(false);
      setPoints(0);
    }
  };

  return (
    <div className="game-screen">
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>
      {questions.length === 0 && (
        <div>
          <h1>Enter Topic for Questions:</h1>
          <input
            type="text"
            value={questionTopic}
            onChange={(e) => setQuestionTopic(e.target.value)}
          />
          <button onClick={handleConfirmTopic}>Confirm Topic</button>
        </div>
      )}
      {questions.length > 0 && (
        <>
          <h1>Question: {questionNum + 1}</h1>
          <h2>{questions[questionNum].question}</h2>
          <div className="answer-btn-container">
            {questions[questionNum].options.map((answer, index) => (
              <button
                key={index}
                className={`answer-btn ${
                  showResult && selectedAnswer === answer
                    ? answer === questions[questionNum].answer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
                disabled={showResult}
                onClick={() => handleAnswerSelection(answer)}
              >
                {answer}
              </button>
            ))}
          </div>
          {showResult && (
            <div>
              <p>
                {selectedAnswer === questions[questionNum].answer
                  ? "Correct!"
                  : "Incorrect!"}
              </p>
              <button onClick={handleNextQuestion}>
                {questionNum < 9 ? "Next Question" : "Restart Game"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GamePage;
