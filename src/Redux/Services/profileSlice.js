import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adminPp: "Personal",
    adminEditPp: "Personal",
    userPp: "Personal",
    userCreatePp: "Personal"
}

export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setAdminPp : (state,{payload})=>{
      state.adminPp = payload;
      // localStorage.setItem("adminPp",state.adminPp);
    },
    setAdminEditPp : (state,{payload})=>{
      state.adminEditPp = payload;
      // localStorage.setItem("adminEditPp",state.adminEditPp);
    },
    setUserPp : (state,{payload})=>{
      state.userPp = payload;
      // localStorage.setItem("userPp",state.userPp);
    },
    setUserCreatePp : (state,{payload})=>{
      state.userCreatePp = payload;
      // localStorage.setItem("userCreatePp",state.userCreatePp);
    },
  },
})

export const { setAdminPp, setAdminEditPp, setUserPp, setUserCreatePp} = profileSlice.actions

export default profileSlice.reducer