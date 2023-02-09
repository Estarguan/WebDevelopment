import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <button className="increase-button" onClick={increase}>
        Increase count
      </button>
      <p>{count}</p>
      <p>GOOD JOB</p>
    </div>
  );
}

export default App;
