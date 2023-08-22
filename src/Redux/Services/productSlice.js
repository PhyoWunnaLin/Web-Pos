import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
    brands: null,
    pdForm1: null,
    pdForm2: null,
    pdForm3: null,
    searchProduct: "",
    searchBrand: "",
    searchStock: ""
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
    },

    setPdForm1 : (state,{payload}) => {
      state.pdForm1 = payload;
    },

    setPdForm2 : (state,{payload}) => {
      state.pdForm2 = payload;
    },

    setPdForm3 : (state,{payload}) => {
      state.pdForm3 = payload;
    },

    setSearchProduct : (state,{payload}) => {
      state.searchProduct = payload;
    },

    setSearchBrand : (state,{payload}) => {
      state.searchBrand = payload;
    },

    setSearchStock : (state,{payload}) => {
      state.searchStock = payload;
    },
  },
})

export const { setActive, setBrands, setPdForm1, setPdForm2, setPdForm3, setSearchProduct, setSearchBrand, setSearchStock } = productSlice.actions

export default productSlice.reducer