import React from 'react';

function BlogPost({ post }) {
  const { last_updated, originally_published } = post;
  const lastUpdated = new Date(last_updated);
  const originallyPublished = new Date(originally_published);

  return (
    <div key={post.id}>
      <div style={{ backgroundColor: 'black', width: '66%', margin: '0 auto', borderRadius: '0.5rem', border: '1px solid white' }}>
        <p style={{ color: 'red', textAlign: 'center', fontSize: '2rem', padding: '1.25rem', fontFamily: 'monospace' }}>
          {post.title}
        </p>
        <p style={{ color: 'red', textAlign: 'center', padding: '1rem', fontFamily: 'monospace' }}>
          {post.content}
        </p>
        <div style={{ color: 'red', textAlign: 'center', fontSize: '0.875rem', padding: '1.25rem', fontFamily: 'monospace' }}>
          {originallyPublished.toLocaleString()} {' - '}
          {lastUpdated.toLocaleString()}
        </div>
      </div>
      <div style={{ marginTop: '7rem' }}></div>
    </div>
  );
}

export default BlogPost;
