import React from 'react';
import { StyleSheet, ScrollView, Platform } from 'react-native';
import { useTheme } from '../../hooks';
import { Text, View } from '../common';
import UserPreview from '../users/UserPreview';
import Comments from '../comments/Comments';

const Post = ({ post }) => {
  const { colors, sizes } = useTheme();
  const styles = makeStyles({ colors, sizes });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {post && (
        <>
          <View card={Platform.OS === 'android'} padding bgWhite>
            <Text h2>{post.title}</Text>
            <Text style={styles.body}>{post.body}</Text>

            <UserPreview userId={post.userId} />
          </View>

          {Platform.OS === 'ios' && <View style={styles.separator} />}

          <Comments postId={post.id} />
        </>
      )}
    </ScrollView>
  );
};

export default Post;

const makeStyles = ({ colors, sizes }) =>
  StyleSheet.create({
    body: {
      marginBottom: sizes.lg,
    },
    separator: {
      marginHorizontal: -sizes.md,
      height: sizes.sm,
      flex: 1,
      backgroundColor: colors.ligthGray,
    },
  });
