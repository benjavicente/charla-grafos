import React, { Component } from "react";
import "./App.css";

interface AppState {
  mouseX: number;
  mouseY: number;
  secondsSinceRender: number;
  counter: number;
}

class App extends Component<{}, AppState> {
  private renderTime: number;
  private intervalId: ReturnType<typeof setInterval> | null;

  constructor(props: {}) {
    super(props);
    this.state = {
      mouseX: 0,
      mouseY: 0,
      secondsSinceRender: 0,
      counter: 0,
    };
    this.renderTime = Date.now();
    this.intervalId = null;
  }

  componentDidMount() {
    // Track mouse position
    document.addEventListener("mousemove", this.handleMouseMove);

    // Update seconds counter
    this.intervalId = setInterval(() => {
      const seconds = Math.floor((Date.now() - this.renderTime) / 1000);
      this.setState({ secondsSinceRender: seconds });
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.handleMouseMove);
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  handleMouseMove = (e: MouseEvent) => {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    });
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return (
      <div className="app">
        <h1>React Class Components</h1>
        <div className="section">
          <h2>Mouse Position</h2>
          <p>
            X: {this.state.mouseX}, Y: {this.state.mouseY}
          </p>
        </div>
        <div className="section">
          <h2>Seconds Since Render</h2>
          <p>{this.state.secondsSinceRender} seconds</p>
        </div>
        <div className="section">
          <h2>Counter</h2>
          <p>Count: {this.state.counter}</p>
          <button onClick={this.handleIncrement}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}

export default App;

