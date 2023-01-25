import {ProfileInitialState} from './profileSlide';
import {PayloadAction} from '@reduxjs/toolkit';

const reducers = {
  SELECT_USER: (state: ProfileInitialState, action: PayloadAction) => {
    console.log('fire');

    console.log('payload', action.payload);

    state.profile_user = action.payload;
  },
};

export default reducers;
