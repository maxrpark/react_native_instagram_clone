import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Posts, MyProfile, FeedScreen} from '../screens';
import {TabNames} from './ts';

export type RootBottomStackParams = {
  FeedScreen: undefined;
  Posts: undefined;
  MyProfile: undefined;
};

const Tab = createBottomTabNavigator<RootBottomStackParams>();

const BottomTabs: React.FC = () => {
  const setIcons = (routeName: string) => {
    let icon = '';
    switch (routeName) {
      case TabNames.FEED_SCREEN_PAGE:
        icon = 'home';
        break;

      case TabNames.POSTS_PAGE:
        icon = 'search-outline';
        break;

      case TabNames.MY_PROFILE_PAGE:
        icon = 'person-circle-outline';
        break;
    }

    return <Icon name={icon} size={20} />;
  };

  // setIcons
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({size, color, focused}) => setIcons(route.name),
        tabBarLabel: () => null,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          borderTopColor: 'white',
        },
      })}>
      <Tab.Screen name={TabNames.FEED_SCREEN_PAGE} component={FeedScreen} />
      <Tab.Screen name={TabNames.POSTS_PAGE} component={Posts} />
      <Tab.Screen name={TabNames.MY_PROFILE_PAGE} component={MyProfile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
