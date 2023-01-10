import {createStackNavigator} from '@react-navigation/stack';
import {Messages, SingleMessage} from '../screens';

const Stack = createStackNavigator();

const MessageNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent',
          paddingHorizontal: 10,
        },
      }}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="SingleMessage" component={SingleMessage} />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
