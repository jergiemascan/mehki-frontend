import React from "react";
import "./Landingpage.css";
import Navbar from "./Navbar";

const Landingpage = () => {
  return (
    <div className="landingpage">
      <div className="content">
        <h1>Welcome to Mehki Chatroom</h1>
      </div>
      <Navbar />
    </div>
  );
};

export default Landingpage;
