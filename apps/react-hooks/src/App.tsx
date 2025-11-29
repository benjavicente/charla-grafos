import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [secondsSinceRender, setSecondsSinceRender] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const renderTime = Date.now();

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Update seconds counter
    const intervalId = setInterval(() => {
      const seconds = Math.floor((Date.now() - renderTime) / 1000);
      setSecondsSinceRender(seconds);
    }, 1000);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

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
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;

