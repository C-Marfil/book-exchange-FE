import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Welcome from "./Welcome";
import Release from "./components/Release";
import BookProfile from "./components/BookProfile";
import FBLogin from "./components/FBLogin";
import ReaderProfile from "./components/ReaderProfile";
import ProfilePic from "./components/ProfilePic";

const App = () => {
  const [error, setError] = useState("");
  const [readerID, setReaderID] = useState("");
  const [readerInfo, setReaderInfo] = useState({});

  console.log(readerID);

  const handleLogin = (response) => {
    setReaderInfo(response.data.entry);
    setReaderID(response.data.entry.id);
    console.log(response, "response readerInfo");
  };

  const handleLogOut = () => {
    window.FB.logout(() => {
      setReaderID("");
    });
  };

  return (
    <div className="App">
      <FBLogin
        onLogin={(rID) => handleLogin(rID)}
        onLogOut={handleLogOut}
        readerID={readerID}
        readerInfo={readerInfo}
      />
      <ProfilePic readerInfo={readerInfo} />
      <Routes>
        <Route
          path="/readers/:readerID"
          element={
            <ReaderProfile
              readerInfo={readerInfo}
              setReaderInfo={setReaderInfo}
            />
          }
        />
        <Route
          path="/"
          element={
            <Welcome readerID={readerID} error={error} setError={setError} />
          }
        />
        <Route
          path="/release"
          element={
            <Release error={error} readerID={readerID} setError={setError} />
          }
        />
        <Route
          path="/books/:booktitle"
          element={<BookProfile readerID={readerID} />}
        />
      </Routes>
    </div>
  );
};

export default App;
