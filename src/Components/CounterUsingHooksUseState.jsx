import React, { useState } from "react";

function CounterUsingHooksUseState() {
  console.log(useState("evangaditech"));

  let [count, setCount] = useState(0);
  const increment = () => {};
  return (
    <div>
      <h1> UseState Example</h1>
      <h1>{count}</h1>
      <h1>{setCount}</h1> <button onClick={increment}> Increment By ten</button>
    </div>
  );
}

export default CounterUsingHooksUseState;
