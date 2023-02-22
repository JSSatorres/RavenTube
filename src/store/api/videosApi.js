import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const videosApi = createApi({
  reducerPath: 'videosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    // getVideos: builder.query({
    //   query: ({ search = '', page = 1, limit = 12 }) => ({
    //     url: `/videos?title_like=${search}&_page=${page}&_limit=${limit}`,
    //     providesTags: ['Videos'],
    //   }),
    // }),
    getVideoById: builder.query({
      query: (id) => `videos/${id}`,
    }),
    getTotalVideos: builder.query({
      query: ({ search = '' }) => ({
        url: `/videos?title_like=${search}`,
        providesTags: ['Videos'],
      }),
    }),
    // setVideos: builder.mutation({
    //   query: (query) => ({
    //     url: '/search',
    //     params: {
    //       part: 'snippet',
    //       q: query,
    //       key: import.meta.env.VITE_YOUTUBE_API_KEY,
    //       type: 'video',
    //       maxResults: 10,
    //     },
    //     invalidatesTags: ['Videos'],
    //   }),
    // }),
  }),
})

export const { useGetVideosQuery, useGetTotalVideosQuery, useGetVideoByIdQuery } = videosApi
