import React from "react";
import PageTitle from "../PageTitle";
import { useLocation } from "react-router-dom";
import HomeButton from "./HomeButton";

const BookProfile = () => {
  const location = useLocation();
  const { title, author, id, reason, genre } = location.state || {};
  console.log(author);
  

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
      </div>
    </>
  );
};

export default BookProfile;
