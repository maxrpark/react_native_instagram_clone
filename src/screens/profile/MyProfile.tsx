import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {RootBottomStackParams} from '../../navigators/BottomTabs';
import {RootStackParams} from '../../navigators/StackNavigator';

type Params = RootStackParams & RootBottomStackParams;

interface Props extends BottomTabScreenProps<Params, 'MyProfile'> {}

const MyProfile: React.FC<Props> = ({navigation}) => {
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
