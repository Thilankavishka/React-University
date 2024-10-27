import Button from "react-bootstrap/Button";
import "../assets/main.css";

export default function Buttons({
  passpreviousefunc,
  passfirstelementfunc,
  passlastelementfunc,
  passnextfunc,
}) {
  return (
    <>
      <div className="nav-buttons ">
        <div className="buttons ">
          <Button onClick={passpreviousefunc} variant="primary">
            Previouse
          </Button>
          <Button onClick={passfirstelementfunc} variant="secondary">
            First
          </Button>
          <Button onClick={passlastelementfunc} variant="secondary">
            Last
          </Button>
          <Button onClick={passnextfunc} variant="primary">
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
