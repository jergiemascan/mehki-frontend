import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <Link className="link" to="/signin">
        Sign in
      </Link>
      <Link className="link" to="/register">
        Register
      </Link>
    </div>
  );
};

export default Navbar;
