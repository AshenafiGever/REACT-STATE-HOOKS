import React, { useState } from "react";
import "./Counter.css";

function CounterUsingHooksUseState() {
  // console.log(useState("evangaditech"));
  const [bootCamp,setBootcamp]=useState("TopEvanagadi")

  let [count, setCount] = useState(0);
  const increment = () => {
    count= count+10//never use this it never update it at the interface part it increase in cosole.log(count)
    console.log(count);
   setCount((x)=> x+10);//use this upadter funxtion since it upade clearly on the interface
  };
  return (
    <div className="">
      <h1>{bootCamp}</h1>
      <h1>{setBootcamp}</h1>
      <h1> UseState Example</h1>
      <h1>{count} </h1>
      <h1>{setCount}</h1>{" "}
      <button className="green" onClick={increment}>
            Increment By ten
      </button>
    </div>
  );
}

export default CounterUsingHooksUseState;
