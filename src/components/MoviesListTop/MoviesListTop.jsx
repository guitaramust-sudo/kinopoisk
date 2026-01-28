import { Backdrop } from '@mui/material';

import './movie-card.css';

import React from 'react';

import { useGetFilmsTopQuery } from '../../services/kinopoiskAPI';

export default function MoviesListTop({ type }) {
  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: type,
    page: 1,
  });
  console.log(type);

  if (isLoading) {
    return (
      <Backdrop
        sx={theme => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      />
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2em',
        margin: 'auto',
        marginTop: '3rem',
      }}
    >
      {data.items.map(item =>
        item.posterUrl !==
        'https://kinopoiskapiunofficial.tech/images/posters/kp/no-poster.png' ? (
          <div className="movie-card">
            <img src={item.posterUrl} width="300px" height="400px"></img>
            <h4>{item.nameRu}</h4>
          </div>
        ) : null,
      )}
    </div>
  );
}
