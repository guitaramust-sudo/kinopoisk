import { configureStore } from '@reduxjs/toolkit';

import { currentQuerySlice } from '../features/currentQuery';
import { kinopoiskApi } from '../services/kinopoiskAPI';

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: currentQuerySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
