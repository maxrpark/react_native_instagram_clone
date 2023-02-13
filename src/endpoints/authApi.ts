import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://127.0.0.1:8000/api/v1';

const authApi = axios.create({baseURL});

interface Token {
  refresh: string;
  access: string;
}

authApi.interceptors.request.use(async config => {
  let token: Token | string | null = await AsyncStorage.getItem('@token');

  if (token) {
    token = JSON.parse(token);
    config.headers.Authorization = `Bearer ${(token as Token).access}`;
  }
  return config;
});

export default authApi;
