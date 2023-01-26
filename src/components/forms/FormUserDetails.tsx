import React from 'react';
import {StyleSheet, View} from 'react-native';
import useForm from '../../hooks/useForm';
import FormInput from './FormInput';

interface Props {
  user: any;
}
const FormUserDetails: React.FC<Props> = ({user}) => {
  const {formValues, handleInputChange} = useForm({...user});

  return (
    <View style={styles.formContainer}>
      <FormInput
        label={'name'}
        inputValue={formValues.name}
        placeHolder={'name'}
        name={'name'}
        handleInputChange={handleInputChange}
      />
      <FormInput
        label={'userName'}
        inputValue={formValues.userName}
        placeHolder={'userName'}
        name={'userName'}
        handleInputChange={handleInputChange}
      />
      <FormInput
        label={'Bio'}
        inputValue={formValues.Bio}
        placeHolder={'Bio'}
        name={'Bio'}
        handleInputChange={handleInputChange}
      />
    </View>
  );
};

export default FormUserDetails;

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 20,
  },
});
