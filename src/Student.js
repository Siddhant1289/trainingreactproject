import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rollno: this.props.rollno || "Unknown",
      name: this.props.name || "Unknown",
    };
  }

  render() {
    return (
      <div>
        <h1>Hello, This is Student</h1>
        <h2>RollNo: {this.state.rollno}</h2>
        <h2>Name: {this.state.name}</h2>
      </div>
    );
  }
}
export default Student;
