import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import videosReducer from './slices/videosSlice'
import { videosApi } from './api/videosApi'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    auth: authReducer,
    videos: videosReducer,
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(videosApi.middleware),

})
