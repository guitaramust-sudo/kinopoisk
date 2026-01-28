import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import { store } from './app/store.js';
import MoviesListMain from './components/MoviesListMain/MoviesListMain.jsx';
import MoviesListTop from './components/MoviesListTop/MoviesListTop.jsx';
import ActorDetail from './components/pages/ActorDetail/actorDetail.jsx';
import MovieDetail from './components/pages/MovieDetail/movieDetail.jsx';
import MoviesPage from './components/pages/MoviesPage/movies.jsx';
import { MOVIE_LISTS, TOP_LISTS } from './constants.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MoviesPage />,
      },
      {
        path: '/movie',
        element: <MovieDetail />,
      },
      {
        path: '/actor/:id',
        element: <ActorDetail />,
      },
      ...TOP_LISTS.map(el => ({
        path: el.url,
        element: <MoviesListTop type={el.value} />,
      })),
      ...MOVIE_LISTS.map(el => ({
        path: el.url,
        element: <MoviesListMain type={el.value} />,
      })),
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
