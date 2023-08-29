import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAcc1: false,
  openAcc2: false,
  openAcc3: false,
  openAcc4: false,
  openAcc5: false,


};

export const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState,
  reducers: {
    setOpenAcc1: (state, { payload }) => {
      (state.openAcc1 = payload),
        localStorage.setItem("openAcc1", state.openAcc1);
    },

    setOpenAcc2: (state, { payload }) => {
      (state.openAcc2 = payload),
        localStorage.setItem("openAcc2", state.openAcc2);
    },

    setOpenAcc3: (state, { payload }) => {
      (state.openAcc3 = payload),
        localStorage.setItem("openAcc3", state.openAcc3);
    },

    setOpenAcc4: (state, { payload }) => {
      (state.openAcc4 = payload),
        localStorage.setItem("openAcc4", state.openAcc4);
    },

    setOpenAcc5: (state, { payload }) => {
      (state.openAcc5 = payload),
        localStorage.setItem("openAcc5", state.openAcc5);
    },


  },
});

export const { setOpenAcc1, setOpenAcc2, setOpenAcc3, setOpenAcc4 ,setOpenAcc5 } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;
