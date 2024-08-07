import React from "react";

// Uncontrolled component
export default class UnControlled extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("name", e.target.fullName.value);
  }
  handleNameValidation(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              onChange={this.handleNameValidation}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
