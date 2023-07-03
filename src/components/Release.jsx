import React, { useState } from "react";
import axios from "axios";
import PageTitle from "../PageTitle";
import "./release.css";

const Release = () => {
  const [authorName, setAuthorName] = useState(" ");
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let AuthorId = "";
    const GenreId = genre;

    try {
      const authorId = await axios.get(
        `http://localhost:3000/authors/author/${authorName}`
      );
      console.log("authordata", authorId.data.id);
      AuthorId = authorId.data.id;
    } catch (error) {
      console.error(error.message, "The author does not exist");
    }

    const book = {
      title,
      AuthorId,
      GenreId,
    };
    console.log(book);

    try {
      const res = await axios.post("http://localhost:3000/books/", book);
      console.log("res", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PageTitle />
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <label>
          Author:
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Genre:
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value=" "> Select Genre </option>
            <option value="1"> Magical Realism </option>
            <option value="3"> Science Fiction </option>
          </select>
        </label>
        <label>
          Reason to Release:
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </label>
        <button type="submit">Done</button>
      </form>
    </>
  );
};

export default Release;
