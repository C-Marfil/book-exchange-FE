import React from "react";
import { useNavigate } from "react-router";
import "./profilePic.css";

const ProfilePic = ({ readerInfo }) => {
  const { id, profilePicture } = readerInfo;
  const navigate = useNavigate();
  const handleProfile = () => {
    navigate(`/readers/${id}`);
  };

  return (
    <img
      src={profilePicture}
      className="pic"
      alt="user profile pic"
      onClick={handleProfile}
    />
  );
};

export default ProfilePic;
