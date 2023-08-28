import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token', 'step'],
};
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['breakfast', 'lunch', 'dinner', 'snack', 'id'],
};
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ['transactions.date'],
      },
    }),
});

export const persistor = persistStore(store);
