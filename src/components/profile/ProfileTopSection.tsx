import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FeaturedStories, ProfileDetails} from '..';
import MyProfileHeader from '../headers/ProfileHeader';

interface Props {
  user: any; // todo
  stories_data: any; // todo
}

const ProfileTopSection: React.FC<Props> = ({user, stories_data}) => {
  return (
    <View>
      <MyProfileHeader />
      <View style={{paddingHorizontal: 20}}>
        <ProfileDetails user={user} />
      </View>
      <FeaturedStories stories={stories_data} />
    </View>
  );
};

export default ProfileTopSection;

const styles = StyleSheet.create({});
