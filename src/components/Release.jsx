import React, { useState } from "react";
import axios from "axios";
import PageTitle from "../PageTitle";
import "./release.css";

const Release = ({ setError }) => {
  const [author, setAuthor] = useState("");

  const handleSearch = async (e) => {
    try {
      const model = e.target.id;
      const options = {
        authors: "author",
        books: "book",
      };
      const response = await axios.get(
        `http://localhost:3000/${model}/${options[model]}/`
      );
      setAuthor(response.data);
      console.log(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Book Title" />
        <input
          type="text"
          id="authors"
          placeholder="Author"
          onChange={() => handleSearch()}
        />
        <input type="text" className="text-field" placeholder="Genre" />

        <button type="submit" className="done" aria-label="done" />
      </form>
      <PageTitle />
    </div>
  );
};

export default Release;
