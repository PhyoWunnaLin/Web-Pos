import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profileNavLinkActive: ""
}

export const profileSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setProfileNavLinkActive : (state,{payload})=>{
        state.profileNavLinkActive = payload;
        localStorage.setItem("profileNavLinkActive",state.profileNavLinkActive);
    }
  },
})

export const { setProfileNavLinkActive} = profileSlice.actions

export default profileSlice.reducer