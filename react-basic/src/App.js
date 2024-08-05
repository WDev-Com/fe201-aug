import "./App.css";
import { Component } from "react";
import { Counter } from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Counter Application</h1>
        <Counter calculationValue={1} name="Basic Counter" />
        <Counter calculationValue={5} name="Advance Counter" />
      </div>
    );
  }
}

export default App;
