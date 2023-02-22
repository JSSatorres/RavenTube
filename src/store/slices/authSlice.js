/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    token: '',
  },
  isAuthenticated: false,
  isCeoAuthenticated: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthorization: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setCeoAuthorization: (state, action) => {
      state.isCeoAuthenticated = action.payload;
    },

  },
})

export const {
  setUser,
  setAuthorization,
  setCeoAuthorization,
} = authSlice.actions

export default authSlice.reducer
