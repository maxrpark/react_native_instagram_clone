import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Posts, MyProfile, FeedScreen} from '../screens';

export type RootBottomStackParams = {
  FeedScreen: undefined;
  Posts: undefined;
  MyProfile: undefined;
};

const Tab = createBottomTabNavigator<RootBottomStackParams>();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
