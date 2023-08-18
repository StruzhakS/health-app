import { createAsyncThunk } from '@reduxjs/toolkit';
import { setHeadersToken, updateGoalApi, updateWeightApi } from './userApi';

export const updateGoalOperation = createAsyncThunk(
  'user/goal',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await updateGoalApi(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateWeightOperation = createAsyncThunk(
  'user/weight',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await updateWeightApi(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
