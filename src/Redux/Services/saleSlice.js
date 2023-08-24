import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchRecentVoucher: "",
  searchSaleProduct: "",
  selectReceivePd: 1,
  qty: null
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

  setSelectReceivePd : (state,{payload}) => {
    state.selectReceivePd = payload;
  },

  setQty : (state,{payload}) => {
    state.qty = payload;
  },
  },
})

export const { setSearchRecentVoucher,setSearchSaleProduct, setSelectReceivePd, setQty } = saleSlice.actions

export default saleSlice.reducer