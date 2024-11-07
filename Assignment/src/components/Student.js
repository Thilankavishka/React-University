import { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({
    regno: "",
    name: "",
    age: "",
    course: "",
    gpa: "",
  });

  const [students, setStudents] = useState([]);

  const getStudent = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const addStudent = (e) => {
    e.preventDefault();
    //4
    if (!student.regno || !student.name) {
      alert("Registration number and Name required.");
      return;
    }
    //5
    if (students.some((studen) => studen.regno === student.regno)) {
      alert("Registration number uniqued.");
      return;
    }

    /*2*/

    setStudents((prevStudents) => [...prevStudents, student]);
    /*3*/
    setStudent({ regno: "", name: "", age: "", course: "", gpa: "" });
  };

  //9
  const deleteStudent = (regno) => {
    setStudents(students.filter((studen) => studen.regno !== regno));
  };
  //8
  const getGpaClass = (gpa) => {
    if (gpa >= 3.5) return "first-class";
    if (gpa >= 2.5) return "second-upper";
    return "second-lower";
  };

  //10
  const calculateSummary = () => {
    const total = students.length;
    const averageage = total
      ? (
          students.reduce(
            (sum, studen) => sum + parseFloat(studen.age || 0),
            0
          ) / total
        ).toFixed(1)
      : 0;
    const averagegpa = total
      ? (
          students.reduce(
            (sum, studen) => sum + parseFloat(studen.gpa || 0),
            0
          ) / total
        ).toFixed(2)
      : 0;
    return { total, averageage, averagegpa };
  };

  return (
    <>
      {/*1*/}
      <h2>Add Student</h2>
      <form onSubmit={addStudent}>
        <table>
          <tbody>
            <tr>
              <td align="right">Reg Number:</td>
              <td align="left">
                <input
                  type="text"
                  name="regno"
                  value={student.regno}
                  onChange={getStudent}
                />
              </td>
            </tr>
            <tr>
              <td align="right">Name:</td>
              <td align="left">
                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={getStudent}
                />
              </td>
            </tr>
            <tr>
              <td align="right">Age:</td>
              <td align="left">
                <input
                  type="text"
                  name="age"
                  value={student.age}
                  onChange={getStudent}
                />
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
                />
              </td>
            </tr>
            <tr>
              <td align="right">GPA:</td>
              <td align="left">
                <input
                  type="text"
                  name="gpa"
                  value={student.gpa}
                  onChange={getStudent}
                />
              </td>
            </tr>
            <tr>
              <td align="right"></td>
              <td align="left">
                <button type="submit">Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      {/*7*/}
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <>
          {/*6*/}
          <h3>Students List</h3>
          <ul>
            {students.map((studen) => (
              <li key={studen.regno}>
                <strong>{studen.name}</strong> (Reg: {studen.regno}) - Age:{" "}
                {studen.age}, Course: {studen.course}, GPA:{" "}
                <span className={getGpaClass(studen.gpa)}>{studen.gpa}</span>
                <button onClick={() => deleteStudent(studen.regno)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      <h3>Summary</h3>
      <p>Total Students: {calculateSummary().total}</p>
      <p>Average Age: {calculateSummary().averageage}</p>
      <p>Average GPA: {calculateSummary().averagegpa}</p>

      <style jsx>{`
        .first-class {
          color: green;
          font-weight: bold;
        }
        .second-upper {
          color: blue;
          font-weight: bold;
        }
        .second-lower {
          color: orange;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
