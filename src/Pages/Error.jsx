// function Error() {
//   return <div className=""></div>;
// }
// export default Error;

import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-content">
      <h2 className="error404">ERROR</h2>
      <p className="error-message">
        Oops! The page you are requesting does not exist.
      </p>
      <Link className="return" to="/">
        Return to home page
      </Link>
    </div>
  );
}

export default Error;
