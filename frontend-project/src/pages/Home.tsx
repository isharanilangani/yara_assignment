import React from 'react';
import { usePosts } from '../hooks/usePosts';

const Home: React.FC = () => {
  const { loading, error, data } = usePosts();

  return (
    <div className="container mt-4">
      <h2>Posts</h2>
      {loading && <div className="spinner-border text-primary" role="status"></div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {data.map(post => (
          <li className="list-group-item" key={post.id}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
