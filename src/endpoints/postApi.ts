import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api/v1/post';

export const postApi = axios.create({baseURL});

interface Token {
  refresh: string;
  access: string;
}

postApi.interceptors.request.use(async config => {
  let token: Token | string | null = await AsyncStorage.getItem('@token');

  if (token) {
    token = JSON.parse(token);
    config.headers.Authorization = `Bearer ${(token as Token).access}`;
  }
  return config;
});
