import {StyleSheet, View, FlatList} from 'react-native';
import SinglePost from './SinglePost';
import StoriesFeed from '../stories/StoriesFeed';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

interface Props {
  feedPost: any;
}

const PostsList: React.FC<Props> = ({feedPost}) => {
  const {stories_data} = useSelector((state: RootState) => state.global);

  return (
    <FlatList
      data={feedPost}
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
      keyExtractor={item => item.id.toLocaleString()}
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
