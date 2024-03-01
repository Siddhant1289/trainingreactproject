// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>Let's Learn React</h2>
      <Person name="Karan" age={22} first={10} second={20}></Person>
    </div>
  );
}

export default App;
