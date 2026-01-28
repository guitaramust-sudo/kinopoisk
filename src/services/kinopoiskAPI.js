import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinopoiskapiunofficial.tech/api',
    prepareHeaders: headers => {
      headers.set('X-API-KEY', '7bef97b4-094b-4458-94c2-f22b5a14d110');
      headers.set('Content-Type', 'application/json');
      return headers; // ← ВАЖНО: вернуть headers
    },
  }),
  endpoints: builder => ({
    getFilmsTop: builder.query({
      query: ({ type, page }) =>
        `v2.2/films/collections?type=${type}&page=${page}`,
    }),

    getFilmsByFilter: builder.query({
      query: (filters = {}) => {
        const params = new URLSearchParams();

        // Добавляем все переданные фильтры
        Object.keys(filters).forEach(key => {
          if (filters[key] !== undefined && filters[key] !== null) {
            params.append(key, filters[key]);
          }
        });
        return `v2.2/films?${params.toString()}`;
      },
    }),
  }),
});

export const { useGetFilmsTopQuery, useGetFilmsByFilterQuery } = kinopoiskApi;
