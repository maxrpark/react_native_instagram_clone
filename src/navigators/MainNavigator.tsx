import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {EditProfile, Notifications} from '../screens';
import {MainNavigatorRootStack, ScreenNames} from './ts';
import {StyleSheet} from 'react-native';
import {MessagesNavigator} from '.';

const Stack = createStackNavigator<MainNavigatorRootStack>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Group>
        <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTabs} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: 'Notification',
            headerBackTitleStyle: styles.headerBackTitleStyle,
            headerTintColor: 'black',
          }}
          name={ScreenNames.NOTIFICATIONS}
          component={Notifications}
        />
        <Stack.Screen
          name={ScreenNames.MESSAGE_NAVIGATOR}
          component={MessagesNavigator}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={ScreenNames.EDIT_PROFILE} component={EditProfile} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  headerBackTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: 'black',
  },
});
