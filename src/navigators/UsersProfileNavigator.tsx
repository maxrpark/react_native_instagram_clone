import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TagsProfile, PostProfile, ReelsProfile} from '../screens';
import {Dimensions, View, ScrollView, Text} from 'react-native';
import MyProfileNavbar from '../components/myProfile/MyProfileNavbar';
import MyProfileHeader from '../components/myProfile/MyProfileHeader';
import FeaturedStories from '../components/myProfile/FeaturedStories';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const Tab = createMaterialTopTabNavigator();

const MyProfileNavigator = () => {
  const windowHeight = Dimensions.get('window').height;
  const {user} = useSelector((state: RootState) => state.auth);
  const {stories_data} = useSelector((state: RootState) => state.global);

  return (
    <View>
      <Text>It's brittney bitch</Text>
      <MyProfileNavbar user={user} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}>
        <View style={{paddingHorizontal: 20}}>
          <MyProfileHeader user={user} />
        </View>
        <FeaturedStories stories={stories_data} />
        <Tab.Navigator style={{height: windowHeight}}>
          <Tab.Screen name="Post" component={PostProfile} />
          <Tab.Screen name="Reels" component={ReelsProfile} />
          <Tab.Screen name="Tags" component={TagsProfile} />
        </Tab.Navigator>
      </ScrollView>
    </View>
  );
};

export default MyProfileNavigator;
