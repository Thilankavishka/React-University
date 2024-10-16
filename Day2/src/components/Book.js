import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "../assets/main.css";

export default function Book({ book }) {
  const [selectedBook, setSelectedBook] = useState(null);
  const detail = (book) => {
    console.log(`id: ${book.id} book pages:${book.pages}`);
    //return `id: ${book.id}, book pages: ${book.pages}`;
    setSelectedBook(`id: ${book.id}, 
         book pages: ${book.pages}`);
  };
  return (
    <>
      <div className="boxes">
        {book.map((item) => (
          <ul>
            <li>
              <b>{item.name}</b>
            </li>
            <Button onClick={() => detail(item)}>View Details</Button>
            <hr></hr>
          </ul>
        ))}
      </div>
      <div className="boxes2">
        <h2>
          <b>Book Details</b>
        </h2>

        {selectedBook && <p>{selectedBook}</p>}
      </div>
    </>
  );
}
