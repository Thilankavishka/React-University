import "./App.css";
import { sculptureList } from "./components/data";
import { useState } from "react";

const fruit = ["apple", "orange", "graph", "woodapple"];

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(fruit[0]);

  function nextElement() {
    if (count === fruit.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }

    setArr(fruit[count]);
  }

  function previousElement() {
    let c;
    if (count === 0) {
      c = fruit.length - 1;
      setCount(c);
    } else {
      c = count - 1;
      setCount(c);
    }

    setArr(fruit[c]);
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
        <h1>{arr}</h1>
        <button onClick={previousElement}>Previous Element</button>

        <button onClick={nextElement}>Next Element</button>
      </div>
    </>
  );
}

export default App;
