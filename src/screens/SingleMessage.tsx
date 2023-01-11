import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {MessageNavigatorRootStack} from '../navigators/ts';

type NavigationProps = StackScreenProps<
  MessageNavigatorRootStack,
  'SingleMessage'
>;

const SingleMessage: React.FC<NavigationProps> = ({navigation, route}) => {
  const user = route.params.user;

  useEffect(() => {
    navigation.setOptions({
      title: 'hello',
      headerBackTitle: user.name,
      // headerRight: () => (
      //   <Button onPress={() => console.log('hey')} title="Info" color="#fff" />
      // ),
    });
  }, []);

  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  );
};

export default SingleMessage;

const styles = StyleSheet.create({});
