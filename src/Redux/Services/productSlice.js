import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
    brands: null
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setActive : (state,{payload})=>{
        state.active = payload;
        localStorage.setItem("productActive",state.active);
    },

    setBrands : (state,{payload}) => {
      state.brands = payload;
    }
  },
})

export const { setActive, setBrands } = productSlice.actions

export default productSlice.reducer