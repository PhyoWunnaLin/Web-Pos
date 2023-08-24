import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
    selectActive: null,
    onclickActive: null,
    selectImg: null,
    insert: false,
    pdSelectImg: null,
    userSelectImg: null,
    adminSelectImg: null,
    pdEditSelectImg: null,
    brandSelectImg: null,
    brandEditSelectImg: null,
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
    },

    setPdSelectImg : (state,{payload})=>{
      state.pdSelectImg = payload;
    },

    setUserSelectImg : (state,{payload})=>{
      state.userSelectImg = payload;
    },

    setAdminSelectImg : (state,{payload})=>{
      state.adminSelectImg = payload;
    },

    setPdEditSelectImg : (state,{payload})=>{
      state.pdEditSelectImg = payload;
    },

    setBrandSelectImg : (state,{payload})=>{
      state.brandSelectImg = payload;
    },

    setBrandEditSelectImg : (state,{payload})=>{
      state.brandEditSelectImg = payload;
    },
  },
})

export const { setActive, setSelectActive, setOnclickActive, setSelectImg, setInsert, setPdSelectImg, setUserSelectImg, setAdminSelectImg, setPdEditSelectImg, setBrandSelectImg, setBrandEditSelectImg } = mediaSlice.actions

export default mediaSlice.reducer