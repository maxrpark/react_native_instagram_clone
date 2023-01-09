import {StyleSheet, SectionList, View, Text} from 'react-native';
import React from 'react';
import {NewLike, NewFollow} from '../components';

type Props = {};
const components = {
  NewLike: NewLike,
  NewFollow: NewFollow,
};

interface NotificationData {
  date: string;
  data: {
    id: string;
    name: keyof typeof components;
  }[];
}

const DATA: NotificationData[] = [
  {
    date: 'Today',
    data: [
      {
        id: '1',
        name: 'NewFollow',
      },
      {
        id: '2',
        name: 'NewLike',
      },
      {
        id: '3',
        name: 'NewLike',
      },
    ],
  },
  {
    date: 'Ayer',
    data: [
      {
        id: '1',
        name: 'NewLike',
      },
      {
        id: '2',
        name: 'NewLike',
      },
      {
        id: '3',
        name: 'NewLike',
      },
    ],
  },
];

interface DynamicProps {
  Name: keyof typeof components;
}

const SingleNotification: React.FC<DynamicProps> = ({Name}) => {
  const SpecificStory = components[Name];
  return <SpecificStory />;
};

const Notifications = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <SectionList
        sections={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => SingleNotification({Name: item.name})}
        renderSectionHeader={({section: {date}}) => <Text>{date}</Text>}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});
