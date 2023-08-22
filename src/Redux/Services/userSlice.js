import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userForm1: null,
    userForm2: null,
    userForm3: null,
    users: null,
    searchUnBanUser: "",
    searchBanUser: ""
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

      setUsers : (state,{payload}) => {
        state.users = payload;
      },

      setSearchUnBanUser : (state,{payload}) => {
        state.searchUnBanUser = payload;
      },

      setSearchBanUser : (state,{payload}) => {
        state.searchBanUser = payload;
      },
  },
})

export const { setUserForm1, setUserForm2, setUserForm3, setUsers, setSearchUnBanUser, setSearchBanUser } = userSlice.actions

export default userSlice.reducer