import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const ReaderProfile = ({ readerInfo, setReaderInfo }) => {
  const { id, name, email } = readerInfo;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchReader = async () => {
      if (id) {
        try {
          const reader = await axios.get(`http://localhost:3000/readers/${id}`);
          setBooks(reader.data.Books);
          console.log(books, "books");
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    fetchReader();
  }, [id]);

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`http://localhost:3000/books/${bookId}`);
      const updatedReader = await axios.get(`http://localhost:3000/readers/${id}`);
      setBooks(updatedReader.data.Books);
    } catch (err) {
      console.log(err.message);
    }
  };
  

  return (
    <div>
      <HomeButton />
      <h1>
        {id}, {name}
      </h1>
      <h2>{email}</h2>
      <h2>Books released:</h2>
      {books && books.length > 0 ? (
        <div className="books">
          {books.map((book) => {
            if (book.available) {
              return (
                <div className="bubble" key={book.id}>
                  <Link
                    to={`/books/${book.title}`}
                    state={{
                      title: book.title,
                      id: book.id,
                      authorId: book.AuthorId,
                      reason: book.reason,
                      genreId: book.GenreId,
                      available: book.available,
                    }}
                  >
                    <p className="book-title">{book.title}</p>
                  </Link>
                  <button type="button" onClick={() => handleDelete(book.id)}>
                    Delete
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      ) : (
        <p>No books released</p>
      )}
      <h3>Books caught:</h3>
      {books && books.length > 0 ? (
        <div className="books">
          {books.map((book) => {
            if (!book.available) {
              return (
                <div className="bubble" key={book.id}>
                  <Link
                    to={`/books/${book.title}`}
                    state={{
                      title: book.title,
                      id: book.id,
                      authorId: book.AuthorId,
                      reason: book.reason,
                      genreId: book.GenreId,
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
      ) : (
        <p>No books released</p>
      )}
    </div>
  );
};

export default ReaderProfile;
