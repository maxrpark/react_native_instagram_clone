import {configureStore} from '@reduxjs/toolkit';
import {globalReducer} from './features';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
// devTools: true,
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
