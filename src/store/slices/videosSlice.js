/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchInfo: '',
  error: null,
  loading: false,
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideosQuery: (state, action) => {
      state.user = action.payload;
    },
    // setAuthorization: (state, action) => {
    //   state.isAuthenticated = action.payload;
    // },
    setVideosLoading: (state, action) => {
      state.loading = action.payload;
    },
    setVideosError: (state, action) => {
      state.error = action.payload;
    },
    // login: (state, action) => {
    //   state.loading = true;
    //   state.error = null;
    // },
    // loginSuccess: (state, action) => {
    //   state.user = action.payload;
    //   state.loading = false;
    //   state.error = null;
    // },
    // loginFailed: (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // },
    // logout: (state) => {
    //   state.user = {
    //     email: '',
    //     token: '',
    //   };
    // },
  },
})

export const {
  setVideosQuery,
  setVideosLoading,
  setVideosError,
} = videosSlice.actions

export default videosSlice.reducer
