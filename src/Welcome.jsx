import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Books";
import PageTitle from "./PageTitle";
import "./welcome.css";

const Welcome = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books");
        setData(response.data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  console.log(data);

  return (
    <div>
      <PageTitle />
      <div className="books">{data && <Book data={data} />}</div>
    </div>
  );

};

export default Welcome;
