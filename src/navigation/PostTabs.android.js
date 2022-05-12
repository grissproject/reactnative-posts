import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from '../hooks';
import PostsScreen from '../screens/PostsScreen';
import Header from '../screens/Header';

const Tab = createMaterialTopTabNavigator();

const PostTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarStyle: { backgroundColor: colors.darkGray },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
      }}
    >
      <Tab.Screen
        name="All"
        component={PostsScreen}
        options={{ headerTitle: (props) => <Header {...props} /> }}
      />

      <Tab.Screen
        name="Favorites"
        component={PostsScreen}
        initialParams={{ filterFavorites: true }}
        options={{ headerTitle: (props) => <Header {...props} favorites /> }}
      />
    </Tab.Navigator>
  );
};

export default PostTabs;
