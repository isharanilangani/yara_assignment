import React, { useEffect, useRef, useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "./PostCard";
import "../styles/global.css";

// Determine the initial number of posts to display based on window width
const getInitialVisibleCount = () => {
  const width = window.innerWidth;
  if (width < 768) return 1; // Mobile view
  if (width >= 768 && width < 1024) return 2; // Tablet view
  return 3; // Desktop view
};

const PostsFetch: React.FC = () => {
  const { loading, error, data } = usePosts();
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount);
  const [exploreClicked, setExploreClicked] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If the Explore button hasn't been clicked, don't start observing
    if (!exploreClicked) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // When the loader is in view, increase the visible post count if there are more posts
        if (entries[0].isIntersecting && visibleCount < data.length) {
          setVisibleCount((prev) => Math.min(prev + 3, data.length));
        }
      },
      { threshold: 1.0 }
    );

    // Get the current loader element
    const loader = loaderRef.current;
    
    // If the loader exists, start observing
    if (loader) observer.observe(loader);

    // Clean up the observer when the component is unmounted or dependencies change
    return () => {
      if (loader) observer.unobserve(loader);
    };
  }, [exploreClicked, visibleCount, data.length]);

  const visiblePosts = data.slice(0, visibleCount);

  return (
    <div className="bg-light-green py-5 px-4">
      {/* Show loading spinner while posts are being fetched */}
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status"></div>
        </div>
      )}

      {/* Display error message if there was an issue fetching posts */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Show a message if no posts are available */}
      {!loading && !error && data.length === 0 && (
        <div className="alert alert-warning text-center">
          No posts available.
        </div>
      )}

      {/* Show posts if they are successfully fetched */}
      {!loading && !error && data.length > 0 && (
        <>
          <div className="row">
            {visiblePosts.map((post) => (
              <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={post.id}>
                <PostCard id={post.id} title={post.title} body={post.body} />
              </div>
            ))}
          </div>

          {!exploreClicked && data.length > visibleCount && (
            <div className="text-center mt-4">
              <button
                className="btn btn-primary rounded-pill px-4"
                onClick={() => setExploreClicked(true)} // When clicked, set exploreClicked to true
              >
                Explore
              </button>
            </div>
          )}

          {/* Show loading spinner when more posts are being loaded */}
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
