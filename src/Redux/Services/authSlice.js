import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

const initialState = {
    token: null
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    addToken: (state,{payload}) => {
        state.token = payload
        Cookies.set("token",state.token);

    },
    removeToken: (state,{payload}) => {
        state.token = null
        Cookies.remove("token",state.token);

    }
  },
})

export const { addToken, removeToken } = authSlice.actions

export default authSlice.reducer