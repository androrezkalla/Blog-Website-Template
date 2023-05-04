import { useReducer } from 'react';
import axios from 'axios';
import { reducer, initialState } from './reducer';

const useGlobalReducer = (postId, title, content) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllBlogPosts = async () => {
    try {
      const url = 'http://localhost:3001/v1/api/posts';
      const response = await axios.get(url);
      dispatch({ type: 'getPosts', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const getSingleBlogPost = async () => {
    try {
      const url = `http://localhost:3001/v1/api/posts/${postId}`;
      console.log(url);
      const response = await axios.get(url);
      dispatch({ type: 'getCurrentPost', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBlogPost = async () => {
    try {
      const url = `http://localhost:3001/v1/api/posts/${postId}`;
      const response = await axios.delete(url);
      dispatch({ type: 'deletePost', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const patchBlogPost = async () => {
    try {
      const url = `http://localhost:3001/v1/api/posts/${postId}`;
      const response = await axios.patch(url, {
        title,
        content,
      });
      dispatch({ type: 'patchPost', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };


  const postBlog = async () => {
    try {
      const url = 'http://localhost:3001/v1/api/posts';
      const response = await axios.post(url, {
        title,
        content,
      });
      dispatch({ type: 'postBlog', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    dispatch,
    getAllBlogPosts,
    getSingleBlogPost,
    deleteBlogPost,
    patchBlogPost,
    postBlog,
  };
};

export default useGlobalReducer;
