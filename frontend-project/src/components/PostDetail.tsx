import React from "react";
import "../styles/global.css";

interface PostDetailProps {
  title: string;
  body: string;
}

const PostDetail: React.FC<PostDetailProps> = ({ title, body }) => {
  return (
    <div className="bg-light-green py-5 px-5">
      <h2 className="fw-bold text-dark">{title}</h2>
      <p className="text-secondary mt-3">{body}</p>
    </div>
  );
};

export default PostDetail;
