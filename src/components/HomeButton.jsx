import React from "react";
import { useNavigate } from "react-router";
import "./homebutton.css";

const HomeButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        aria-label="home button"
        className="home-button"
        type="button"
        onClick={handleBack}
      />
    </div>
  );
};

export default HomeButton;
