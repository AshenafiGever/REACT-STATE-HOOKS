import React, { Component } from "react";

class Rating extends Component {
  constructor() {
    //super refers to the parent class constructor
    super();

    this.state = {
      value: 5,
    };
  }
  increment = () => {
    // this.setState({ value: this.state.value + 1 });
    this.setState((state) => {
      return {
        value: state.value + 1,
      };
    });
    // this.setState.value({value:9});
  };
  decrement = () => {
    this.setState((state) => {
      return {
        value: state.value - 1,
      };
    });
  };
  render() {
    // Conditional Rendering in React
    let initialText = "AV.RATED";
    let changedText = "you are rated";
    let displayText = "";

    let counter = 1;

    if (this.state.value != 5) {
      counter = counter + 1;
    }

    if (counter >= 2) {
      displayText = changedText;
    } else {
      displayText = initialText;
    }
    return (
      <div className="rating-wrapper">
        <h3>please rate this mac</h3>
        <div>
          <button className="postive" onClick={this.increment}>
            RatE-up
          </button>
          <button className="negative" onClick={this.decrement}>
            RATE-DOWN
          </button>
          <div className="rating-result">
            {displayText}
            {this.state.value}
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
