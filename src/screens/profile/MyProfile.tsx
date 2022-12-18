import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {RootBottomStackParams} from '../../navigators/BottomTabs';
import {RootStackParams} from '../../navigators/StackNavigator';
import {ScreenNames} from '../../navigators/ts';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyProfileHeader, MyProfileNavbar} from '../../components/';
import FeaturedStories from '../../components/myProfile/FeaturedStories';

type Params = RootStackParams & RootBottomStackParams;

interface Props
  extends BottomTabScreenProps<Params, ScreenNames.MY_PROFILE_PAGE> {
  user: any;
}

const Items = [
  'max',
  'max2',
  'max3',
  'max4',
  'max5',
  'max6',
  'max7',
  'max8',
  'max9',
  'max10',
  'max11',
  'max12',
  'max13',
  'max42',
  'max51',
  'max61',
  'max71',
  'max81',
  'max91',
  'max83',
  'max44',
];

const MyProfile: React.FC<Props> = ({navigation}) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const {stories_data} = useSelector((state: RootState) => state.global);
  return (
    <View>
      <MyProfileNavbar user={user} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}>
        <View style={{paddingHorizontal: 20}}>
          <MyProfileHeader user={user} />
        </View>
        <FeaturedStories stories={stories_data} />
        <View style={styles.tabs}></View>

        <View style={styles.postWrapper}>
          {Items.map((item, idx) => {
            return (
              <View
                key={item}
                style={{
                  ...styles.box,
                  flexGrow: idx === Items.length - 1 ? 0 : 1,
                }}>
                <Text>{item}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* <FlatList
        data={Items}
        numColumns={3}
        keyExtractor={item => item}
        ListHeaderComponent={() => <Text>Component</Text>}
        renderItem={item => (
          <View style={styles.box}>
            <Text>{item.item}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 350}}
      /> */}
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  postWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 70,
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    backgroundColor: 'blue',

    flex: 1,
  },
  box: {
    height: 120,
    // width: '33%',

    backgroundColor: 'red',

    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '33%',
  },
  tabs: {
    backgroundColor: 'green',
    height: 30,
    width: '100%',
    // position:'s'
  },
});
