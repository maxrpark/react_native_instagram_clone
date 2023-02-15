import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {SearchInput} from '../components';
import {useState, useEffect} from 'react';
import {postApi} from '../endpoints/postApi';

export interface Post {
  id: number;
  author: Author;
  post_images: any[];
  content: string;
  location: null;
  upload_at: Date;
  is_good: boolean;
  is_comment: boolean;
  is_reel: boolean;
  goods: number;
}

export interface Author {
  insta_id: string;
  profile_pic: string;
  profile_name: string;
  profile_website: string;
  profile_info: string;
  followers_count: number;
  following_count: number;
}

const Posts: React.FC = () => {
  const [post, setPost] = useState<Post[]>([]);

  const PostImage: React.FC = (item: any) => {
    return (
      <View style={styles.postWrapper}>
        <Image
          source={{uri: `https://picsum.photos/id/${item.id}/500/400`}}
          style={{
            ...styles.img,
            // ...isReel
          }}
        />
      </View>
    );
  };

  // const loadMore = () => {
  //   let newNumbers: number[] = [];
  //   for (let i = 0; i < 5; i++) {
  //     newNumbers[i] = numbers.length + i + 1;
  //   }
  //   setTimeout(() => {
  //     setNumbers([...numbers, ...newNumbers]);
  //   }, 1500);
  // };

  const getPost = async () => {
    const res = await postApi('/');
    console.log(res.data);

    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <View>
      <FlatList
        data={post}
        keyExtractor={item => item.id.toLocaleString()}
        renderItem={({item}) => PostImage(item)}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{paddingHorizontal: 8, marginBottom: 4}}>
            <SearchInput />
          </View>
        }
        // onEndReached={loadMore}
        // onEndReachedThreshold={0.5}
        // ListFooterComponent={
        //   <View
        //     style={{
        //       height: 150,
        //       width: '100%',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //     }}>
        //     <ActivityIndicator size={20} color="red" />
        //   </View>
        // }
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  title: {
    fontSize: 45,
  },
  postWrapper: {
    flex: 1 / 3,
  },
  img: {
    width: '100%',
    height: 150,
  },
});
