import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainNavigatorRootStack, ScreenNames} from '../../navigators/ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

type NavigationProps = StackNavigationProp<MainNavigatorRootStack>;

const MyProfileHeader: React.FC = ({}) => {
  const navigator = useNavigation<NavigationProps>();
  const {profile_user} = useSelector((state: RootState) => state.profile);
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <View style={{marginVertical: 16}}>
      <View style={styles.wrapper}>
        <Image source={{uri: profile_user.avatar}} style={styles.avatar} />
        <View style={styles.counts}>
          <View style={styles.count}>
            <Text style={styles.countNumber}>1200</Text>
            <Text>Post</Text>
          </View>
          <View style={styles.count}>
            <Text style={styles.countNumber}>60K</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.count}>
            <Text style={styles.countNumber}>200</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing</Text>
      {/* TODO */}
      {profile_user.name == user.name && (
        <TouchableOpacity
          onPress={() => navigator.navigate(ScreenNames.EDIT_PROFILE)}
          style={styles.button}>
          <Text style={{color: 'white', fontSize: 16}}>Edit Profile</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyProfileHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginBottom: 4,
  },
  counts: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  countNumber: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  button: {
    width: '100%',
    height: 30,
    backgroundColor: 'black',
    borderRadius: 5,
    color: 'white',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
