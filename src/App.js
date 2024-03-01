// import logo from "./logo.svg";
import "./App.css";
import ConcatenatedStrings from "./ConcatenatedStrings";
import Person from "./Person";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Let's Learn React</h2>
      <Person name="Karan" age={22} first={10} second={20}></Person>
      <Student rollno={1} name="Rahul"></Student>
      <ConcatenatedStrings
        string1="Hello"
        string2="Welcome"
      ></ConcatenatedStrings>
    </div>
  );
}

export default App;
