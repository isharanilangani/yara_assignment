import React from "react";
import PostsFetch from "../components/PostsFetch";

const Home: React.FC = () => {
  return (
    <div className="position-relative">
      <section className="pt-5 bg-white" style={{ marginTop: "80px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <h1 className="display-4 fw-bold text-dark">
                Innovative Solutions for Modern Businesses
              </h1>
              <p className="lead text-secondary mt-3">
                Empowering your vision with expertly crafted digital products
                that deliver real results.
              </p>
              <a
                href="#posts"
                className="btn btn-primary mt-3 px-4 rounded-pill"
              >
                Explore
              </a>
            </div>

            {/* Oval Image - Right */}
            <div className="col-md-6 cloud-shape-container">
              <div className="cloud-shape mx-auto"></div>

              {/* SVG with Cloud Shape Definition */}
              <svg width="0" height="0">
                <defs>
                  <clipPath id="cloud-shape" clipPathUnits="objectBoundingBox">
                    <path d="M0.4,0 C0.8,0.1 0.8,0 0.8,0.1 C0.8,0.2 1,0.6 0.8,0.8 C0.8,1 0.5,1 0.4,0.9 C0.2,0.8 0.2,0.7 0.2,0.6 C0.1,0.5 0,0.4 0.3,0.1 Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <div id="posts" className="container mt-5">
        <PostsFetch />
      </div>
    </div>
  );
};

export default Home;
