import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  return (
    <>
      <table>
        <tr>
          <td>
            Num1:
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(Number(e.target.value))}
            ></input>
          </td>
        </tr>
        <tr>
          <td>
            Num2:
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(Number(e.target.value))}
            ></input>
          </td>
        </tr>
        <tr>
          <td>Sum</td>
          <td>{num1 + num2}</td>
        </tr>
        <tr>
          <td>Sub</td>
          <td>{num1 - num2}</td>
        </tr>
        <tr>
          <td>Mul</td>
          <td>{num1 * num2}</td>
        </tr>
        <tr>
          <td>Div</td>
          <td>{num1 / num2}</td>
        </tr>
      </table>
    </>
  );
}
