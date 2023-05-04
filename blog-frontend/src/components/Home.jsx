import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Center, Spinner } from '@chakra-ui/react';
import BlogPost from '../components/BlogPost';
import useGlobalReducer from '../utils/useGlobalReducer';

function Home() {
  const { state, getAllBlogPosts } = useGlobalReducer();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation(); // This is used to force a re-render when the user clicks the back button

  useEffect(() => {
    const fetchData = async () => {
      await getAllBlogPosts();
      setIsLoading(false);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  if (isLoading) {
    return (
      <Center className="bg-black" height="100vh">
        <Spinner size="xl" color="white" />
      </Center>
    );
  }


  return (
    <div className="home-container">
      <h1 className="home-title">My Blog</h1>
      <div className="blog-post-container">
      {state.allPosts.map((post) => {
        return (
          <Link to={`/blog/${post.id}`}>
            <BlogPost post={post} />;
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

