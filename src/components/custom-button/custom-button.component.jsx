import React from "react";
import google from "../../assets/svg/google.svg";
import facebook from "../../assets/svg/facebook.svg";
import twitter from "../../assets/svg/twitter.svg";
import github from "../../assets/svg/github.svg";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  isFaceBookSignIn,
  isTwitterSignIn,
  isGithubSignIn,
  isEmpty,
  ...otherProps
}) => {
  const socialBtn = (
    isGoogleSignIn,
    isFaceBookSignIn,
    isTwitterSignIn,
    isGithubSignIn
  ) => {
    if (isGoogleSignIn) {
      return "google-sign-in social-btn";
    } else if (isFaceBookSignIn) {
      return "facebook-sign-in social-btn";
    } else if (isTwitterSignIn) {
      return "twitter-sign-in social-btn";
    } else if (isGithubSignIn) {
      return "github-sign-in social-btn";
    } else {
      return "";
    }
  };

  const socialIcon = (
    isGoogleSignIn,
    isFaceBookSignIn,
    isTwitterSignIn,
    isGithubSignIn
  ) => {
    if (isGoogleSignIn) {
      return (
        <span>
          <img src={google} className="icon " alt="" />
        </span>
      );
    } else if (isFaceBookSignIn) {
      return (
        <span>
          <img src={facebook} className="icon facebook" alt="" />
        </span>
      );
    } else if (isTwitterSignIn) {
      return (
        <span>
          <img src={twitter} className="icon facebook" alt="" />
        </span>
      );
    } else if (isGithubSignIn) {
      return (
        <span>
          <img src={github} className="icon facebook" alt="" />
        </span>
      );
    } else {
      return "";
    }
  };

  return (
    <button
      disabled={isEmpty}
      className={`${socialBtn(
        isGoogleSignIn,
        isFaceBookSignIn,
        isTwitterSignIn,
        isGithubSignIn
      )} custom-button`}
      {...otherProps}
    >
      {socialIcon(
        isGoogleSignIn,
        isFaceBookSignIn,
        isTwitterSignIn,
        isGithubSignIn
      )}

      <span>{children}</span>
    </button>
  );
};
export default CustomButton;
