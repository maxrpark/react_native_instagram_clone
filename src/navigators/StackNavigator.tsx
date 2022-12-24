import {createStackNavigator} from '@react-navigation/stack';
import {Profile, Settings} from '../screens';
import BottomTabs, {RootBottomStackParams} from './BottomTabs';
import ProfileTopNavigator from './ProfileTopNavigator';
import {ScreenNames} from './ts';
import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParams = {
  BottomTab: NavigatorScreenParams<RootBottomStackParams>;
  Settings: undefined;
  ProfileTopNavigator: {user: any};
};
const Stack = createStackNavigator<RootStackParams>();

const StackNav: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTabs} />
      <Stack.Screen name={ScreenNames.SETTINGS} component={Settings} />
      {/* @ts-ignore TODO*/}
      <Stack.Screen name={'UserProfile'} component={ProfileTopNavigator} />
    </Stack.Navigator>
  );
};

export default StackNav;
