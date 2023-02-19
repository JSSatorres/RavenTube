import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const videosApi = createApi({
  reducerPath: 'videos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
    mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', 'http://localhost:5173');
      headers.set('Access-Control-Expose-Headers', 'X-Total-Count')

      console.log('Headers:', headers);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: (seacrh = '', page = 1, limit = 12) => ({
        url: `/videos?title_like=${seacrh}&_page=${page}&_limit=${limit}`,
        transformResponse: (response) => {
          const totalCount = response.headers.get('X-Total-Count')
          console.log('por ue no funcionooo');
          console.log('response:', response)
          const data = response.json()
          console.log('data:', data)
          return { totalCount, data }
        },
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
