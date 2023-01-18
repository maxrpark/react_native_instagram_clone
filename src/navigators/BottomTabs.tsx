import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Posts, FeedScreen, ProfileScreen} from '../screens';
import {ScreenNames, RootBottomStackParams} from './ts';
import {FeedsHeader} from '../components';

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

      case ScreenNames.PROFILE_SCREEN:
        icon = 'person-circle-outline';
        break;
    }

    return <Icon name={icon} size={20} />;
  };

  // setIcons
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({size, color, focused}) => setIcons(route.name),
        tabBarLabel: () => null,
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          borderTopColor: 'white',
        },
      })}>
      <Tab.Group>
        <Tab.Screen
          options={{headerShown: true, header: FeedsHeader}}
          name={ScreenNames.FEED_SCREEN_PAGE}
          component={FeedScreen}
        />
        <Tab.Screen name={ScreenNames.POSTS_PAGE} component={Posts} />
        <Tab.Screen
          name={ScreenNames.PROFILE_SCREEN}
          component={ProfileScreen}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;
