import { createContext } from "react";
// import ClassStateExample from "./Components/ClassStateExample";
// import Component1 from "./Components/Usecontext/Component1";
// import CounterUsingClassState from "./Components/CounterUsingClassState"
// import AnotherComonents from "./Components/AnotherComonents";
// import Rating from "./Components/Rating";
// import UsingClassLifeCycleComponent from "./Components/UsingClassLifeCycleComponent";
// import CounterUsingHooksUseState from "./Components/CounterUsingHooksUseState";
// import Callbackfunctionupdate from "./Components/Callbackfunctionupdate";
import UseEffect from "./Components/UseEffect";
export const MyContext= createContext();
console.log(MyContext);
import Component1 from "./Components/Usecontext/Component1";


function App() {
  return (
    <>
      <div className="App">
        {/* <ClassStateExample /> */}
        {/* <CounterUsingClassState/> */}
        {/* <AnotherComonents/> */}
        {/* <Rating /> */}
        {/* <UsingClassLifeCycleComponent /> */}
        {/* <CounterUsingHooksUseState /> */}
        {/* <Callbackfunctionupdate/> */}
        <UseEffect/>
        <MyContext.Provider value={"Abebe beso nyatee"}>
          <Component1/>
        </MyContext.Provider>
      </div>
      </>
  );
}

export default App;
