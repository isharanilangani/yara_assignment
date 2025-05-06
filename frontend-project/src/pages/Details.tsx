import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import PostDetail from "../components/PostDetail";
import "../styles/global.css";

const Details: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data, error, loading } = usePosts();
  const [postDetails, setPostDetails] = useState<any>(null);

  useEffect(() => {
    if (postId && data.length > 0) {
      const selectedPost = data.find((post) => post.id === Number(postId));
      setPostDetails(selectedPost);
    }
  }, [postId, data]);

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (error) return <div className="container mt-4">Error: {error}</div>;

  return (
    <>
      {postDetails ? (
        <>
          {/* Image Section */}
          <div className="post-image position-relative">
            <div className="header-navigation position-absolute top-0 start-0 m-3 fw-bold">
              <Link to="/" className="home-link me-1">
                <i className="bi bi-house-door fw-bold icon-home"></i>{" "}
              </Link>
              <span className="text-white">&nbsp;&gt; Details</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="container container-margin">
            <PostDetail title={postDetails.title} body={postDetails.body} />
          </div>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </>
  );
};

export default Details;
