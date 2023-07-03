import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "./Books";
import PageTitle from "./PageTitle";
import "./welcome.css";
import ReleaseLink from "./components/ReleaseLink";

const Welcome = ({ error, setError }) => {
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
      <ReleaseLink />
      <PageTitle />
      <div className="books--container">{data && <Book data={data} />}</div>
    </div>
  );

};

export default Welcome;
