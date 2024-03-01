function Person(props) {
  return (
    <div>
      <h1>Hello, I am a person.</h1>
      <div>This Is Person Div</div>
      <h3>Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h4>Sum = {props.first + props.second}</h4>
    </div>
  );
}

export default Person;
