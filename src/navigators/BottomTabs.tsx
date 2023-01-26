import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './Navigator';
import {Posts, ProfileScreen} from '../screens';
import {FeedsHeader} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {profileActions} from '../store/features/profile/profileSlide';
import {ScreenNames, RootBottomStackParams} from './ts';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<RootBottomStackParams>();

const BottomTabs: React.FC = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const setIcons = (routeName: string) => {
    let icon = '';
    switch (routeName) {
      case ScreenNames.HOME_SCREEN:
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
          name={ScreenNames.HOME_SCREEN}
          component={StackNavigator}
        />
        <Tab.Screen name={ScreenNames.POSTS_PAGE} component={Posts} />
        <Tab.Screen
          name={ScreenNames.PROFILE_SCREEN}
          component={ProfileScreen}
          listeners={() => ({
            tabPress: () => dispatch(profileActions.SELECT_USER(user as any)),
          })}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default BottomTabs;
