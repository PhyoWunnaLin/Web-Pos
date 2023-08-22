import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    active: null,
    brands: null,
    // product 
    pdForm1: null,
    pdForm2: null,
    pdForm3: null,
    // product end 
    searchProduct: "",
    searchBrand: "",
    searchStock: "",

    // editProduct 
    editPdForm1: null,
    editPdForm2: null,
    editPdForm3: null,
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

    // edit product 
    setEditPdForm1 : (state,{payload}) => {
      state.editPdForm1 = payload;
    },

    setEditPdForm2 : (state,{payload}) => {
      state.editPdForm2 = payload;
    },

    setEditPdForm3 : (state,{payload}) => {
      state.editPdForm3 = payload;
    },
  },
})

export const { setActive, setBrands, setPdForm1, setPdForm2, setPdForm3, setSearchProduct, setSearchBrand, setSearchStock, setEditPdForm1, setEditPdForm2, setEditPdForm3 } = productSlice.actions

export default productSlice.reducer