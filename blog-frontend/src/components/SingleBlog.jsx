import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function SingleBlog() {
  const { id } = useParams();
  const [state, dispatch] = useGlobalReducer(id);

  useEffect(() => {
    dispatch({ type: 'GET_SINGLE_BLOG_POST' });
  }, [dispatch]);

  const { currentPost } = state;

  const handleDelete = () => {
    dispatch({ type: 'DELETE_BLOG_POST' });
  };

  return (
    <div style={{ backgroundColor: '#f2f2f2', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '5px', marginBottom: '2rem' }} key={currentPost.id}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{currentPost.title}</h2>
        <p style={{ fontSize: '1.2rem' }}>{currentPost.content}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={`/blog/${id}/edit`} style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#ff6666', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', border: 'none', marginRight: '1rem' }}>Edit</button>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ backgroundColor: '#666', color: '#fff', padding: '0.5rem 1rem', borderRadius: '5px', border: 'none' }} onClick={handleDelete}>Delete</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleBlog;
