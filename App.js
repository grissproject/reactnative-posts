import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import PostsStack from './src/navigation/PostsStack';
import { ProvidePosts } from './src/hooks/usePosts';
import PostModel from './src/storage/PostModel';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PostModel.RealmProvider>
        <ProvidePosts>
          <NavigationContainer>
            <PostsStack />
          </NavigationContainer>
        </ProvidePosts>
      </PostModel.RealmProvider>
    </GestureHandlerRootView>
  );
}
