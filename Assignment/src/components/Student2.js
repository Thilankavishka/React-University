import { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import Student from "./Student";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

export default function Student3() {
  const [student, setStudent] = useState({
    regno: "",
    name: "",
    course: "",
    gpa: 0.0,
  });

  const [students, setStudents] = useState([]);
  const getStudent = (e) => {
    const { name, value } = e.target;
    setStudent((prevStu) => ({
      ...prevStu, //spread operator
      [name]: value,
    }));
  };

  const addStudent = () => {
    setStudents((prevStu) => [...prevStu, student]);
  };
  return (
    <>
      <table>
        <tr>
          <td align="right">Registration Number:</td>
          <td align="left">
            <input
              type="text"
              name="regno"
              value={student.regno}
              onChange={getStudent}
            ></input>
          </td>
        </tr>
        <tr>
          <td align="right">name:</td>
          <td align="left">
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={getStudent}
            ></input>
          </td>
        </tr>
        <tr>
          <td align="right">Course:</td>
          <td align="left">
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={getStudent}
            ></input>
          </td>
        </tr>
        <tr>
          <td align="right"></td>
          <td align="left">
            <button onClick={addStudent}>ADD</button>
          </td>
        </tr>
      </table>
      <ul>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Name</th>
              <th> Reg No</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.regno}</td>
                <td>{data.course}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ul>
    </>
  );
}
