import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PageTitle from "../PageTitle";
import HomeButton from "./HomeButton";

const BookProfile = ({ readerID }) => {
  const location = useLocation();
  const { title, author, id, reason, genre, available } = location.state || {};
  const [isAvailable, setIsAvailable] = useState(available); // New state variable

  const handleCatch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(`http://localhost:3000/books/${id}`, {
        available: false,
        ReaderId: `${readerID}`,
      });
      console.log(res, "patch res");
      setIsAvailable(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PageTitle />
      <HomeButton />
      <div>
        <p>{id}</p>
        <h1>{title}</h1>
        <h2>
          {author},{genre}
        </h2>
        <p>{reason}</p>
        {isAvailable ? (
          <button type="button" onClick={handleCatch}>
            Catch this book!
          </button>
        ) : (
          <p> You have claimed this book! </p>
        )}
      </div>
    </>
  );
};

export default BookProfile;
