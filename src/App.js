import "./App.css";
import { useState } from "react"; //to create a state

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const setCountToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1> {count} </h1>
      <button onClick={increaseCount}> Increase </button>
      <button onClick={decreaseCount}> Decrease </button>
      <button onClick={setCountToZero}> Set to Zero </button>
    </div>
  );
}

export default App;
