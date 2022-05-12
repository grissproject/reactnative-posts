import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostScreen from '../screens/PostScreen';
import PostTabs from './PostTabs';
import Header from '../screens/Header';
import HeaderActions from '../screens/HeaderActions';
import { useTheme } from '../hooks';

const Stack = createNativeStackNavigator();

const PostsStack = () => {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={PostTabs}
        options={{
          headerShown: Platform.OS === 'android',
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.darkBg },
          headerTitle: (props) => <Header {...props} />,
          headerRight: HeaderActions,
        }}
      />
      <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.primary },
        }}
      />
    </Stack.Navigator>
  );
};

export default PostsStack;
