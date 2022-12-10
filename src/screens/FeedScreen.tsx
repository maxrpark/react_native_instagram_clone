import {StyleSheet, Text, View} from 'react-native';
import {StoriesFeed} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../store/store';
import {useEffect} from 'react';
import {GET_SOMETHING} from '../store/actions';
import PostsList from '../components/post/PostsList';

const FeedScreen: React.FC = () => {
  const {name, stories_data} = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_SOMETHING());
  }, []);

  return (
    <View>
      <Text>{name}</Text>
      <StoriesFeed stories={stories_data} />

      <View>
        <PostsList />
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
