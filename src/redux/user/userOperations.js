import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFoodIntake,
  setHeadersToken,
  setWaterIntake,
  updateGoalApi,
  updateSettingsApi,
  updateWeightApi,
} from './userApi';

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

export const updateSettingsOperations = createAsyncThunk(
  'user/settings',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await updateSettingsApi(body);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.request.response);
    }
  }
);

export const getDefaultWaterAndCalories = createAsyncThunk(
  'user/waterCalories',
  async (_, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await getFoodIntake();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateWaterOperations = createAsyncThunk(
  'user/waterUpdate',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await setWaterIntake(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
