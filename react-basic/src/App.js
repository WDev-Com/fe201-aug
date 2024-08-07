import "./App.css";
import { Component } from "react";
import UnControlled from "./components/Form/UnControlled";
import Controlled from "./components/Form/Controlled";
// import { Counter } from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>Counter Application</h1> */}
        {/* <Counter calculationValue={1} name="Basic Counter" /> */}
        {/* <Counter calculationValue={5} name="Advance Counter" /> */}
        <h1>UnControlled Form</h1>
        <UnControlled />
        <h1>Controlled Form</h1>
        <Controlled />
      </div>
    );
  }
}

export default App;
