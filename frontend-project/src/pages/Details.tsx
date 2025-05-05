import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

const Details: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data, error, loading } = usePosts();
  
  const [postDetails, setPostDetails] = useState<any>(null);

  useEffect(() => {
    if (postId && data.length > 0) {
      const selectedPost = data.find(post => post.id === Number(postId));
      setPostDetails(selectedPost);
    }
  }, [postId, data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      {postDetails ? (
        <>
          <h2>{postDetails.title}</h2>
          <p>{postDetails.body}</p>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default Details;
