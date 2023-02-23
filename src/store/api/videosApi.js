import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const videosApi = createApi({
  reducerPath: 'videosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getVideoById: builder.query({
      query: (id) => `videos/${id}`,
    }),
    getTotalVideos: builder.query({
      query: ({ search = '' }) => ({
        url: `/videos?title_like=${search}`,
        providesTags: ['Videos'],
      }),
    }),
    deleteVideoById: builder.mutation({
      query: (id) => ({
        url: `videos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Videos'],
    }),
  }),
})

export const {
  useGetVideosQuery, useGetTotalVideosQuery, useGetVideoByIdQuery, useDeleteVideoByIdMutation,
} = videosApi
