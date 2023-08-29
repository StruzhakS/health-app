import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getDefaultWaterAndCalories,
  getMonthAllStatistic,
  getYearAllStatistic,
  updateFoodOperations,
  updateUserFoodOperation,
  updateWaterOperations,
  updateWeightOperation,
} from './userOperations';
import { logoutUserThunk } from 'redux/auth/authOperations';

const initialState = {
  defaultWater: 0,
  defaultCalories: 0,

  goalFat: 0,
  goalCarbo: 0,
  goalProtein: 0,

  fat: 0,
  carbo: 0,
  protein: 0,

  water: 0,
  calories: 0,

  error: null,
  isLoading: false,
  changeWeight: false,

  breakfast: [],
  lunch: [],
  dinner: [],
  snack: [],

  monthStatistic: [],
  yearStatistic: [],
  id: null,
};
const getDefaultWaterAndCaloriesFulfilled = (state, { payload }) => {
  state.defaultWater = payload.defaultWater;
  state.defaultCalories = payload.defaultCalories;
  state.water = payload.water;
  state.calories = payload.calories;
  state.goalFat = payload.goalFat;
  state.goalCarbo = payload.goalCarbo;
  state.goalProtein = payload.goalProtein;
  state.fat = payload.fat;
  state.carbo = payload.carbonohidrates;
  state.protein = payload.protein;
  state.changeWeight = payload.changeWeight;
  state.breakfast = payload.breakfast;
  state.lunch = payload.lunch;
  state.dinner = payload.dinner;
  state.snack = payload.snack;
  state.id = payload._id;
};
const updateFoodOperationsFulfilled = (state, { payload }) => {
  state.fat = payload.fat;
  state.carbo = payload.carbonohidrates;
  state.protein = payload.protein;
  state.calories = payload.calories;
  state.breakfast = payload.breakfast;
  state.lunch = payload.lunch;
  state.dinner = payload.dinner;
  state.snack = payload.snack;
  state.changeWeight = payload.changeWeight;
};
const updateWaterOperationsFulfilled = (state, { payload }) => {
  state.water = payload.water;
};
const updateWeightOperationFulfilled = (state, { payload }) => {
  state.defaultWater = payload.defaultWater;
  state.defaultCalories = payload.defaultCalories;

  state.water = payload.water;
  state.calories = payload.calories;
  state.goalFat = payload.goalFat;
  state.goalCarbo = payload.goalCarbo;
  state.goalProtein = payload.goalProtein;

  state.fat = payload.fat;
  state.carbo = payload.carbonohidrates;
  state.protein = payload.protein;
  state.changeWeight = payload.changeWeight;
};
const updateUserFoodOperationFulfilled = (state, { payload }) => {
  state.breakfast = payload.breakfast;
  state.lunch = payload.lunch;
  state.dinner = payload.dinner;
  state.snack = payload.snack;
};
const getMonthAllStatisticFulfilled = (state, { payload }) => {
  state.monthStatistic = payload;
};

const getYearAllStatisticFulfilled = (state, { payload }) => {
  state.yearStatistic = payload;
};
const logoutUserThunkFulfilled = (state, { payload }) => {
  state.breakfast = [];
  state.lunch = [];
  state.dinner = [];
  state.snack = [];
  state.id = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        getDefaultWaterAndCalories.fulfilled,
        getDefaultWaterAndCaloriesFulfilled
      )
      .addCase(updateWaterOperations.fulfilled, updateWaterOperationsFulfilled)
      .addCase(updateFoodOperations.fulfilled, updateFoodOperationsFulfilled)
      .addCase(updateWeightOperation.fulfilled, updateWeightOperationFulfilled)
      .addCase(
        updateUserFoodOperation.fulfilled,
        updateUserFoodOperationFulfilled
      )
      .addCase(getMonthAllStatistic.fulfilled, getMonthAllStatisticFulfilled)
      .addCase(getYearAllStatistic.fulfilled, getYearAllStatisticFulfilled)
      .addCase(logoutUserThunk.fulfilled, logoutUserThunkFulfilled)

      .addMatcher(
        isAnyOf(
          getDefaultWaterAndCalories.rejected,
          updateWaterOperations.rejected,
          updateFoodOperations.rejected,
          updateWeightOperation.rejected,
          updateUserFoodOperation.rejected,
          logoutUserThunk.rejected,
          getYearAllStatistic.rejected,
          getMonthAllStatistic.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          getDefaultWaterAndCalories.fulfilled,
          updateWaterOperations.fulfilled,
          updateFoodOperations.fulfilled,
          updateWeightOperation.fulfilled,
          updateUserFoodOperation.fulfilled,
          logoutUserThunk.fulfilled,
          getYearAllStatistic.fulfilled,
          getMonthAllStatistic.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getDefaultWaterAndCalories.pending,
          updateWaterOperations.pending,
          updateFoodOperations.pending,
          updateWeightOperation.pending,
          updateUserFoodOperation.pending,
          logoutUserThunk.pending,
          getYearAllStatistic.pending,
          getMonthAllStatistic.pending
        ),
        handlePending
      );
  },
});

export const { logout, updateAuthStep, updateAuthUser } = userSlice.actions;
export default userSlice.reducer;
