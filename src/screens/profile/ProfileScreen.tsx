import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';

import {RootState} from '../../store/store';
import {useSelector} from 'react-redux';

import {PostPreview, ProfileTopSection} from '../../components';
import {user_post_data, user_reels_data} from '../../utils/postData';

import {StackScreenProps} from '@react-navigation/stack';
import {
  MainNavigatorRootStack,
  RootBottomStackParams,
} from '../../navigators/ts';

type navigatorRoots = RootBottomStackParams & MainNavigatorRootStack;

interface Props extends StackScreenProps<navigatorRoots, 'Profile'> {}

const MyProfile: React.FC<Props> = ({navigation, route}) => {
  const [user, setUser] = useState(route.params.user);

  const {stories_data} = useSelector((state: RootState) => state.global);

  const [numbers, setNumbers] = useState([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const loadMore = () => {
    let newNumbers: number[] = [];
    for (let i = 0; i < 12; i++) {
      newNumbers[i] = numbers.length + i + 1;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
      console.log('hey');
    }, 1500);
  };

  return (
    <Tabs.Container
      renderHeader={() => (
        <ProfileTopSection user={user} stories_data={stories_data} />
      )}>
      <Tabs.Tab name="Posts">
        <Tabs.FlatList
          data={user_post_data}
          keyExtractor={item => item.id + 'post'}
          numColumns={3}
          renderItem={item => <PostPreview type={'post'} {...item} />}
          // onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            <View
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={20} color="red" />
            </View>
          }
        />
      </Tabs.Tab>
      <Tabs.Tab name="Reels">
        <Tabs.FlatList
          data={user_reels_data}
          keyExtractor={item => item.id + 'reels'}
          numColumns={3}
          renderItem={item => <PostPreview type={'reels'} {...item} />}
          // onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            <View
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={20} color="red" />
            </View>
          }
        />
      </Tabs.Tab>
      <Tabs.Tab name="Tags">
        <Tabs.FlatList
          data={[]}
          keyExtractor={(item, idx) => idx + 'tags'}
          numColumns={3}
          renderItem={item => <PostPreview type={'post'} {...item} />}
          // onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            <View
              style={{
                height: 150,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={20} color="red" />
            </View>
          }
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({});

export default MyProfile;
