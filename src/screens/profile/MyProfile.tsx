import React from 'react';
import {View, StyleSheet, Dimensions, Image, FlatList} from 'react-native';

const Items = ['1', '12', '13', '14', '15', '16', '17', '18', '19', ,];
const ProfilePost: React.FC = () => {
  const {width} = Dimensions.get('window');

  const PostItem = ({item}: any) => {
    return (
      <View
        key={item}
        style={{
          ...styles.box,
          width: width / 3,
        }}>
        <Image
          style={{width: width / 3, height: 150}}
          source={{
            uri: `https://picsum.photos/id/${item.item}/200/300`,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.postWrapper}>
      <FlatList
        numColumns={3}
        data={Items}
        renderItem={item => <PostItem item={item} />}
      />
      {/* {Items.map(item => {
        return <PostItem key={item} item={item} />;
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  postWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 70,
    overflow: 'scroll',
  },
  box: {
    height: 120,
    borderWidth: 1,
  },
  tabs: {
    backgroundColor: 'green',
    height: 30,
    width: '100%',
  },
});

export default ProfilePost;
