import React from "react";
import "./page-title.css";
import { useLocation } from "react-router";

const PageTitle = () => {
  const { pathname } = useLocation();
  const titleRender = pathname === "/release";
  return (
    <div>
      <div className="sea">
        <img
          className={titleRender ? "bigsun" : "sun"}
          src="../assets/Ellipse 11sun.png"
          alt="sun"
        />

        {titleRender && (
          <img
            className="title"
            src="../assets/Group 1title2.png"
            alt="release your book!"
          />
        )}

        {!titleRender && (
          <img
            className="title"
            src="../assets/Group 1title.png"
            alt="find your next read!"
          />
        )}

        <img
          className="sea-wave"
          src="../assets/Group 5sea.png"
          alt="sea wave"
        />
      </div>
    </div>
  );
};

export default PageTitle;
