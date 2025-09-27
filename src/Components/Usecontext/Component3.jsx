import React from "react";
import { MyContext } from "../../App";

function Component3() {
  return (
    <div>
      <MyContext.Consumer>
        {(data) => {
            console.log(data)
          return (
            <div>
              <h1>The Last Child</h1>
              <p>Using Context API:{data}</p>
            </div>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
}

export default Component3;
