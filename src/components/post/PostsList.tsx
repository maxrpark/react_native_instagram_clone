import {StyleSheet, Text, View, FlatList} from 'react-native';
import SinglePost from './SinglePost';
import {PostData} from '../../ts/';

const postsList: PostData[] = [
  {
    user: 'max',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nobis molestias veritatis itaque nam natus sed eos est alias optio corporis, sapiente nihil harum? Excepturi obcaecati rerum itaque, debitis placeat in, ipsa cumque ex nostrum hic rem, numquam non ut voluptate molestias dolore exercitationem. Tempora a dolorem at odit repellendus?',
    url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    saved: false,
    liked: false,
  },
  {
    user: 'luci',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nobis molestias veritatis itaque nam natus sed eos est alias optio corporis, sapiente nihil harum? Excepturi obcaecati rerum itaque, debitis placeat in, ipsa cumque ex nostrum hic rem, numquam non ut voluptate molestias dolore exercitationem. Tempora a dolorem at odit repellendus?',
    url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    saved: false,
    liked: false,
  },
  {
    user: 'pepe',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae nobis molestias veritatis itaque nam natus sed eos est alias optio corporis, sapiente nihil harum? Excepturi obcaecati rerum itaque, debitis placeat in, ipsa cumque ex nostrum hic rem, numquam non ut voluptate molestias dolore exercitationem. Tempora a dolorem at odit repellendus?',
    url: 'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
    saved: false,
    liked: false,
  },
];

const PostsList: React.FC = () => {
  return (
    // <SinglePost item={postsList[0]} />

    <FlatList
      data={postsList}
      renderItem={post => <SinglePost {...post} />}
      keyExtractor={item => item.user}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={<View />}
      showsVerticalScrollIndicator={false}
      ListFooterComponentStyle={{height: 300}}
      ItemSeparatorComponent={() => {
        return (
          <View
            style={{
              height: 10,
            }}
          />
        );
      }}
    />
  );
};

export default PostsList;

const styles = StyleSheet.create({});
