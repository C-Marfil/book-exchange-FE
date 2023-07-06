import React from "react";
import axios from "axios";
import "./fblogin.css";
import FacebookLogin from "react-facebook-login";

const FBLogin = ({ readerID, onLogin, onLogOut }) => {
  const responseFacebook = (response) => {
    const { picture, name, email } = response;
    const profilePicture = picture.data.url;
    
    axios
      .post("http://localhost:3000/readers/", { name, email, profilePicture })
      .then((res) => {
        console.log(res, "POST READER TO SERVER RES");
        onLogin(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      {readerID ? (
        <button type="button" onClick={onLogOut}>
          Log Out
        </button>
      ) : (
        <FacebookLogin
          appId="1209535509689351"
          autoLoad
          fields="name,email,picture"
          cssClass="my-facebook-button-class"
          callback={responseFacebook}
        />
      )}
      ;
    </div>
  );
};

export default FBLogin;
