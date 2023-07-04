import React from "react";
import "./books.css";
import { Link } from "react-router-dom";

const Book = ({ data }) => {
  console.log(data[0].Author.name, "this is data");
  return (
    <div className="books">
      {data.map((book) => (
        <div className="bubble" key={book.id}>
          <Link
            to={`/books/${book.title}`}
            state={{
              title: book.title,
              id: book.id,
              author: book.Author.name,
              reason: book.reason,
              genre: book.Genre.genre,
            }}
          >
            <p className="book-title">{book.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Book;
