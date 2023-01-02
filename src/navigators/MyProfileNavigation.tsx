import {createStackNavigator} from '@react-navigation/stack';
import ProfileTopNavigator from './ProfileTopNavigator';
import {Settings} from '../screens';
import {Text, View} from 'react-native';

export type MyProfileRootStack = {
  MyProfile: {user: any};
  Settings: undefined;
};

const Stack = createStackNavigator<MyProfileRootStack>();

const MyProfileNavigator = () => {
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: 'white'},
    }}>
    <Text>Hello</Text>
    {/* <Stack.Screen name={'MyProfile'} component={ProfileTopNavigator} />
    <Stack.Screen name={'Settings'} component={Settings} /> */}
  </Stack.Navigator>;
};

export default MyProfileNavigator;
