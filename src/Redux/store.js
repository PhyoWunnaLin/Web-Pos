import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Services/profileSlice'
import mediaSlice from './Services/mediaSlice'
import { authApi } from './API/authApi'
import authSlice from './Services/authSlice'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    profileSlice : profileSlice,
    mediaSlice : mediaSlice,
    authSlice : authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})