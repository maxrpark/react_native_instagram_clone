import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import reducers from './reducers';

interface GlobalInitialState {
  name: string;
}

const initialState: GlobalInitialState = {
  name: 'instagram clone store!!!',
};

export const globalSlide = createSlice({
  name: 'globalSlide',
  initialState,
  reducers,
});

export const globalActions = globalSlide.actions;

export default globalSlide.reducer;
