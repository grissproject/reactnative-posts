import React from 'react';
import {
  FlatList,
  RefreshControl,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { usePosts, useTheme } from '../../hooks';
import PostListItem, { LIST_ITEM_HEIGHT } from './PostListItem';
import EmptyPostList from './EmptyPostList';

const PostsList = ({ posts }) => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  const { isLoading, reload, loadMorePosts } = usePosts();
  const { colors } = useTheme();

  // Optimize FlatList with fixed height.
  const getItemLayout = (data, index) => ({
    length: LIST_ITEM_HEIGHT,
    offset: LIST_ITEM_HEIGHT * index,
    index,
  });

  const renderItem = ({ item }) => <PostListItem post={item} />;

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={posts}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={reload} />
      }
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.white }}
      ListEmptyComponent={!isLoading && <EmptyPostList />}
      getItemLayout={getItemLayout}
      onEndReached={loadMorePosts}
      onEndReachedThreshold={0.3}
    />
  );
};

export default PostsList;
