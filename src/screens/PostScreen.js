import React, { useLayoutEffect } from 'react';
import { ActionsMenu, Icon, View } from '../components/common';
import Post from '../components/posts/Post';
import { usePost, useTheme } from '../hooks';

const PostScreen = ({ route, navigation }) => {
  const { post, toggleFavorite, remove } = usePost(route.params.postId);
  const { colors } = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: colors.white,
      headerStyle: { backgroundColor: colors.primary },
      headerRight: () => (
        <View row>
          <Icon.Button
            name={post.favorite ? 'star' : 'star-outline'}
            onPress={toggleFavorite}
          />
          <ActionsMenu>
            <ActionsMenu.MenuItem
              title="Delete"
              onPress={() => {
                navigation.goBack();
                setTimeout(() => remove(), 100);
              }}
            />
          </ActionsMenu>
        </View>
      ),
    });
  }, [navigation, post]);

  return <Post post={post} />;
};

export default PostScreen;
