import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {MessageItem} from '../components';

const DATA = Array.from(Array(6).keys());

const Messages: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Text>Messages</Text>
        {DATA.map((item: any) => {
          return <MessageItem item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
