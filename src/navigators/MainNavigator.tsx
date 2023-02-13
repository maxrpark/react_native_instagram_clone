import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {AuthScreen, EditProfile, Notifications} from '../screens';
import {MainNavigatorRootStack, ScreenNames} from './ts';
import {StyleSheet} from 'react-native';
import {MessagesNavigator} from '.';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const Stack = createStackNavigator<MainNavigatorRootStack>();

const MainNavigator = () => {
  const {isAuthenticated} = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {!isAuthenticated ? (
        <Stack.Screen name={ScreenNames.AUTH_SCREEN} component={AuthScreen} />
      ) : (
        <>
          <Stack.Group>
            <Stack.Screen
              name={ScreenNames.BOTTOM_TAB}
              component={BottomTabs}
            />
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
            <Stack.Screen
              name={ScreenNames.EDIT_PROFILE}
              component={EditProfile}
            />
          </Stack.Group>
        </>
      )}
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
