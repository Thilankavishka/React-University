import "../assets/css/main.css";
import { people } from "./data.js";
import Peoples from "./People.js";

export default function Body() {
  return (
    <>
      <h1 className="body">List Of Famouse people</h1>

      {people.map((item) => (
        <Peoples detail={item}></Peoples>
      ))}
    </>
  );
}
