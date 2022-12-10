import {StyleSheet, Text, View, FlatList} from 'react-native';
import SinglePost from './SinglePost';

const postsList = [
  {
    user: 'max',
    des: 'lorem something',
    url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
  },
];

const PostsList: React.FC = () => {
  return (
    <FlatList
      data={postsList}
      renderItem={item => SinglePost(item)}
      keyExtractor={item => item.user}
      showsHorizontalScrollIndicator={false}
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
