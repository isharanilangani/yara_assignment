import React from "react";
import AboutContent from "../components/AboutContent";
import { Link } from "react-router-dom";
import "../styles/global.css";

const About: React.FC = () => {
  return (
    <>
      <div className="post-image position-relative">
        <div className="header-navigation position-absolute top-0 start-0 m-3 fw-bold">
          <Link to="/" className="home-link me-1">
            <i className="bi bi-house-door fw-bold" style={{ fontSize: "20px" }}></i>{" "}
          </Link>
          <span className="text-white">&nbsp;&gt; About</span>
        </div>
      </div>

      {/* Text content section */}
      <div
        className="container"
        style={{ marginTop: "-70px", zIndex: 2, position: "relative" }}
      >
        <AboutContent />
      </div>
    </>
  );
};

export default About;
