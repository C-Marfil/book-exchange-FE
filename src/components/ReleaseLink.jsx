import React from "react";
import { Link } from "react-router-dom";
import "./release-link.css";

const ReleaseLink = () => {
  return (
    <div>
      <Link to="/release">
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
