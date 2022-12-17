import {createStackNavigator} from '@react-navigation/stack';
import {Settings} from '../screens';
import BottomTabs, {RootBottomStackParams} from './BottomTabs';

export type RootStackParams = {
  BottomTab: RootBottomStackParams;
  Settings: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

const StackNav: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="BottomTab" component={BottomTabs} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default StackNav;
