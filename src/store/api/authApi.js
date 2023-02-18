import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// const mock = new MockAdapter(axios);

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rabenloop.com/api/auth' }),
  endpoints: (builder) => ({
    getuserByid: builder.query({
      query: (id) => `/user/${id}`,
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

// mock.onPost('https://rabenloop.com/api/auth/login').reply(200, { token: 'mytoken' });

export const { useGetPokemonByNameQuery, useLoginMutation } = authApi
