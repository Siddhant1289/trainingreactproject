import React, { useState, useEffect } from "react";

function Person(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    setName(props.name);
    setAge(props.age);
  }, [props.name, props.age]);

  return (
    <div>
      <h1>Hello, I am a person.</h1>
      <div>This Is Person Div</div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h4>Sum = {props.first + props.second}</h4>
    </div>
  );
}

export default Person;
