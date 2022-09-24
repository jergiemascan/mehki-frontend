import React from "react";
import "./Landingpage.css";
import Navbar from "./Navbar";
import bg from ".././pictures/bg.jpg";
import Footer from "./Footer";

const Landingpage = () => {
  return (
    <>
      <div className="landingpage">
        <div className="main">
          <h1 className="content">
            Bored?<br></br> discover people near <br></br>you chat and meet!
            <Navbar />
          </h1>
          <img src={bg} alt="background" className="bg"></img>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landingpage;
