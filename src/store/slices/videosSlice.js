/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  type: '',
  error: null,
  allVideos: [],
}

export const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setVideosQuery: (state, action) => {
      state.search = action.payload.search;
      state.canal = action.payload.canal;
    },
    setVideosError: (state, action) => {
      state.error = action.payload;
    },
    setAllVideos: (state, action) => {
      state.allVideos = action.payload;
    },
    setVideoType: (state, action) => {
      state.type = action.payload;
    },
    resetVideoType: (state) => {
      state.search = '';
    },
  },
})

export const {
  setVideosQuery,
  setVideosError,
  setAllVideos,
  setVideoType,
  resetVideoType,
} = videosSlice.actions

export default videosSlice.reducer
