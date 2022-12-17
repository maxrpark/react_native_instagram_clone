import 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {FeedScreen} from './src/screens';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import {StackNav} from './src/navigators';
const App = () => {
  return (
    <Navigator>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <StackNav />
        </SafeAreaView>
      </Provider>
    </Navigator>
  );
};

export default App;

import * as React from 'react';

interface Props {
  children: any;
}
const Navigator: React.FC<Props> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
