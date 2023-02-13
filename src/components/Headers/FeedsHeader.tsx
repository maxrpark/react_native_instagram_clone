import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainNavigatorRootStack} from '../../navigators/ts';
import {ScreenNames} from '../../navigators/ts';
import {authActions} from '../../store/features/auth/authSlide';
import {useDispatch} from 'react-redux';

type NavigationProps = StackNavigationProp<MainNavigatorRootStack>;

const FeedsHeader: React.FC = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation<NavigationProps>();
  return (
    <View style={styles.mainWrapper}>
      <Text style={styles.logo}>Instagram</Text>
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => dispatch(authActions.LAUNCH_CAMERA())}>
          <View style={styles.addButton}>
            <Icon name="add-outline" size={20} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigator.navigate(ScreenNames.NOTIFICATIONS)}>
          <Icon name="heart-outline" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigator.navigate(ScreenNames.MESSAGE_NAVIGATOR)}>
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
