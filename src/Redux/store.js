import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './Services/profileSlice'

export const store = configureStore({
  reducer: {
    profileSlice : profileSlice
  },
})