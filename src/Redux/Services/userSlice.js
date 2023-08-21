import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userForm1: null,
    userForm2: null,
    userForm3: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserForm1 : (state,{payload}) => {
        state.userForm1 = payload;
      },

      setUserForm2 : (state,{payload}) => {
        state.userForm2 = payload;
      },
    
      setUserForm3 : (state,{payload}) => {
        state.userForm3 = payload;
      },
  },
})

export const { setUserForm1, setUserForm2, setUserForm3 } = userSlice.actions

export default userSlice.reducer