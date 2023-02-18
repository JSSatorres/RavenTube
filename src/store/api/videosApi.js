import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const videosApi = createApi({
  reducerPath: 'videos',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => ({
        url: '/videos',
        // params: {
        //   part: 'snippet',
        //   q: query,
        //   key: import.meta.env.VITE_YOUTUBE_API_KEY,
        //   type: 'video',
        //   maxResults: 12,
        // },
        providesTags: ['Videos'],
      }),
    }),
    setVideos: builder.mutation({
      query: (query) => ({
        url: '/search',
        params: {
          part: 'snippet',
          q: query,
          key: import.meta.env.VITE_YOUTUBE_API_KEY,
          type: 'video',
          maxResults: 10,
        },
        invalidatesTags: ['Videos'],
      }),
    }),
  }),
})

export const { useGetVideosQuery, useSetVideosMutation, usePrefetch } = videosApi
