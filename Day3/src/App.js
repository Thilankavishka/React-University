import "./App.css";
import { sculptureList } from "./components/data";
import { useState } from "react";

const fruit = ["apple", "orange", "graph", "woodapple"];

function App() {
  const [count, setCount] = useState(0);

  function nextElement() {
    if (count > fruit.length - 2) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }
  function previousElement() {
    if (count < 1) {
      setCount(fruit.length - 1);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div>
        <h1>Hello</h1>
        {sculptureList.map((item, id) => (
          <ul key={id}>
            <li>{item.artist}</li>
          </ul>
        ))}
      </div>
      <hr></hr>
      <div>
        <h1>{fruit[count]}</h1>
        <button onClick={previousElement}>Previous Element</button>

        <button onClick={nextElement}>Next Element</button>
      </div>
    </>
  );
}

export default App;
