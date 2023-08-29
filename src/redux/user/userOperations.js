import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getFoodIntake,
  getMonthStatistic,
  setFoodIntake,
  setHeadersToken,
  setWaterIntake,
  updateFoodApi,
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
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
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

export const updateFoodOperations = createAsyncThunk(
  'user/foodUpdate',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await setFoodIntake(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getMonthAllStatistic = createAsyncThunk(
  'user/statistics',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await getMonthStatistic(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getYearAllStatistic = createAsyncThunk(
  'user/statistic-year',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);
      const data = await getMonthStatistic(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserFoodOperation = createAsyncThunk(
  'user/update-food',
  async (body, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.token);

      const id = getState().user.id;
      const data = await updateFoodApi(id, body);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
