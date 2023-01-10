import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  item: any; //  TODO
}

const MessageItem: React.FC<Props> = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.details}>
        <Image
          style={styles.circularImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
          }}
        />
        <View style={styles.messageSender}>
          <Text style={styles.userName}>User</Text>
          <Text style={styles.time}> 4hrs.</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{borderRadius: 20, overflow: 'hidden'}}>
          <Icon name="camera-outline" size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MessageItem;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageSender: {
    maxWidth: '60%',
    // flexDirection: 'row',
  },
  userName: {
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  circularImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },

  followBtn: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 8,
  },
});
