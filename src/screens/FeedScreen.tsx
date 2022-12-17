import {StyleSheet, View} from 'react-native';

import {FeedsHeader, PostsList} from '../components';

const FeedScreen: React.FC = () => {
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
