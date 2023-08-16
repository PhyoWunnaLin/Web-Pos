import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null
}

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    setActive : (state,{payload})=>{
        state.active = payload;
        localStorage.setItem("active",state.active);
    }
  },
})

export const { setActive } = mediaSlice.actions

export default mediaSlice.reducer