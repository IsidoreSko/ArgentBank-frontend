import React from "react";
import { Link } from "react-router-dom";
import iconErrorRed from "../Assets/Images/icon-error.webp";

function Error() {
  return (
    <div className="error-content">
      <h2 className="error404">ERROR</h2>
      <img className="icon-error" src={iconErrorRed} alt="Logo Argent Bank" />
      <p className="error-message">Oops! Page not found.</p>
      <Link className="return" to="/">
        Return to home page
      </Link>
    </div>
  );
}

export default Error;
