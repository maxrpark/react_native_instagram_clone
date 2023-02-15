import {createSlice} from '@reduxjs/toolkit';
import reducers from './reducer';
import extraReducers from './extraReducers';

interface User {
  name: string;
  avatar: string;
  userName: string;
  // pronombres: string;
  bio: string;
  url: string;
}

export interface AuthInitialState {
  user: User;
  isAuthenticated: boolean;
  checking: boolean;
  accessToken: string;
  refreshToken: string;
  authErrors: string[];
}

const initialState: AuthInitialState = {
  isAuthenticated: false,
  accessToken: '',
  refreshToken: '',
  user: {
    name: 'max',
    userName: 'maxi.r.park',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
    bio: '',
    url: '',
  },
  authErrors: [],
  checking: true,
};

export const authSlide = createSlice({
  name: 'authSlide',
  initialState,
  reducers,
  extraReducers,
});

export const authActions = authSlide.actions;

export default authSlide.reducer;
