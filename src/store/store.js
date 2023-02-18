import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import videosReducer from './slices/videosSlice'
import { authApi } from './api/authApi'
import { videosApi } from './api/videosApi'

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    auth: authReducer,
    vides: videosReducer,
    [authApi.reducerPath]: authApi.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(videosApi.middleware)
    .concat(authApi.middleware),
})
