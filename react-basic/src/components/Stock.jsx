import React, { Component } from "react";

export class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = { entry: 0, value: null };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.getStockData(), 2000);
  }

  getStockData = async () => {
    const res = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    const result = await res.json();
    const value = Object.values(result["Time Series (5min)"])[this.state.entry][
      "4. close"
    ];
    console.log("value", value);

    this.setState((state, props) => ({
      entry: state.entry + 1,
      value: value,
    }));
  };

  componentWillUnmount() {
    console.log("Component is being unmounted");
    clearInterval(this.timerId);
  }

  render() {
    console.log("Component render");
    return (
      <div>
        IBM stock value {this.state.value && <span>{this.state.value}</span>}
      </div>
    );
  }
}
