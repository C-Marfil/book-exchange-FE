import React, { useState } from "react";
import axios from "axios";
import PageTitle from "../PageTitle";
import "./release.css";
import HomeButton from "./HomeButton";

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
      try {
        const res = await axios.post("http://localhost:3000/authors/", {
          name: authorName,
        });
        AuthorId = res.data.id;
      } catch (err) {
        console.log(err.message);
      }
    }
    const book = {
      title,
      AuthorId,
      GenreId,
      reason,
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
      <HomeButton />
      <PageTitle />
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="title--container">
          <input
            className="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="author--container">
          <input
            className="author"
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>

        <div className="genre--container">
          <select
            className="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value=" "> Select Genre </option>
            <option value="10"> Magical Realism </option>
            <option value="11"> Science Fiction </option>
          </select>
        </div>

        <div className="reason--container">
          <textarea
            className="reason"
            name="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>

        <button className="done" type="submit"></button>
      </form>
    </>
  );
};

export default Release;
