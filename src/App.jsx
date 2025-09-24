import ClassStateExample from "./Components/ClassStateExample";
// import CounterUsingClassState from "./Components/CounterUsingClassState"
// import AnotherComonents from "./Components/AnotherComonents";
import Rating from "./Components/Rating";
import UsingClassLifeCycleComponent from "./Components/UsingClassLifeCycleComponent";
import CounterUsingHooksUseState from "./Components/CounterUsingHooksUseState";
import Callbackfunctionupdate from "./Components/Callbackfunctionupdate";

function App() {
  return (
    <>
      <div className="App">
        <ClassStateExample />
        {/* <CounterUsingClassState/> */}
        {/* <AnotherComonents/> */}
        <Rating />
        <UsingClassLifeCycleComponent />
        <CounterUsingHooksUseState />
        <Callbackfunctionupdate/>
      </div>
    </>
  );
}

export default App;
