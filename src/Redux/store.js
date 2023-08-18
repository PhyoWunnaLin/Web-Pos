import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Services/profileSlice'
import mediaSlice from './Services/mediaSlice'
import { authApi } from './API/authApi'
import authSlice from './Services/authSlice'
import { profileApi } from './API/profileApi'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    profileSlice : profileSlice,
    mediaSlice : mediaSlice,
    authSlice : authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, profileApi.middleware),
})