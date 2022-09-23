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
      <button onClick={signoutHandler}>Sign out</button>
    </div>
  );
};
export default SignOut;
