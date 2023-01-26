import {createStackNavigator} from '@react-navigation/stack';
import {Messages, SingleMessage} from '../screens';
import {MessageNavigatorRootStack} from './ts';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {ScreenNames} from './ts';
const Stack = createStackNavigator<MessageNavigatorRootStack>();

const MessageNavigator = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
          paddingHorizontal: 10,
        },
      }}>
      <Stack.Screen
        name={ScreenNames.MESSAGES}
        options={{title: '', headerBackTitle: user.name, headerShown: true}}
        component={Messages}
      />
      <Stack.Screen
        name={ScreenNames.SINGLE_MESSAGE}
        component={SingleMessage}
      />
    </Stack.Navigator>
  );
};

export default MessageNavigator;
