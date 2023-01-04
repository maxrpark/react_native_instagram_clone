import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Divider from '../ui/Divider';

interface Props {
  label: string;
  inputValue: string;
  placeHolder: string;
  name: string;
  handleInputChange: (value: string, name: string) => void;
}

const FormInput: React.FC<Props> = ({
  label,
  inputValue,
  placeHolder,
  name,
  handleInputChange,
}) => {
  return (
    <View style={styles.formControl}>
      <Text>{name}</Text>
      {/* <View style={{flex: 0.5}}></View> */}
      <View style={styles.formInput}>
        <TextInput
          placeholder={name}
          value={inputValue}
          onChangeText={value => handleInputChange(value, 'name')}
        />
        <Divider />
      </View>
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  formControl: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    height: 30,
    marginTop: 16,
  },
  formInput: {
    flex: 0.97,
  },
});
