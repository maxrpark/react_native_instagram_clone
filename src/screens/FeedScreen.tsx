import {FlatList, StyleSheet, Text, View} from 'react-native';
import {StoriesFeed} from '../components';

const stories_data = [
  {id: 1, src: '/', user: 'user_1'},
  {id: 2, src: '/', user: 'user_2'},
  {id: 3, src: '/', user: 'user_3'},
  {id: 4, src: '/', user: 'user_4'},
  {id: 5, src: '/', user: 'user_5'},
  {id: 6, src: '/', user: 'user_6'},
  {id: 7, src: '/', user: 'user_7'},
];

const FeedScreen: React.FC = () => {
  return (
    <View>
      <Text>Navigation</Text>
      <StoriesFeed stories={stories_data} />

      <View>
        <Text>Single post</Text>
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({});
