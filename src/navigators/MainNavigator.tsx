import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import {AuthScreen, EditProfile, Notifications} from '../screens';
import {MainNavigatorRootStack, ScreenNames} from './ts';
import {StyleSheet, View, Text} from 'react-native';
import {MessagesNavigator} from '.';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {showMe} from '../store/features/auth/extraReducers';
import {useEffect} from 'react';

const Stack = createStackNavigator<MainNavigatorRootStack>();

const MainNavigator = () => {
  const {isAuthenticated, checking} = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(showMe());
  }, []);

  if (checking)
    return (
      <>
        <View>
          <Text>Loading</Text>
        </View>
      </>
    );
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
