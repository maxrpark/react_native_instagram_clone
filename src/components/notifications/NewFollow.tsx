import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

type Props = {};

const NewFollow: React.FC<Props> = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.details}>
        <Image
          style={styles.circularImage}
          source={{
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
          }}
        />
        <Text style={styles.notificationText}>
          <Text style={styles.userName}>User </Text>
          request to follow you
          <Text style={styles.time}> 4hrs.</Text>
        </Text>
      </View>
      <TouchableOpacity>
        <View style={{borderRadius: 20, overflow: 'hidden'}}>
          <Text style={styles.followBtn}> Follow</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewFollow;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationText: {
    maxWidth: '60%',
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
