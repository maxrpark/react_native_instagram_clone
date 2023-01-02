import {createStackNavigator} from '@react-navigation/stack';
import ProfileTopNavigator from './ProfileTopNavigator';
import {Settings, EditProfile} from '../screens';

export type MyProfileRootStack = {
  Profile: undefined;
  EditProfile: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<MyProfileRootStack>();

const MyProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name={'Profile'} component={ProfileTopNavigator} />
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
    </Stack.Navigator>
  );
};

export default MyProfileNavigator;
