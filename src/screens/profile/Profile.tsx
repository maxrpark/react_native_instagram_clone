import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {RootBottomStackParams} from '../../navigators/BottomTabs';
import {RootStackParams} from '../../navigators/StackNavigator';
import {ScreenNames} from '../../navigators/ts';

type Params = RootStackParams & RootBottomStackParams;

interface Props extends BottomTabScreenProps<Params, any> {}

const MyProfile: React.FC<Props> = ({navigation, route}) => {
  return (
    <View>
      <Text>MyProfile</Text>
      <Button
        title="hello"
        onPress={() => navigation.navigate('Settings')}></Button>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
