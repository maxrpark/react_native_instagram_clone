import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainNavigatorRootStack} from '../../navigators/ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

type NavigationProps = StackNavigationProp<MainNavigatorRootStack>;

const FeedsHeader: React.FC = () => {
  const navigator = useNavigation<NavigationProps>();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.headerIcons}>
        <View style={styles.addButton}>
          <Icon name="add-outline" size={20} />
        </View>
        <TouchableOpacity onPress={() => navigator.navigate('Notifications')}>
          <Icon name="heart-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigator.navigate('MessageNavigator')}>
          <Icon name="chatbubble-outline" size={25} />
        </TouchableOpacity>
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
