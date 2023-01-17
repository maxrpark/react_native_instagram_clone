import {Dimensions, StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  item: any; // todo
  type?: string;
}

const PostPreview: React.FC<Props> = ({item, type}) => {
  const {width} = Dimensions.get('window');

  return (
    <View
      key={item}
      style={{
        ...styles.postContainer,
        width: width / 3,
        height: type == 'reels' ? 250 : 150,
      }}>
      <Image
        style={{width: width / 3, height: type == 'reels' ? 250 : 150}}
        source={{
          uri: item.url,
        }}
      />
      {type !== 'reels' && item.type == 'reel' ? (
        <>
          <View style={styles.postIconReel}>
            <Icon size={16} color={'white'} name="film-outline" />
          </View>
        </>
      ) : null}
      {type == 'reels' && item.type == 'reel' ? (
        <>
          <View style={styles.reelsIconPlay}>
            <Icon size={16} color={'white'} name="play-outline" />
            <Text style={{color: 'white', marginLeft: 3}}>1499</Text>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default PostPreview;

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 1,
  },
  postIconReel: {
    position: 'absolute',
    right: 6,
    top: 6,
  },
  reelsIconPlay: {
    position: 'absolute',
    left: 6,
    bottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
