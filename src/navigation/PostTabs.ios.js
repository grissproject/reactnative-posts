import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '../components/common';
import PostsScreen from '../screens/PostsScreen';
import Header from '../screens/Header';
import HeaderActions from '../screens/HeaderActions';
import { useTheme } from '../hooks';

const Tab = createBottomTabNavigator();

const PostTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'All') {
            iconName = focused ? 'view-list' : 'list';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'favorite' : 'favorite-border';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: { backgroundColor: colors.darkGray },
      })}
    >
      <Tab.Screen
        name="All"
        component={PostsScreen}
        options={{
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.darkBg },
          headerTitle: (props) => <Header {...props} />,
          headerRight: HeaderActions,
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={PostsScreen}
        initialParams={{ filterFavorites: true }}
        options={{
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.darkBg },
          headerTitle: (props) => <Header {...props} favorites />,
          headerRight: HeaderActions,
        }}
      />
    </Tab.Navigator>
  );
};

export default PostTabs;
