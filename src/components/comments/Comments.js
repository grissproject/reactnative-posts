import React from 'react';
import { Platform } from 'react-native';
import { Text, View, Loader } from '../common';
import { useComments } from '../../hooks';

const Comments = ({ postId }) => {
  const { comments, isLoading } = useComments(postId);

  return (
    <View card={Platform.OS === 'android'} padding bgWhite>
      <Text h3>Comments</Text>

      {isLoading && <Loader />}

      {comments &&
        comments.map((comment) => (
          <View key={comment.id} padding separator>
            <Text sm>{comment.body}</Text>
          </View>
        ))}
    </View>
  );
};

export default Comments;
