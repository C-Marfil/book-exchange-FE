import React from "react";
import "./books.css";

const Book = ({ data }) => {
  return (
    <div className="books">
      {data.map((book) => (
        <div className="bubble" key={book.id}>
          <p className="book-title">{book.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Book;
