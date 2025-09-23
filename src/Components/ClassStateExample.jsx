import { Component } from "react";
import AnotherComonents from "./AnotherComonents";

class ClassStateExample extends Component {
  constructor() {
    //super refers to the parent class constructor
    super();

    this.state = {
      state1: 0,
      state2: "hellow their",
    };
  }
  ReactEvent(){
    alert("mallo naa tukte!!")
  }
  render() {
    return (
      <div>
        <h1>This were you call the state</h1>
        <h2>to call the state: {this.state.state2}</h2>
        <button onClick={this.ReactEvent}> click me</button>

        <AnotherComonents someproperty={this.state.state2} />
      </div>
    );
  }
}
export default ClassStateExample;
