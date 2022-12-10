import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import reducers from './reducers';
import {GlobalInitialState} from '../../../ts/';

const initialState: GlobalInitialState = {
  name: 'instagram clone store!!!',
  stories_data: [
    {id: '1', src: '/', user: 'user_1'},
    {id: '2', src: '/', user: 'user_2'},
    {id: '3', src: '/', user: 'user_3'},
    {id: '4', src: '/', user: 'user_4'},
    {id: '5', src: '/', user: 'user_5'},
    {id: '6', src: '/', user: 'user_6'},
    {id: '7', src: '/', user: 'user_7'},
  ],
};

export const globalSlide = createSlice({
  name: 'globalSlide',
  initialState,
  reducers,
});

export const globalActions = globalSlide.actions;

export default globalSlide.reducer;
