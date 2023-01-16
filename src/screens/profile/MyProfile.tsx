import React from 'react';
import {
  View,
  StyleSheet,
  ListRenderItem,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view';
import MyProfileHeader from '../../components/myProfile/MyProfileHeader';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import FeaturedStories from '../../components/myProfile/FeaturedStories';
import {useState} from 'react';

const HEADER_HEIGHT = 250;

const Header = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  const {stories_data} = useSelector((state: RootState) => state.global);
  return (
    <View>
      <View style={{paddingHorizontal: 20}}>
        <MyProfileHeader user={user} />
      </View>
      <FeaturedStories stories={stories_data} />
    </View>
  );
};

const Example: React.FC = () => {
  const [numbers, setNumbers] = useState([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const renderItem: ListRenderItem<number> = React.useCallback(({index}) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);

  const PostItem = ({item}: any) => {
    const {width} = Dimensions.get('window');

    return (
      <View
        key={item}
        style={{
          ...styles.box,
          width: width / 3,
        }}>
        <Image
          style={{width: width / 3, height: 150}}
          source={{
            uri: `https://picsum.photos/id/${item.item}/200/300`,
          }}
        />
      </View>
    );
  };

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
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="A">
        <Tabs.FlatList
          data={numbers}
          keyExtractor={item => item.toLocaleString()}
          numColumns={3}
          renderItem={item => <PostItem key={item} item={item} />}
          onEndReached={loadMore}
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
      <Tabs.Tab name="B">
        <Tabs.FlatList
          data={numbers}
          keyExtractor={item => item.toLocaleString()}
          renderItem={renderItem}
        />
      </Tabs.Tab>
      <Tabs.Tab name="c">
        <Tabs.FlatList
          data={numbers}
          keyExtractor={item => item.toLocaleString()}
          renderItem={renderItem}
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  boxA: {
    backgroundColor: 'red',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    backgroundColor: '#2196f3',
  },

  postWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 70,
    overflow: 'scroll',
  },
  box: {
    height: 120,
    borderWidth: 1,
  },
  tabs: {
    backgroundColor: 'green',
    height: 30,
    width: '100%',
  },
});

export default Example;
