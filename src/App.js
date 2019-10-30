import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const incrementAsync = () => setTimeout(() => setCount(count + 1), 100);
  const decrementAsync = () => setTimeout(() => setCount(count - 1), 100);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Learning react-testing-library</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="counter-test-id">Current counter: {count}</p>
        <div className="flex-row">
          <button className="main-button" onClick={increment}>
            +
          </button>
          <button className="main-button" onClick={decrement}>
            -
          </button>
        </div>
        <div className="flex-row">
          <button className="main-button" onClick={incrementAsync}>
            + Async
          </button>
          <button className="main-button" onClick={decrementAsync}>
            - Async
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
