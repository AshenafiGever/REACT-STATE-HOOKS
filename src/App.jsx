import ClassStateExample from "./Components/ClassStateExample";
// import CounterUsingClassState from "./Components/CounterUsingClassState"
// import AnotherComonents from "./Components/AnotherComonents";
import Rating from "./Components/Rating";
import UsingClassLifeCycleComponent from "./Components/UsingClassLifeCycleComponent";
import CounterUsingHooksUseState from "./Components/CounterUsingHooksUseState";

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
      </div>
    </>
  );
}

export default App;
