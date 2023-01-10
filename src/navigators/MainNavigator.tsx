import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {EditProfile, Messages, Notifications} from '../screens';
import {MainNavigatorRootStack} from './ts';
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
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: '',
            headerBackTitle: 'Notification',
            headerBackTitleStyle: styles.headerBackTitleStyle,
            headerTintColor: 'black',
          }}
          name="Notifications"
          component={Notifications}
        />
        <Stack.Screen name="Messages" component={MessagesNavigator} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={'EditProfile'} component={EditProfile} />
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
