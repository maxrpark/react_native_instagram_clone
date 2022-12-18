import {configureStore} from '@reduxjs/toolkit';
import {globalReducer, authReducer} from './features';

export const store = configureStore({
  reducer: {
    global: globalReducer,
    auth: authReducer,
  },
});
// devTools: true,
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
