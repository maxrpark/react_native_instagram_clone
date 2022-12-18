import {createSlice} from '@reduxjs/toolkit';
import reducers from './reducer';
interface User {
  name: string;
  avatar: string;
}

export interface AuthInitialState {
  user: User;
}

const initialState: AuthInitialState = {
  user: {
    name: 'max',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80',
  },
};

export const authSlide = createSlice({
  name: 'authSlide',
  initialState,
  reducers,
});

export const authActions = authSlide.actions;

export default authSlide.reducer;
