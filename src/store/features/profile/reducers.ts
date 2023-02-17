import {ProfileInitialState} from './profileSlide';
import {PayloadAction} from '@reduxjs/toolkit';

const reducers = {
  SELECT_USER: (state: ProfileInitialState, action: PayloadAction) => {
    state.profile_user = action.payload;
    console.log(action.payload);
  },
};

export default reducers;
