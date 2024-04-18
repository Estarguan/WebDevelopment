import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchTriviaQuestions from "../utils/quizapi";
import "../App.css";

const GamePage = () => {
  const [topic, setTopic] = useState("");
  const [points, setPoints] = useState(0);
  const [questionNum, setQuestionNum] = useState(1);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  useEffect(() => {
    // Fetch trivia questions when the component mounts
    fetchTriviaQuestions(23, 1)
      .then((questions) => {
        console.log("Trivia questions:", questions[0].correct_answer);
        setCorrectAnswer(questions[0].correct_answer);
        // Handle the questions
        if (questions && questions.length > 0) {
          setQuestion(questions[0].question);

          setAnswers(
            questions[0].incorrect_answers.concat(questions[0].correct_answer)
          );
        }
      })

      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []); // Empty dependency array to fetch questions only once when the component mounts

  const fetchNextQuesition = () => {
    fetchTriviaQuestions(23, 1)
      .then((questions) => {
        console.log("Trivia questions:", questions[0].correct_answer);
        setCorrectAnswer(questions[0].correct_answer);
        // Handle the questions
        if (questions && questions.length > 0) {
          setQuestion(questions[0].question);
          setAnswers(
            questions[0].incorrect_answers.concat(questions[0].correct_answer)
          );
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  };
  const handleAnswerSelection = (selectedAnswer) => {
    console.log(question);
    console.log(selectedAnswer);

    if (question && correctAnswer) {
      if (selectedAnswer === correctAnswer) {
        console.log("THAT IS CORRECT");
        setPoints(points + 1);
        setQuestionNum(questionNum + 1);
      } else {
        console.error("Question or correct_answer is null");
      }
    }
    setQuestionNum(questionNum + 1);
    fetchNextQuesition();
  };
  return (
    <div className="game-screen">
      <h3>Points: {points}</h3>
      <Link to="/">
        <button className="back-btn">Back</button>
      </Link>

      <h1>Question: {questionNum}</h1>
      <h2>{question}</h2>
      {answers.map((answer, index) => (
        <button key={index} onClick={() => handleAnswerSelection(answer)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default GamePage;
