import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Posts, MyProfile, FeedScreen, Profile} from '../screens';
import {ScreenNames} from './ts';
import ProfileTopNavigator from './ProfileTopNavigator';

export type RootBottomStackParams = {
  FeedScreen: undefined;
  Posts: undefined;
  MyProfile: {user: any};
};

const Tab = createBottomTabNavigator<RootBottomStackParams>();

const BottomTabs: React.FC = () => {
  const setIcons = (routeName: string) => {
    let icon = '';
    switch (routeName) {
      case ScreenNames.FEED_SCREEN_PAGE:
        icon = 'home';
        break;

      case ScreenNames.POSTS_PAGE:
        icon = 'search-outline';
        break;

      case ScreenNames.MY_PROFILE_PAGE:
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
        tabBarIcon: ({size, color, focused}) => setIcons(route.name),
        tabBarLabel: () => null,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          borderTopColor: 'white',
        },
      })}>
      <Tab.Screen name={ScreenNames.FEED_SCREEN_PAGE} component={FeedScreen} />
      <Tab.Screen name={ScreenNames.POSTS_PAGE} component={Posts} />
      <Tab.Screen
        name={ScreenNames.MY_PROFILE_PAGE}
        /* @ts-ignore TODO*/
        component={ProfileTopNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
