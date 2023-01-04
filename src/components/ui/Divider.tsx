import {StyleSheet, View} from 'react-native';

const Divider: React.FC = () => {
  return <View style={styles.divider}></View>;
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginTop: 8,
    width: '100%',
  },
});
