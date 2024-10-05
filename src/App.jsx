import { useState } from "react";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>You have seeked advice <strong>{count}</strong> times.🥳</p>
    </div>
  );
}

export default App;
