import React from "react";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const signoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };
  return (
    <div>
      <button type="submit" className="btn-auth" onClick={signoutHandler}>
        Sign out
      </button>
    </div>
  );
};
export default SignOut;
