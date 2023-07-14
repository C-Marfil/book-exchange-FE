import React from "react";

const ReaderProfile = ({ readerInfo, setReaderInfo }) => {
  console.log(readerInfo);

  return (
    <div>
      <h1> Reader Name: </h1>
      <h2> Books released: </h2>
      <h3> Books caught: </h3>
    </div>
  );
};

export default ReaderProfile;
