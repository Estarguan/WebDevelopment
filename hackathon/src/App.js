import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import { useState } from "react";

function App() {
  const [points, setPoints] = useState(0);
  return (
    <>
      <h1 className="points">Total Points: {points}</h1>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/GamePage"
            element={<GamePage points={points} setPoints={setPoints} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
