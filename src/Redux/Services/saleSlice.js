import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchRecentVoucher: "",
  searchSaleProduct: "",
  selectReceivePd: 1,
  qty: null,
  saleItem : []
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

  setSaleItem : (state , {payload} ) => {
    state.saleItem = [...state.saleItem,payload]
  }

  },
})

export const { setSearchRecentVoucher,setSearchSaleProduct, setSelectReceivePd, setQty ,setSaleItem } = saleSlice.actions

export default saleSlice.reducer