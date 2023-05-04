import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../utils/useGlobalReducer';

function Create() {
  const [title, setTitle] = useState('Default Title!');
  const [body, setBody] = useState('');
  const { postBlog } = useGlobalReducer(null, title, body);

  const handleInputChange = (e, value) => {
    const inputValue = e.target.value;
    if (value === 'title' ? setTitle(inputValue) : setBody(inputValue));
  };

  const postNewBlog = (newTitle) => {
    alert(`Blog Post: ${newTitle} has been created!`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '800px' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
          Create a Blog Post!
        </h1>
        <div>
          <input
            style={{
              border: '1px solid #ccc',
              padding: '0.5rem',
              fontSize: '1.25rem',
              width: '100%',
              marginBottom: '1rem',
            }}
            onChange={(e) => handleInputChange(e, 'title')}
            placeholder="Type your title here!"
          />
          <textarea
            style={{
              border: '1px solid #ccc',
              padding: '0.5rem',
              fontSize: '1.25rem',
              width: '100%',
              marginBottom: '1rem',
            }}
            value={body}
            onChange={(e) => handleInputChange(e, 'body')}
            placeholder="Type your blog post here!"
            rows="10"
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              backgroundColor: '#e60000',
              color: '#fff',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1.25rem',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
            onClick={() => {
              postNewBlog(title);
              postBlog();
            }}
          >
            Submit!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
