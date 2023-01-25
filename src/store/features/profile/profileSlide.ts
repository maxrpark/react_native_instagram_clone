import {createSlice} from '@reduxjs/toolkit';
import reducers from './reducers';
export interface ProfileInitialState {
  profile_user: any;
}

const initialState: ProfileInitialState = {
  profile_user: {},
};

export const profileSlice = createSlice({
  name: 'profileReducer',
  initialState,
  reducers,
});

export const profileActions = profileSlice.actions;

export default profileSlice.reducer;
