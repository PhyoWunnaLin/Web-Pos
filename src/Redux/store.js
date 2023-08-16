import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Services/profileSlice'
import mediaSlice from './Services/mediaSlice'

export const store = configureStore({
  reducer: {
    profileSlice : profileSlice,
    mediaSlice : mediaSlice
  },
})