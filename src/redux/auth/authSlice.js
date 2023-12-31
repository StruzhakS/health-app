import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  forgotPassword,
  addGoalsThunk,
  logoutUserThunk,
} from './authOperations';
import {
  updateGoalOperation,
  updateSettingsOperations,
  updateWeightOperation,
} from 'redux/user/userOperations';

const initialState = {
  user: null,
  step: null,
  token: null,
  error: null,
  isLoading: false,
};
const handleSignUpFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.user.token;
  state.error = null;
  state.avatar = payload.user.avatar;
  state.isLoading = false;
};
const handleSignInFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.user.token;
  state.error = null;
  state.isLoading = false;
};
const handleAddGoalsFulfilled = (state, { payload }) => {
  state.user = payload;
  state.token = payload.token;
  state.isLoading = false;
};
const handleForgotPasswordFulfilled = state => {
  state.error = null;
  state.isLoading = false;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
const handleLogoutFulfilled = state => {
  state.user = null;
  state.step = null;
  state.token = null;
  state.error = '';
  state.isLoading = false;
};
const handleUpdateSettingsOperations = (state, { payload }) => {
  state.user.name = payload.name;
  state.user.gender = payload.gender;
  state.user.age = payload.age;
  state.user.height = payload.height;
  state.user.weight = payload.weight;
  state.user.activity = payload.activity;
  state.user.avatarURL = payload.avatarURL;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthStep: (state, { payload }) => {
      state.step = { ...state.step, ...payload };
    },
    updateAuthUser: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.fulfilled, handleSignUpFulfilled)
      .addCase(signIn.fulfilled, handleSignInFulfilled)
      .addCase(forgotPassword.fulfilled, handleForgotPasswordFulfilled)
      .addCase(updateGoalOperation.fulfilled, (state, { payload }) => {
        state.user.goal = payload.goal;
      })
      .addCase(updateWeightOperation.fulfilled, (state, { payload }) => {
        state.user.weight = payload.weight;
      })
      .addCase(
        updateSettingsOperations.fulfilled,
        handleUpdateSettingsOperations
      )
      .addCase(addGoalsThunk.fulfilled, handleAddGoalsFulfilled)
      .addCase(logoutUserThunk.fulfilled, handleLogoutFulfilled)
      .addMatcher(
        isAnyOf(
          signUp.pending,
          signIn.pending,
          forgotPassword.pending,
          updateGoalOperation.pending,
          updateWeightOperation.pending,
          updateSettingsOperations.pending,
          addGoalsThunk.pending,
          logoutUserThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          signUp.rejected,
          signIn.rejected,
          forgotPassword.rejected,
          updateGoalOperation.rejected,
          updateWeightOperation.rejected,
          updateSettingsOperations.rejected,
          addGoalsThunk.rejected,
          logoutUserThunk.rejected
        ),
        handleRejected
      );
  },
});

export const { updateAuthStep, updateAuthUser } = authSlice.actions;
export default authSlice.reducer;
