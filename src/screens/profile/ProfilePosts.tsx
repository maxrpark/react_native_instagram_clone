import React from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

type Props = {};

const Items = [
  '1',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '110',
  '111',
  '112',
  '113',
  '142',
  '151',
  '161',
  '171',
  '181',
  '191',
  '183',
  '144',
];
const ProfilePost: React.FC = (props: Props) => {
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
            uri: `https://picsum.photos/id/${item}/200/300`,
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.postWrapper}>
      {/* <FlatList
        numColumns={3}
        data={Items}
        renderItem={item => <PostItem item={item} />}
      /> */}
      {Items.map(item => {
        return (
          <PostItem key={item} item={item} />
          // <View
          //   key={item}
          //   style={{
          //     ...styles.box,
          //     width: width / 3,
          //   }}>
          //   <Image
          //     style={{width: width / 3, height: 150}}
          //     source={{
          //       uri: `https://picsum.photos/id/${item}/200/300`,
          //     }}
          //   />
          // </View>
        );
      })}
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
