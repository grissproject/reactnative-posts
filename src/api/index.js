import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Basic fetch. Should implement support to handle errors.
const fetchData = async (path) => {
  const { data } = await axios.get(`${API_URL}/${path}`);
  return data;
};

export const getPosts = async () => ({ posts: await fetchData('posts') });

export const getPost = async (id) => ({ post: await fetchData(`posts/${id}`) });

export const getUser = async (id) => ({ user: await fetchData(`users/${id}`) });

export const getComments = async (postId) => ({
  comments: await fetchData(`posts/${postId}/comments`),
});
