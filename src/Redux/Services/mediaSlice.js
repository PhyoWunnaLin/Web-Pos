import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
    selectActive: null,
    onclickActive: null
}

export const mediaSlice = createSlice({
  name: 'mediaSlice',
  initialState,
  reducers: {
    setActive : (state,{payload})=>{
        state.active = payload;
        localStorage.setItem("active",state.active);
    },

    setSelectActive : (state,{payload})=>{
      state.selectActive = payload;
  },

  setOnclickActive : (state,{payload})=>{
    state.onclickActive = payload;
}
  },
})

export const { setActive, setSelectActive, setOnclickActive } = mediaSlice.actions

export default mediaSlice.reducer