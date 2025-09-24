import React, { useState } from "react";
import './Counterhome.css'

function CounterUsingHooksUseState() {
  console.log(useState("evangaditech"));
  const [bootCamp,setBootcamp]= useState("TopEvangadi")

  console.log(bootCamp)

  let [count, setCount] = useState(0);
  const increment = () => {
    // count= count+10;
    setCount((x)=> x+10);
  };
  return (
    <div>
      <h1> UseState Example</h1>
      <h1> {bootCamp}</h1>
      <h1>{count}</h1>
      <h1>{setCount}</h1> <button  className="green" onClick={increment}> Increment By ten</button>
    </div>
  );
}

export default CounterUsingHooksUseState;
