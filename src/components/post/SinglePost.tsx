import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  item: any;
}

const SinglePost: React.FC<Props> = ({item}) => {
  return (
    <View>
      <Image source={{uri: item.url}} style={{width: '100%', height: 300}} />
    </View>
  );
};

export default SinglePost;

const styles = StyleSheet.create({});
