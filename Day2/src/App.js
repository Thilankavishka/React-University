import logo from "./logo.svg";
import "./App.css";
import Mycont from "./components/Mtcont";
import Book from "./components/Book";
import "./assets/main.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const sum = (a, b) => {
    const s = a + b;
    return s;
  };
  const books = [
    { id: "uov125", name: "Fundamentals of Programming", pages: 200 },
    { id: "uov126", name: "javaScript for beginners", pages: 150 },
    { id: "uov127", name: "Knowledge base: Guide Book", pages: 200 },
    { id: "uov128", name: "Newsletter issue 2, Vol 1", pages: 20 },
    { id: "uov129", name: "Modern Web App", pages: 450 },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <Mycont msg="hello react!" dosum={sum}></Mycont>
        </Col>
        <Col>
          <h1 className="header">Book Shop</h1>

          <hr></hr>
          <Book book={books}></Book>
          <hr></hr>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
