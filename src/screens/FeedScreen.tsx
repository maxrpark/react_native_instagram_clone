import {StyleSheet, View} from 'react-native';

import {PostsList} from '../components';
import {useState, useCallback} from 'react';
import {postApi} from '../endpoints/postApi';
import {useFocusEffect} from '@react-navigation/native';

const FeedScreen: React.FC = () => {
  const [feedPost, setFeedPost] = useState([]);

  const getFeed = async () => {
    const res = await postApi('/user/feeds/');
    setFeedPost(res.data.posts);
  };

  useFocusEffect(
    useCallback(() => {
      getFeed();
      return () => getFeed; // TODO
    }, []),
  );

  return (
    <View>
      {/* <FeedsHeader /> */}
      <View>
        <PostsList feedPost={feedPost} />
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
