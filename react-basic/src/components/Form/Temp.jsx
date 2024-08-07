import React from "react";

// Uncontrolled component
export default class Temp extends React.Component {
  componentDidMount() {
    console.log("Temp Mounted");
  }

  componentWillUnmount() {
    console.log("Temp Unmounted");
  }

  render() {
    console.log("Temp Rendered");
    return <p>Name should be of more than 4 characters</p>;
  }
}
