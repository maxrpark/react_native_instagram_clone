import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {RootBottomStackParams} from '../../navigators/BottomTabs';
import {RootStackParams} from '../../navigators/StackNavigator';
import {ScreenNames} from '../../navigators/ts';

type Params = RootStackParams & RootBottomStackParams;

interface Props
  extends BottomTabScreenProps<Params, ScreenNames.MY_PROFILE_PAGE> {}

const MyProfile: React.FC<Props> = ({navigation, route}) => {
  const user = route.params.user;
  console.log(user.user);

  return (
    <View>
      <Text
        style={{
          backgroundColor: 'red',
          color: 'yellow',
          fontSize: 32,
        }}>
        {/* <View style={styles.wrapper}>
          <Icon name="chevron-back-outline" size={30} />
          <Text>{user.name}</Text>
        </View> */}
      </Text>
      <Button title="Setting" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
