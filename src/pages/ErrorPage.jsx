import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-block">
      <img
        className="error-image"
        src="./images/death-star-error.svg"
        alt="death-star"
      />
      <p className="error-code">404</p>
      <Link className="return-button-link" to="/">
        <button className="basic-button error-button">Return</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
