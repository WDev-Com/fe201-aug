import "./App.css";
import { Component } from "react";
import UnControlled from "./components/Form/UnControlled";
import Controlled from "./components/Form/Controlled";
import { Mount } from "./components/Mount";
import { Update } from "./components/Update";
import { Stock } from "./components/Stock";
import { FuncCounter } from "./components/FuncCounter";
// import { Counter } from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: 1, checked: false };
  }
  render() {
    return (
      <div className="App">
        <h1>Counter Application</h1>
        <FuncCounter name="Basic Counter">Hey, there!!!</FuncCounter>
        {/* <Counter calculationValue={1} name="Basic Counter" /> */}
        {/* <Counter calculationValue={5} name="Advance Counter" /> */}
        {/* <h1>UnControlled Form</h1> */}
        {/* <UnControlled /> */}
        {/* <h1>Controlled Form</h1> */}
        {/* <Controlled /> */}
        {/* <Mount /> */}
        {/* <input
          type="number"
          value={this.state.userId}
          onChange={(event) => this.setState({ userId: event.target.value })}
        /> */}
        {/* <Update userId={this.state.userId} /> */}
        {/* <input
          type="checkbox"
          checked={this.state.checked}
          onChange={(e) => this.setState({ checked: e.target.checked })}
        /> */}
        {/* {this.state.checked && <Stock />} */}
      </div>
    );
  }
}

export default App;

// Before React v16.8
// Class component => StateFul component/Smart Component
// Function component => Stateless Component/Dumb Component

// With React v16.8 hooks get introduced
// Function component => Can store state
