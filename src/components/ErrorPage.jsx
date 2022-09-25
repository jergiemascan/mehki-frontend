import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <h1>Error 404</h1>
      <div>
        <h3>PAGE NOT FOUND</h3>
      </div>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
