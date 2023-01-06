import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {EditProfile, Messages, Notifications} from '../screens';
import {MainNavigatorRootStack} from './ts';

const Stack = createStackNavigator<MainNavigatorRootStack>();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={'EditProfile'} component={EditProfile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;
