import { useEffect, useState } from "react";

function Screen() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    getAdvice();
  }, []);

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
      <p>
        You have received <strong>{count}</strong> advice today🥳
      </p>
    </div>
  );
}

export default Screen;
