import { useState } from "react";
import { sculptureList } from "../components/data";

export default function Artist() {
  const [index, setIndex] = useState(0);

  function nextelemen() {
    console.log(sculptureList[index].name);
    if (index > sculptureList.length - 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function Previous() {
    if (index < 1) {
      setIndex(sculptureList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div>
      <h3>{sculptureList[index].name}</h3>
      <img src={sculptureList[index].url} alt={sculptureList[index].alt}></img>
      <p>Artist Name: {sculptureList[index].name}</p>
      <p>Description: {sculptureList[index].description}</p>
      <button onClick={nextelemen}>Next Artist</button>
      <button onClick={Previous}>Previous Artist</button>
    </div>
  );
}
