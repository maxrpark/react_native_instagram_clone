import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FeedsHeader: React.FC = () => {
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.headerIcons}>
        <View style={styles.addButton}>
          <Icon name="add-outline" size={20} />
        </View>
        <Icon name="heart-outline" size={30} />
        <Icon name="chatbubble-outline" size={25} />
      </View>
    </View>
  );
};

export default FeedsHeader;

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 16,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    fontStyle: 'italic',
  },

  addButton: {
    borderColor: 'black',
    borderWidth: 2,
    width: 23,
    height: 23,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
  },
});
