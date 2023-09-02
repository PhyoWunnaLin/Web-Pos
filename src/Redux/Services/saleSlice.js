import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  searchRecentVoucher: "",
  searchSaleProduct: "",
  selectReceivePd: 1,
  products: [],
  qty: "1",
  saleItem: [],
  total: 0,
  tax:0,
  receiveData: null,
  firstDelete:null,
  saleClose : Cookies.get("sale") === "true" || Cookies.get("sale") === "false" ? Cookies.get("sale") : "false" ,
};

const totalAmount = (saleItem) => {
  return saleItem.reduce(
    (total, item) => total + item.sale_price * item.quantity,
    0
  );
};

const totalTax = (saleItem) => {
  return saleItem.reduce(
    (total, item) => (total + item.sale_price * item.quantity) * (5/100),
    0
  );
};


export const saleSlice = createSlice({
  name: "saleSlice",
  initialState,
  reducers: {
    setProducts: (state, {payload}) =>{
      state.products = payload
    },

    setSearchRecentVoucher: (state, { payload }) => {
      state.searchRecentVoucher = payload;
    },

    setSearchSaleProduct: (state, { payload }) => {
      state.searchSaleProduct = payload;
    },

    setSelectReceivePd: (state, { payload }) => {
      state.selectReceivePd = payload;
      state.firstDelete = true;
    },

    setQty: (state, { payload }) => {
      state.saleItem.map((item) => {
        if ( state.firstDelete && item.id === payload.id) {
          return (
            (item.quantity = payload.q),
            (state.firstDelete = false),
            (state.total = totalAmount(state.saleItem)),
            (state.tax = totalTax(state.saleItem))
          )
        } else if (item.id === payload.id) {
          return (
            (item.quantity += payload.q),
            (state.total = totalAmount(state.saleItem)),
            (state.tax = totalTax(state.saleItem))
          );
        } else {
          return item;
        }
      });
    },

    setSaleItem: (state, { payload }) => {
      const isExisted = state.saleItem.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.saleItem = [...state.saleItem, { ...payload, quantity: "1" }];
      }
      state.total = totalAmount(state.saleItem);
      state.tax = totalTax(state.saleItem);
    },

    deleteQuantity: (state , {payload}) => {
      state.saleItem.map((item) => {
        if (item.id === payload && item.quantity != "" ) {
          return (
            (item.quantity = item.quantity.substring(0,item.quantity.length - 1))
          );
        } else if (item.quantity == "") {
          return state.saleItem = state.saleItem.filter(item => item.id != payload)
        } else {
          return state
        }
      });
    },

    setReceiveData : (state , {payload}) => {
        state.receiveData = payload
    },

    deleteAllSaleItem : (state) => {
      state.saleItem = []
    },

    setSaleClose : (state, {payload}) =>{
      state.saleClose = payload
      Cookies.set("sale",JSON.stringify(payload));
    }

  },
});

export const {
  setProducts,
  setSearchRecentVoucher,
  setSearchSaleProduct,
  setSelectReceivePd,
  setQty,
  setSaleItem,
  deleteQuantity,
  setReceiveData,
  deleteAllSaleItem,
  setSaleClose
} = saleSlice.actions;

export default saleSlice.reducer;
