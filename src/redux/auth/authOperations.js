import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpAPI,
  signInAPI,
  forgotPasswordAPI,
  logoutAPI,
  addGoals,
} from './authAPI';
import { setHeadersToken } from 'redux/user/userApi';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await signUpAPI(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Асинхронная операция для входа
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await signInAPI(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Асинхронная операция для восстановления пароля
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const data = await forgotPasswordAPI(email);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addGoalsThunk = createAsyncThunk(
  'auth/requirements',
  (body, { getState }) => {
    setHeadersToken(getState().auth.token);
    const response = addGoals(body);
    return response;
  }
);
// Асинхронная операция для выхода
export const logoutUserThunk = createAsyncThunk('auth/logout', () => {
  logoutAPI();
  return;
});
