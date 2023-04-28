import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">My Blog</h1>
      <div className="blog-post-container">
        {/* display all blog posts here */}
      </div>
      <Link to="/create">
        <button className="create-btn">Create New Post</button>
      </Link>
    </div>
  );
}

export default Home;
