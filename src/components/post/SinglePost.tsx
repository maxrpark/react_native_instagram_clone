import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {PostData} from '../../ts';
import PostButton from './PostButton';
// import Ic
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  item: PostData;
}

const iconSize = 25;

const SinglePost: React.FC<Props> = ({item}) => {
  const [post, setPost] = useState(item);
  const [showDesc, setShowDesc] = useState(false);

  const isLiked = post.liked ? 'heart' : 'heart-outline';
  const isSaved = post.saved ? 'bookmark' : 'bookmark-outline';

  const handleDescPress = () => {
    setShowDesc(!showDesc);
  };
  const handleLikePress = () => {
    setPost({...post, liked: !post.liked});
  };
  const handleSavePress = () => {
    setPost({...post, saved: !post.saved});
  };

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image source={{uri: post.avatar}} style={styles.avatar} />
          <Text>{post.user}</Text>
        </View>
        <Icon
          style={{marginTop: 2.5}}
          size={20}
          name="ellipsis-horizontal-outline"></Icon>
      </View>
      <Image source={{uri: post.url}} style={{width: '100%', height: 300}} />
      <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
        <PostButton
          liked={post.liked}
          saved={post.saved}
          handleLikePress={handleLikePress}
          handleSavePress={handleSavePress}
        />
        <Text>100.000.00 Likes</Text>
        <Text style={styles.descText} onPress={handleDescPress}>
          {post.user}{' '}
          {showDesc ? post.desc : `${post.desc.substring(0, 40)}... more`}
        </Text>
        <Text>See 43 comments</Text>
      </View>
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonLeft: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
  },
  actionButtonsIcons: {
    width: 100,
  },
  descText: {
    marginVertical: 8,
  },
});
