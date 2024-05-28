import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home-screen">
      <h1>Welcome to Trivia</h1>
      <Link to="GamePage">
        <button className="home-btn">Start Game</button>
      </Link>
    </div>
  );
};

export default HomePage;
