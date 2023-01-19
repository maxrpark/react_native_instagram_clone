import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  user: {
    name: string;
    avatar: string;
  };
}

const MyProfileNavbar: React.FC<Props> = ({user}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.userName}>{user.name}</Text>
      <View style={styles.headerActions}>
        <Icon name="add-outline" size={30} />
        <Icon name="menu-outline" size={30} />
      </View>
    </View>
  );
};

export default MyProfileNavbar;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 26,
    fontWeight: '700',
  },
  headerActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '18%',
  },
});
