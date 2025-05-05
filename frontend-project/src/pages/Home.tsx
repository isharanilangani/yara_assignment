import React from "react";
import { usePosts } from "../hooks/usePosts";

const Home: React.FC = () => {
  const { loading, error, data } = usePosts();

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold">We Create Products</h1>
        <p className="lead text-muted">
          Our team delivers innovative solutions that drive business growth.
        </p>
        <a
          className="btn btn-primary btn-lg rounded-pill px-4"
          href="#services"
        >
          Explore Services
        </a>
      </div>

      <div>
        <h2 className="mb-3">Posts</h2>

        <a
          className="btn btn-primary btn-lg rounded-pill px-4 mb-4"
          href="#services"
        >
          Explore Services
        </a>

        {loading && (
          <div className="spinner-border text-primary" role="status"></div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!loading &&
          !error &&
          data.length === 0 &&
          (() => {
            console.warn("No posts returned from API.");
            return (
              <div className="alert alert-warning">No posts available.</div>
            );
          })()}

        <ul className="list-group">
          {data.map((post) => (
            <li className="list-group-item" key={post.id}>
              <h5 className="fw-semibold">{post.title}</h5>
              <p className="mb-0">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
