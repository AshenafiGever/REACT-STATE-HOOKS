import React, { Component } from "react";

class UsingClassLifeCycleComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      age: 42,
    };
  }
  componentDidMount() {
    // alert ("GOOGLE")
    console.log("componentDidMount");
    document.title = `count:(${this.state.count})`;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component Did Update");
     document.title = `count:(${this.state.count})`;
    if(prevState.count!=this.state.count){
    // document.title = `count:(${this.state.count})`;
  }}
  render() {
    return (
      <div>
        {" "}
        <button onClick={() => this.setState({ count: this.state.count + 2 })}>
          Count {this.state.count}
        </button>
      </div>
    );
  }
}

export default UsingClassLifeCycleComponent;
