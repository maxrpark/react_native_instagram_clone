import {StyleSheet, View} from 'react-native';
// import {StoriesFeed} from '../components';
// import {useSelector, useDispatch} from 'react-redux';
// import {RootState} from '../store/store';
import {FeedsHeader, PostsList} from '../components';

const FeedScreen: React.FC = () => {
  // const {name, stories_data} = useSelector((state: RootState) => state.global);
  // const dispatch = useDispatch();

  return (
    <View>
      <FeedsHeader />
      <View>
        <PostsList />
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
