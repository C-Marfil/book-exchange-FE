import React from "react";
import "./books.css";
import { Link } from "react-router-dom";

const Book = ({ data }) => {
  return (
    <div className="books">
      {data.map((book) => {
        if (book.available) {
          return (
            <div className="bubble" key={book.id}>
              <Link
                to={`/books/${book.title}`}
                state={{
                  title: book.title,
                  id: book.id,
                  author: book.Author.name,
                  reason: book.reason,
                  genre: book.Genre.genre,
                  available: book.available,
                }}
              >
                <p className="book-title">{book.title}</p>
              </Link>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Book;
