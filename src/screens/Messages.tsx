import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useRef} from 'react';
import {MessageItem} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';

const DATA = [
  {
    id: '1',
    name: 'max',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: '2',
    name: 'luci',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: '3',
    name: 'flor',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: '4',
    name: 'orne',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: '5',
    name: 'juan',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: '6',
    name: 'seba',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
  {
    id: '7',
    name: 'fede',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
];

const Messages: React.FC = () => {
  const [showCancelButton, setShowCancelButton] = useState(false);
  const searchInputRef = useRef<TextInput>(null!);

  const cancelSearch = () => {
    searchInputRef.current.blur();
    setShowCancelButton(false);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <View style={styles.searchWrapper}>
          <View style={styles.searchBar}>
            <Icon name="search-outline" />
            <TextInput
              ref={searchInputRef}
              style={styles.textInput}
              placeholder="Search"
              onFocus={() => setShowCancelButton(true)}
              onSubmitEditing={Keyboard.dismiss}
            />
          </View>
          {showCancelButton && (
            <TouchableOpacity onPress={cancelSearch}>
              <Text style={styles.textCancel}>cancel</Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.title}>Messages</Text>
        {DATA.map((item: any) => {
          return <MessageItem key={item.id} item={item} />;
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
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  searchWrapper: {
    marginTop: 10,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 15,
    marginLeft: 4,
    flex: 1,
  },
  searchBar: {
    flex: 1,
    borderWidth: 0.2,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  textCancel: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});
