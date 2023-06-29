import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Welcome from "./Welcome";
import Release from "./components/Release";

const App = () => {
  const [error, setError] = useState("");

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Welcome error={error} setError={setError} />}
        />
        <Route
          path="/release"
          element={<Release error={error} setError={setError} />}
        />
      </Routes>
    </div>
  );
};

export default App;
