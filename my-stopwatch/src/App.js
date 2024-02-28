import './App.css';
import {useState, useEffect} from "react";

function App() {
  const[isRunning, setIsRunning] = useState(false);
  const[elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      }, 1000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId); // Clear the interval if it exists.
    };
  }, [isRunning]);
  

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  

  const reset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const startstop = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };
  return (
    <div className="App">
      <h1>STOPWATCH</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startstop}>{isRunning? "Stop": "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
