import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
    selectActive: null,
    onclickActive: null,
    selectImg: null,
    insert: false,
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
  },

    setSelectImg : (state,{payload})=>{
      state.selectImg = payload;
    },

    setInsert : (state,{payload})=>{
      state.insert = payload;
    }
  },
})

export const { setActive, setSelectActive, setOnclickActive, setSelectImg, setInsert } = mediaSlice.actions

export default mediaSlice.reducer