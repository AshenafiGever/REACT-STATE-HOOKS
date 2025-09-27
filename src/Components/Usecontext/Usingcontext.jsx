import React, { useContext } from "react";
import { MyContext } from "../../App";

function Usingcontext() {
  const exampleContext = useContext(MyContext);
  return (
    <div>
        <hr />
        <hr />
      <p>Using the useContext hook:{exampleContext}</p>
    </div>
  );
}

export default Usingcontext;
