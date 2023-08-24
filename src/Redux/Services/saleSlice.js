import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchRecentVoucher: "",
  searchSaleProduct: "",
  selectReceivePd: 1,
  qty: null,
  saleItem : [],
  total:0
}

const totalAmount = (saleItem) => {
  return saleItem.reduce(
    (total, item) => total + item.sale_price * item.quantity ,
    0
  );
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
    const isExisted = state.saleItem.find((item) => item.id === payload.id);
    if(isExisted){
      return state
    }else{
      state.saleItem = [...state.saleItem,{...payload , quantity : 1}];
    }
    state.total = totalAmount(state.saleItem);
  }

  },
})

export const { setSearchRecentVoucher,setSearchSaleProduct, setSelectReceivePd, setQty ,setSaleItem } = saleSlice.actions

export default saleSlice.reducer