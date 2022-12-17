import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PostData} from '../../ts/interfaces/globalInterfaces';

interface Props {
  liked: boolean;
  saved: boolean;
  handleLikePress: () => void;
  handleSavePress: () => void;
}
const iconSize = 25;

const PostButton: React.FC<Props> = ({
  saved,
  liked,
  handleLikePress,
  handleSavePress,
}) => {
  const isLiked = liked ? 'heart' : 'heart-outline';
  const isSaved = saved ? 'bookmark' : 'bookmark-outline';

  return (
    <View style={styles.actionButtonContainer}>
      <View style={styles.buttonLeft}>
        <TouchableOpacity onPress={handleLikePress}>
          <Icon
            size={iconSize}
            name={isLiked}
            color={liked ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon size={iconSize} name="chatbubble-outline"></Icon>
        </TouchableOpacity>
        <Icon size={iconSize} name="send-outline" />
      </View>
      <TouchableOpacity onPress={handleSavePress}>
        <Icon size={iconSize} name={isSaved} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonLeft: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
  },
  actionButtonsIcons: {
    width: 100,
  },
  descText: {
    marginVertical: 8,
  },
});

export default PostButton;
