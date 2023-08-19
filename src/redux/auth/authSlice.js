import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  forgotPassword,
  addGoalsThunk,
} from './authOperations';
import {
  updateGoalOperation,
  updateWeightOperation,
} from 'redux/user/userOperations';

const initialState = {
  user: null,
  step: null,
  token: null,
  error: null,
  isLoading: false,
};

const handleAddGoals = (state, { payload }) => {
  state.user = payload;
  state.token = payload.token;
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.user = null;
      state.token = null;
      state.step = null;
      state.error = null;
    },
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
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.avatar = action.payload.avatar;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.error = null;
      })
      .addCase(updateGoalOperation.fulfilled, (state, { payload }) => {
        state.user.goal = payload.goal;
      })
      .addCase(updateWeightOperation.fulfilled, (state, { payload }) => {
        state.user.weight = payload.weight;
      })
      .addCase(addGoalsThunk.fulfilled, handleAddGoals)
      .addCase(addGoalsThunk.rejected, handleRejected)
      .addCase(addGoalsThunk.pending, handlePending)
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.error = action.payload;
        }
      );
  },
});

export const { logout, updateAuthStep, updateAuthUser } = authSlice.actions;
export default authSlice.reducer;
