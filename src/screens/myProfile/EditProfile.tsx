import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
const EditProfile: React.FC = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7}>
        <Button title="Change profile picture"></Button>
      </TouchableOpacity>
      {/* <Text>{user.name}</Text> */}
      <Image source={{uri: user.avatar}} style={styles.userImage}></Image>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  userImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
});
