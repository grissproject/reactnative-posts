import React from 'react';
import { View } from '../components/common';
import PostsList from '../components/posts/PostsList';
import { usePosts } from '../hooks';
// import { A}

const PostsScreen = ({ navigation, route }) => {
  const filterFavorites = route.params?.filterFavorites;
  const { posts } = usePosts();

  const filterPosts = () => {
    if (filterFavorites) {
      return posts.filter((post) => post.favorite);
    }
    return posts;
  };

  return (
    <View flex>
      <PostsList posts={filterPosts()} />
    </View>
  );
};

export default PostsScreen;
