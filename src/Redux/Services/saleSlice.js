import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchRecentVoucher: ""
}

export const saleSlice = createSlice({
  name: 'saleSlice',
  initialState,
  reducers: {
   setSearchRecentVoucher: (state,{payload}) => {
    state.searchRecentVoucher = payload
   }
  },
})

export const { setSearchRecentVoucher } = saleSlice.actions

export default saleSlice.reducer