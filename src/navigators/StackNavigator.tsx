import {createStackNavigator} from '@react-navigation/stack';
import {Profile, Settings} from '../screens';
import BottomTabs, {RootBottomStackParams} from './BottomTabs';
import {ScreenNames} from './ts';

export type RootStackParams = {
  BottomTab: RootBottomStackParams;
  Settings: undefined;
  UserProfile: {user: any};
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
      <Stack.Screen name={'UserProfile'} component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNav;
