import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Calculator from "./Calculator";

export default function DarkTheme() {
  const [theme, setDarkTheme] = useState(false);
  const [fsize, setfsize] = useState(10);

  const lightTheme = {
    backgroundColor: "white",
    color: "black",
    fontSize: fsize + "px",
  };

  const DarkTheme = {
    backgroundColor: "black",
    color: "white",
    fontSize: fsize + "px",
  };

  function changeButtonColor() {
    return theme ? "dark" : "light";
  }
  return (
    <>
      <header className="App-header" style={theme ? lightTheme : DarkTheme}>
        <Button
          onClick={() => {
            setDarkTheme(!theme);
          }}
          variant={changeButtonColor()}
        >
          {theme ? "Go Dark" : "Go Light"}
        </Button>
        <br />
        Font Size
        <input
          type="range"
          step="1"
          min="10"
          max="40"
          value={fsize}
          name="FontSize"
          onChange={(e) => {
            setfsize(e.target.value);
            console.log(fsize);
          }}
        ></input>
        <Calculator></Calculator>
      </header>
    </>
  );
}
