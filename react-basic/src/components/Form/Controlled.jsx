import React from "react";
import Temp from "./Temp";

//
// Controlled component
export default class Controlled extends React.Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      fullName: "Alok",
      count: 0,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("Form submitted", this.state.fullName);
  }

  handleNameChange(e) {
    console.log(e.target.value);
    this.setState({
      fullName: e.target.value,
    });
  }

  componentDidUpdate() {
    // Automatically invoked whenever state or props change
    console.log("Component updated");
  }

  componentDidMount() {
    // Automatically invoked only once when component is mounted
    console.log("Component mounted");
  }

  render() {
    console.log("Render");
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              value={this.state.fullName}
              onChange={(e) => this.handleNameChange(e)}
            />
          </label>
          <br />
          <Temp count={this.state.count} />
          {/* {this.state.fullName.length <= 4 ? <Temp /> : null}
          <input type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }
}
