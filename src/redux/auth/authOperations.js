import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpAPI, signInAPI, forgotPasswordAPI } from './authAPI';

// Асинхронная операция для регистрации
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signUpAPI(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Асинхронная операция для входа
export const signIn = createAsyncThunk(
  'auth/signIn',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signInAPI(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Асинхронная операция для восстановления пароля
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await forgotPasswordAPI(email);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
