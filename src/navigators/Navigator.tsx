import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '../screens';
import {StackNavigatorRootStack, ScreenNames} from './ts';
import {StyleSheet} from 'react-native';
import FeedScreen from '../screens/FeedScreen';

// const Stack = createStackNavigator();
const Stack = createStackNavigator<StackNavigatorRootStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.FEED_SCREEN_PAGE}
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Group>
        <Stack.Screen
          name={ScreenNames.FEED_SCREEN_PAGE}
          component={FeedScreen}
        />
        <Stack.Screen
          name={ScreenNames.PROFILES_SCREEN}
          component={ProfileScreen}
        />
      </Stack.Group>
      {/* <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={'EditProfile'} component={EditProfile} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  headerBackTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    color: 'black',
  },
});
