import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import PostDetail from "../components/PostDetail"; // Import PostDetail component
import { Link } from "react-router-dom"; // Import Link for navigation
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
          {/* Background Image */}
          <div className="post-image position-relative">
            <div className="header-navigation position-absolute top-0 start-0 m-3">
              <Link to="/" className="home-link me-1">
                <i
                  className="bi bi-house-door"
                  style={{ fontSize: "20px" }}
                ></i>{" "}
                Home
              </Link>
              <span className="text-white">&nbsp;&gt; Details</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="container">
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
