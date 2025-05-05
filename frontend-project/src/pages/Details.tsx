import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
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
    <div className="container mt-5">
      {postDetails ? (
        <div className="row align-items-center">
          {/* Styled Background Image as Div */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="post-image w-100"></div>
          </div>

          <div className="col-md-6 post-details">
            <h2 className="fw-bold text-dark">{postDetails.title}</h2>
            <p className="text-secondary mt-3">{postDetails.body}</p>
          </div>
        </div>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default Details;
