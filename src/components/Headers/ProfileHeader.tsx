import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootState, AppDispatch} from '../../store/store';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../store/features/auth/extraReducers';

const MyProfileHeader: React.FC = () => {
  const {profile_user} = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.sectionRight}>
        {/* <TouchableOpacity onPress={() => navigator.goBack()}>
          <Icon name="chevron-back-outline" size={25} />
        </TouchableOpacity> */}
        <Text style={styles.logo}>{profile_user.name}</Text>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => console.log('MessageNavigator')}>
          <Icon name="add-outline" size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Icon name="menu-outline" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyProfileHeader;

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    fontStyle: 'italic',
  },

  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '16%',
  },
});
