import React from "react";
import "./App.css";
import { useMouse } from "./hooks/useMouse";
import { useCounter } from "./hooks/useCounter";
import { useTimer } from "./hooks/useTimer";

function App() {
  const { mouseX, mouseY } = useMouse();
  const { counter, increment, decrement } = useCounter();
  const { secondsSinceRender } = useTimer();

  return (
    <div className="app">
      <h1>React Hooks</h1>
      <div className="section">
        <h2>Mouse Position</h2>
        <p>
          X: {mouseX}, Y: {mouseY}
        </p>
      </div>
      <div className="section">
        <h2>Seconds Since Render</h2>
        <p>{secondsSinceRender} seconds</p>
      </div>
      <div className="section">
        <h2>Counter</h2>
        <p>Count: {counter}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;

