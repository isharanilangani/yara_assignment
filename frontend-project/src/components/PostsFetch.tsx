import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard";

const PostsFetch: React.FC = () => {
  const { loading, error, data } = usePosts();
  const [visibleCount, setVisibleCount] = useState(3);
  const [exploreClicked, setExploreClicked] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!exploreClicked) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < data.length) {
          setVisibleCount((prev) => Math.min(prev + 3, data.length));
        }
      },
      { threshold: 1.0 }
    );

    const loader = loaderRef.current;
    if (loader) observer.observe(loader);

    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [exploreClicked, visibleCount, data.length]);

  const visiblePosts = data.slice(0, visibleCount);

  return (
    <div className="bg-light-green py-5 px-5">
      {loading && (
        <div className="spinner-border text-primary" role="status"></div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      {!loading && !error && data.length === 0 && (
        <div className="alert alert-warning text-center">
          No posts available.
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <>
          <div className="row justify-content-center">
            {visiblePosts.map((post) => (
              <div className="col-md-4 mb-4" key={post.id}>
                <PostCard id={post.id} title={post.title} body={post.body} />
              </div>
            ))}
          </div>

          {!exploreClicked && data.length > 3 && (
            <div className="text-center mt-4">
              <button
                className="btn btn-primary rounded-pill px-4"
                onClick={() => setExploreClicked(true)}
              >
                Explore
              </button>
            </div>
          )}

          {exploreClicked && visibleCount < data.length && (
            <div ref={loaderRef} className="text-center mt-4">
              <div className="spinner-border text-secondary" role="status"></div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PostsFetch;
