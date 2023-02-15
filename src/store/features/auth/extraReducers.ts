import {createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {AuthInitialState} from './authSlide';
import authApi from '../../../endpoints/authApi';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthValues {
  insta_id: string;
  password: string;
}
export const showMe = createAsyncThunk('auth/showMe', async () => {
  try {
    const res = await authApi.get('/users/me/');

    if (res.status === 200) {
      const token = await AsyncStorage.getItem('@token');
      const resp = await authApi.post('/jwt/refresh/', {
        refresh: JSON.parse(token as string).refresh,
      });

      if (res.status === 200) {
        const jsonValue = JSON.stringify(resp.data);
        await AsyncStorage.setItem('@token', jsonValue);
      }
    }
    // console.log(res.status);
    return res.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
});
export const login = createAsyncThunk(
  'auth/login',
  async (authValues: AuthValues, thunkAPI) => {
    try {
      const res = await authApi.post('/token/', authValues);
      const resData = {
        data: res.data,
        status: res.status,
      };
      if (res.status === 200) {
        const jsonValue = JSON.stringify(res.data);
        await AsyncStorage.setItem('@token', jsonValue);
      }
      return resData;
    } catch (error: any) {
      const resData = {
        data: error.response.data,
        status: error.response.status,
      };
      return resData;
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await authApi.post('/token/logout/');
    await AsyncStorage.removeItem('@token');
    return {msg: 'logout'};
  } catch (error: any) {
    const resData = {
      data: error.response.data,
      status: error.response.status,
    };
    return resData;
  }
});

const extraReducers = (builder: any) => {
  builder
    .addCase(login.pending, (state: AuthInitialState) => {
      state.authErrors = [];
    })
    .addCase(
      login.fulfilled,
      (state: AuthInitialState, action: PayloadAction) => {
        if ((action.payload as any).status !== 200) {
          Alert.alert('Fail to log in', (action.payload as any).data.detail);
          return;
        }
        state.isAuthenticated = true;
      },
    )
    .addCase(
      login.rejected,
      (state: AuthInitialState, action: PayloadAction) => {
        console.log('error');
      },
    )
    .addCase(showMe.pending, (state: AuthInitialState) => {})
    .addCase(
      showMe.fulfilled,
      (state: AuthInitialState, action: PayloadAction) => {
        if ((action.payload as any)?.insta_id) state.isAuthenticated = true;
        state.checking = false;
      },
    )
    .addCase(
      showMe.rejected,
      (state: AuthInitialState, action: PayloadAction) => {
        console.log((action.payload as any).data);
      },
    )
    .addCase(
      logout.fulfilled,
      (state: AuthInitialState, action: PayloadAction) => {
        state.isAuthenticated = false;
        // remove user from state TODO or clear state
      },
    )
    .addCase(
      logout.rejected,
      (state: AuthInitialState, action: PayloadAction) => {
        console.log((action.payload as any).data);
      },
    );
};

export default extraReducers;
