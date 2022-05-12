import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SwipeableListItem, Icon } from '../common';
import { usePosts, useTheme } from '../../hooks';

// Fixed height to improve List's performance.
export const LIST_ITEM_HEIGHT = 68;

const PostListItem = ({ post }) => {
  const navigation = useNavigation();
  const { removePost, toggleFavoritePost } = usePosts();
  const { colors, sizes } = useTheme();

  return (
    <SwipeableListItem
      id={post.id}
      title={post.title}
      icon={
        post.favorite && (
          <Icon name="favorite" color={colors.primary} size={sizes.xl} />
        )
      }
      onSwipeFromLeft={() => toggleFavoritePost(post)}
      leftActionTitle={post.favorite ? 'Unlike' : 'Like'}
      rightAction={() => removePost(post)}
      onPress={() => navigation.navigate('Post', { postId: post.id })}
      height={LIST_ITEM_HEIGHT}
    />
  );
};

export default PostListItem;
