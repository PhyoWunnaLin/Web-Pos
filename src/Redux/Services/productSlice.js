import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setActive : (state,{payload})=>{
        state.active = payload;
        localStorage.setItem("productActive",state.active);
    },
  },
})

export const { setActive } = productSlice.actions

export default productSlice.reducer