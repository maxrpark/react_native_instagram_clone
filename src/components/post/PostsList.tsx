import {StyleSheet, Text, View, FlatList} from 'react-native';
import SinglePost from './SinglePost';
import {PostData} from '../../ts/';
import StoriesFeed from '../stories/StoriesFeed';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const PostsList: React.FC = () => {
  const {stories_data, feed_post} = useSelector(
    (state: RootState) => state.global,
  );
  return (
    <FlatList
      data={feed_post}
      ListHeaderComponent={() => (
        <View
          style={{
            borderBottomColor: '#E0E0E0',
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 8,
          }}>
          <StoriesFeed stories={stories_data} />
        </View>
      )}
      renderItem={post => <SinglePost {...post} />}
      keyExtractor={item => item.user.name}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={<View />}
      showsVerticalScrollIndicator={false}
      ListFooterComponentStyle={{height: 150}}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: 10,
            }}
          />
        );
      }}
    />
  );
};

export default PostsList;

const styles = StyleSheet.create({});
