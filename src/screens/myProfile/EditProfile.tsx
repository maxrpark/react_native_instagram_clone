import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {FormUserDetails} from '../../components';

const EditProfile: React.FC = () => {
  const {user} = useSelector((state: RootState) => state.auth);

  return (
    <View>
      <View style={styles.imgWrapper}>
        <Image source={{uri: user.avatar}} style={styles.userImage} />
        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.buttonEdit}>Change profile picture</Text>
        </TouchableOpacity>
      </View>
      <FormUserDetails user={user} />
      <TouchableOpacity activeOpacity={0.7}>
        <Text
          style={{
            ...styles.buttonEdit,
            textAlign: 'center',
            fontSize: 16,
            marginTop: 20,
          }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  imgWrapper: {
    alignItems: 'center',
  },
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonEdit: {
    color: 'blue',
  },
});
