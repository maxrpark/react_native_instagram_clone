import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SearchInput} from '../components';
import {useState} from 'react';

const Posts: React.FC = () => {
  const [numbers, setNumbers] = useState([0, 1, 3, 4, 5]);

  const PostImage: React.FC = (item: any) => {
    return (
      <View style={styles.postWrapper}>
        <Image
          source={{uri: `https://picsum.photos/id/${item}/500/400`}}
          style={{
            ...styles.img,
            // ...isReel
          }}
        />
      </View>
    );
  };

  const loadMore = () => {
    let newNumbers: number[] = [];
    for (let i = 0; i < 5; i++) {
      newNumbers[i] = numbers.length + i + 1;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
    }, 1500);
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toLocaleString()}
        renderItem={({item}) => PostImage(item)}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{paddingHorizontal: 8, marginBottom: 4}}>
            <SearchInput />
          </View>
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={20} color="red" />
          </View>
        }
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  postWrapper: {
    flex: 1 / 3,
  },
  img: {
    width: '100%',
    height: 150,
  },
});
