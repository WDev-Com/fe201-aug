import React from "react";
import "../App.css";

export const NUM = 100;

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: this.props.name,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + this.props.calculationValue,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - this.props.calculationValue,
    });
  }
  render() {
    return (
      <div>
        <h1 onClick={() => this.setState({ name: "CrioDo" })}>
          {this.state.name}
        </h1>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.increment()}>
          +{this.props.calculationValue}
        </button>
        <button onClick={() => this.decrement()}>
          -{this.props.calculationValue}
        </button>
      </div>
    );
  }
}

// export default Counter;

// Default / Named export

// Default Export
// Every Module can have one single default export

// export default -> import
