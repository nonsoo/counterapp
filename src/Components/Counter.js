import React from "react";
import { useState } from "react";
import "../CSS/counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="Counter">The count is: {count}</p>
      <button className="btnStyle" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btnStyle" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <button className="btnStyle" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
