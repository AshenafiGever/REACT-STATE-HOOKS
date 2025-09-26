import React, { useState, useEffect } from "react";
import './effect.css'

function UseEffect() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(45);
  useEffect(() => {
    console.log("hello world");
    document.title = `Count:${count}`;
  }, [count,age]);
  return (
    <div>
        <h1>Functional based Comonet using effect</h1>
      <div className="valueHolder">
        <h3>THE value of count is: {count}</h3>
    
      </div>
      <button onClick={() => setCount((count) => count + 2)}
        >Increment</button>
        <hr className="BOLD"/>
        <hr/>
        <div className="valueHolder">
            <h3>THE value of age is: {age}</h3>
            </div>
              <button onClick={() => setAge((age) => age + 5)}
        >Increment by Age</button>
    </div>
  );
}

export default UseEffect;
