import React from "react";
import "./CustomButton.style.scss";

const CButton = ({ children,handleclick, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ''}custom-button`}
    {...otherProps}
    onClick={handleclick}
  >
    {children}
  </button>
);

export default CButton;
  