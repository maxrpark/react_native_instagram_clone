import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {TextInput} from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';
import {FormInput} from '../components';

const authValues = {
  user_name: '',
  password: '',
};

const AuthScreen: React.FC = () => {
  const {formValues, handleInputChange} = useForm({...authValues});
  const [isUser, setIsUser] = useState(true);
  const [showPassword, setShowPassword] = useState(true);

  const handleSubmit = () => {
    console.log({
      isUser,
      ...formValues,
    });
  };
  return (
    <View>
      <Text>{isUser ? 'Login' : 'Register'}</Text>
      <View>
        <Text>user name</Text>
        <TextInput
          style={styles.formInput}
          value={formValues.user_name}
          onChangeText={value => handleInputChange(value, 'user_name')}
        />
        <Text>password</Text>
        <TextInput
          style={styles.formInput}
          value={formValues.password}
          secureTextEntry={showPassword}
          onChangeText={value => handleInputChange(value, 'password')}
        />
        <TouchableOpacity
          style={styles.specialText}
          onPress={() => setShowPassword(!showPassword)}>
          <Text>show passworld</Text>
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
