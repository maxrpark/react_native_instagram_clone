import {StyleSheet, View} from 'react-native';

import {FeedsHeader, PostsList} from '../components';
import {useState, useEffect, useCallback} from 'react';
import {postApi} from '../endpoints/postApi';
import {useFocusEffect} from '@react-navigation/native';

const FeedScreen: React.FC = () => {
  const [feedPost, setFeedPost] = useState();

  const getFeed = async () => {
    const res = await postApi('/user/feeds/');
    console.log(res.data.count);
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
        <PostsList />
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
