import {StyleSheet, Text, View, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState, useRef} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInput: React.FC = () => {
  const [showCancelButton, setShowCancelButton] = useState(false);
  const searchInputRef = useRef<TextInput>(null!);

  const cancelSearch = () => {
    searchInputRef.current.blur();
    setShowCancelButton(false);
  };
  return (
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
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchWrapper: {
    marginTop: 10,
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
