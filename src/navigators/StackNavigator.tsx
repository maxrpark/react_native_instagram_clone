import {createStackNavigator} from '@react-navigation/stack';
import {Settings, FeedScreen} from '../screens';
import BottomTabs, {RootBottomStackParams} from './BottomTabs';
import ProfileTopNavigator from './ProfileTopNavigator';
import MyProfileNavigation from './MyProfileNavigation';
import UsersProfileNavigator from './UsersProfileNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  RootNavigation: undefined;
  Settings: undefined;
  ProfileTopNavigator: {user: any};
  UsersProfile: {user: any};
  BottomTab: NavigatorScreenParams<RootBottomStackParams>;
};
const Stack = createStackNavigator<RootStackParams>();

const StackNav: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name={'RootNavigation'} component={FeedScreen} />
      {/* @ts-ignore TODO*/}
      <Stack.Screen name={'MyProfile'} component={ProfileTopNavigator} />
      <Stack.Screen name={'UsersProfile'} component={UsersProfileNavigator} />
    </Stack.Navigator>
  );
};

export default StackNav;
