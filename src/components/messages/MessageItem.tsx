import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {MessageNavigatorRootStack} from '../../navigators/ts';

interface Props {
  item: any; //  TODO
}

type NavigationProps = NavigationProp<MessageNavigatorRootStack, 'Messages'>;

const MessageItem: React.FC<Props> = ({item}) => {
  const navigator = useNavigation<NavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigator.navigate('SingleMessage', {user: item})}
      style={styles.wrapper}>
      <View style={styles.details}>
        <Image
          style={styles.circularImage}
          source={{
            uri: item.img,
          }}
        />
        <View style={styles.messageSender}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.time}> 4hrs.</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={{borderRadius: 20, overflow: 'hidden'}}>
          <Icon name="camera-outline" size={25} />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
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
