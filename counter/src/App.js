import React, { useState } from 'react';
import "./styles.css";
export default function App() {
  const countValue = 0;
  const [count, setCount] = useState(constValue);

  const updateCount = n => {
    if (typeof n === "number") {
      setCount(n);
    }
  };

  return (

    <div>
      <input
        type="number"
        count={count}
        onChange={e => updateCount(e.target.value)}
      />
      <p>{count}</p>

      <div>
        <p>The counter is at : {count} </p>
        <button onClick={() => setCount(count + 1)}>>
          +1
      </button>
        <button onClick={() => setCount(count - 1)}>>
          -1
      </button>
      </div>
      );
    }
  
export default Counter