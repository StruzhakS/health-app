import { createSlice } from '@reduxjs/toolkit';
import { signUp, signIn, forgotPassword } from './authOperations';

const initialState = {
  user: null,
  step: null,
  token: null,
  error: null,
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
    updateAuthStep: (state, action) => {
      state.step = action.payload;
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
