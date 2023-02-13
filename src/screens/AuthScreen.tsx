import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {TextInput} from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';
import {FormInput} from '../components';
import {useDispatch} from 'react-redux';
import {login} from '../store/features/auth/extraReducers';
import {AppDispatch} from '../store/store';
import {showMe} from '../store/features/auth/extraReducers';

const authValues = {
  insta_id: '',
  password: '',
};

const AuthScreen: React.FC = () => {
  const {formValues, handleInputChange} = useForm({...authValues});
  const [isUser, setIsUser] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    // dispatch(showMe());
    if (
      formValues.insta_id.trim().length === 0 ||
      formValues.password.trim().length === 0
    ) {
      console.log('please provide all values');
      return;
    }
    if (isUser) {
      // dispatch(showMe());
      dispatch(login(formValues));
    }
  };
  return (
    <View>
      <Text>{isUser ? 'Login' : 'Register'}</Text>
      <View>
        <Text>user name</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.formInput}
          value={formValues.insta_id}
          onChangeText={value => handleInputChange(value, 'insta_id')}
        />
        <Text>password</Text>
        <TextInput
          autoCapitalize="none"
          style={styles.formInput}
          value={formValues.password}
          secureTextEntry={showPassword}
          onChangeText={value => handleInputChange(value, 'password')}
        />
        <TouchableOpacity
          style={styles.specialText}
          onPress={() => setShowPassword(!showPassword)}>
          <Text>show password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.specialText} onPress={handleSubmit}>
          <Text>{isUser ? 'Login' : 'Register'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomMessage}>
        {isUser ? (
          <>
            <Text>Don't have an account </Text>
            <TouchableOpacity
              style={styles.specialText}
              onPress={() => setIsUser(!isUser)}>
              <Text>Register</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text>Have an account </Text>
            <TouchableOpacity
              style={styles.specialText}
              onPress={() => setIsUser(!isUser)}>
              <Text>Login</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  formInput: {
    borderWidth: 0.5,
  },

  bottomMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  specialText: {
    alignSelf: 'center',
  },
});
