import React from "react";
import { Link } from "react-router-dom";
import "./release-link.css";

const ReleaseLink = ({ setRel }) => {
  return (
    <div>
      <Link to="/release" onClick={() => setRel(true)}>
        <img
          className="release"
          src="../../assets/Group 2orrelease.png"
          alt="sun"
        />
      </Link>
    </div>
  );
};

export default ReleaseLink;
