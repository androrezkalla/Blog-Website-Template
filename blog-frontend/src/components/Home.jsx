import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import useGlobalReducer from '../utils/useGlobalReducer';

function Home() {
  const { state, getAllBlogPosts } = useGlobalReducer();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); 

  useEffect(() => {
    const fetchData = async () => {
      await getAllBlogPosts();
      setIsLoading(false);
    };
    fetchData();
  }, [location.key]);

  if (isLoading) {
    return (
      <div className="bg-black" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner" style={{ width: '50px', height: '50px', border: '4px solid white', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1 className="home-title">My Blog</h1>
      <div className="blog-post-container">
      {state.allPosts.map((post) => {
        return (
          <Link to={`/blog/${post.id}`} key={post.id}>
            <BlogPost post={post} />
          </Link>
        );
      })}
      </div>
      <Link to="/create">
        <button className="create-btn">Create New Post</button>
      </Link>
    </div>
  );
}

export default Home;
