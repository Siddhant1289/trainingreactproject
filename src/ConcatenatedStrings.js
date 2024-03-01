import React, { Component } from "react";

class ConcatenatedStrings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string1: this.props.string1 || "",
      string2: this.props.string2 || "",
    };
  }

  //create a function to concat both strings
  concatenateString() {
    const res1 = this.state.string1.split("").join("-");
    const res2 = this.state.string2.split("").join("-");

    return `${res1}-${res2}`;
  }

  render() {
    return (
      <div>
        <h1>Concatenated Strings</h1>
        <h2>{this.concatenateString()}</h2>
      </div>
    );
  }
}

export default ConcatenatedStrings;
