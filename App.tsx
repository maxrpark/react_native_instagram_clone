import {SafeAreaView} from 'react-native';
import {FeedScreen} from './src/screens';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <FeedScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
