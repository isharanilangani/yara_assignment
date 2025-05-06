import React from "react";
import AboutContent from "../components/AboutContent";
import { Link } from "react-router-dom";
import "../styles/global.css";

const About: React.FC = () => {
  return (
    <>
      {/* Image Section */}
      <div className="post-image position-relative">
        <div className="header-navigation position-absolute top-0 start-0 m-3 fw-bold">
          <Link to="/" className="home-link me-1">
            <i className="bi bi-house-door fw-bold icon-home"></i>{" "}
          </Link>
          <span className="text-white">&nbsp;&gt; About</span>
        </div>
      </div>

      {/* Text section */}
      <div className="container container-margin">
        <AboutContent />
      </div>
    </>
  );
};

export default About;
