import React, { useState, useEffect, createContext, useContext } from 'react';
import PostModelContext, { PostModel } from '../storage/PostModel';
import { getPosts } from '../api';

const postsContext = createContext();

const usePosts = () => {
  return useContext(postsContext);
};

export default usePosts;

export const ProvidePosts = ({ children }) => {
  const { useRealm, useQuery } = PostModelContext;
  const realm = useRealm();

  const [bufferIndex, setBufferIndex] = useState(1);
  const BUFFER_SIZE = 20;
  const posts = useQuery(PostModel)
    .sorted([
      ['favorite', true],
      ['id', false],
    ])
    .slice(0, bufferIndex * BUFFER_SIZE);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setIsLoading(true);
    const { posts: newPosts } = await getPosts();

    realm.write(() => {
      newPosts.map((post) => realm.create('Post', post, 'modified'));
    });

    setIsLoading(false);
  };

  const loadMorePosts = () => {
    setBufferIndex(bufferIndex + 1);
  };

  const toggleFavoritePost = (post) => {
    realm.write(() => {
      post.favorite = !post.favorite;
    });
  };

  const removePost = (post) => {
    realm.write(() => {
      realm.delete(post);
    });
  };

  const removeAll = () => {
    realm.write(() => {
      realm.deleteAll();
    });
    setBufferIndex(1);
  };

  const value = {
    posts,
    reload: loadPosts,
    loadMorePosts,
    isLoading,
    toggleFavoritePost,
    removePost,
    removeAll,
  };

  return (
    <postsContext.Provider value={value}>{children}</postsContext.Provider>
  );
};
