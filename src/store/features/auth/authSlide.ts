import {createSlice} from '@reduxjs/toolkit';
import reducers from './reducer';
import extraReducers from './extraReducers';

interface User {
  insta_id: string;
  profile_pic: string;
  user_id: number;
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
  user: {} as User,
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
