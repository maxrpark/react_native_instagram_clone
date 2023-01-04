import {createStackNavigator} from '@react-navigation/stack';
import ProfileTopNavigator from './ProfileTopNavigator';
import {Settings, EditProfile} from '../screens';

export type MyProfileRootStack = {
  Profile: {user: any};
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
      {/* <Stack.Group> */}
      <Stack.Screen name={'Profile'} component={ProfileTopNavigator} />
      <Stack.Screen name={'Settings'} component={Settings} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      {/* </Stack.Group> */}
      {/* <Stack.Group screenOptions={{presentation: 'modal'}}></Stack.Group> */}
    </Stack.Navigator>
  );
};

export default MyProfileNavigator;
