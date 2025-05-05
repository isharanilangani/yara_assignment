import React from "react";
import { usePosts } from "../hooks/usePosts";

const PostsFetch: React.FC = () => {
  const { loading, error, data } = usePosts();

  return (
    <div>
      <h2 className="mb-3">Posts</h2>
      {loading && (
        <div className="spinner-border text-primary" role="status"></div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading &&
        !error &&
        data.length === 0 &&
        (() => {
          console.warn("No posts returned from API.");
          return <div className="alert alert-warning">No posts available.</div>;
        })()}

      {!loading && !error && data.length > 0 && (
        <>
          <ul className="list-group">
            {data.map((post) => (
              <li className="list-group-item" key={post.id}>
                <h5 className="fw-semibold">{post.title}</h5>
                <p className="mb-0">{post.body}</p>
              </li>
            ))}
          </ul>

          <a
            className="btn btn-primary btn-lg rounded-pill px-4 mb-4"
            href="#services"
          >
            Explore
          </a>
        </>
      )}
    </div>
  );
};

export default PostsFetch;
