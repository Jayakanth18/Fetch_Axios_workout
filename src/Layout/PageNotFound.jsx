import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Go To <Link to="fetch">Default</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
