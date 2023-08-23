import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchRecentVoucher: "",
  searchSaleProduct: "",
}

export const saleSlice = createSlice({
  name: 'saleSlice',
  initialState,
  reducers: {
   setSearchRecentVoucher: (state,{payload}) => {
    state.searchRecentVoucher = payload
   },

   setSearchSaleProduct : (state,{payload}) => {
    state.searchSaleProduct = payload;
  },
  },
})

export const { setSearchRecentVoucher,setSearchSaleProduct } = saleSlice.actions

export default saleSlice.reducer