import React from "react";
import { Link } from "react-router-dom";

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <div className="card h-100 custom-card">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text">
          {body.length > 50 ? `${body.substring(0, 50)}...` : body}
        </p>
        <div className="mt-auto">
          <Link to={`/details/${id}`}>See more...</Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
