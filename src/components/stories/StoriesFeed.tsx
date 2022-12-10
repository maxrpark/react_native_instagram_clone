import {FlatList, StyleSheet, Text, View} from 'react-native';

interface Story {
  id: number;
  src: string;
  user: string;
}

interface ItemProps {
  item: Story;
}

const SingleStoryIcon: React.FC<ItemProps> = ({item}) => {
  return (
    <View style={styles.stroyWrapper}>
      <View style={styles.storyCircle}></View>
      <Text>{item.user}</Text>
    </View>
  );
};

interface Props {
  stories: Story[];
}

const StoriesFeed: React.FC<Props> = ({stories}) => {
  return (
    <View>
      <FlatList
        data={stories}
        renderItem={item => SingleStoryIcon(item)}
        keyExtractor={item => item.user}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                width: 10,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default StoriesFeed;

const styles = StyleSheet.create({
  stroyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  storyCircle: {
    width: 70,
    height: 70,
    backgroundColor: 'red',
    borderRadius: 50,
  },
});
