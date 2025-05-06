import React from "react";
import AboutContent from "../components/AboutContent";
import { Link } from "react-router-dom";
import "../styles/global.css";

const About: React.FC = () => {
  return (
    <>
      <div className="post-image position-relative">
        <div className="header-navigation">
          <Link to="/" className="home-link me-1">
            <i className="bi bi-house-door" style={{ fontSize: "20px" }}></i>{" "}
            Home
          </Link>
          <span className="text-white">&nbsp;&gt; About</span>
        </div>
      </div>

      {/* Text content section */}
      <div className="container">
        <AboutContent />
      </div>
    </>
  );
};

export default About;
