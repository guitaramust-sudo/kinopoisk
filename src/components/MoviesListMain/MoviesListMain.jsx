import { Backdrop } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useGetFilmsByFilterQuery } from '../../services/kinopoiskAPI';

export default function MoviesListMain({ type }) {
  console.log(type);

  const queryParams = type === 'CARTOONS' ? { genres: 19 } : { type: type };

  const { data, error, isLoading } = useGetFilmsByFilterQuery(queryParams);

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
          <div key={item.kinopoiskId} className="movie-card">
            <Link
              to="/movie"
              state={{ filmData: item }} // ← передаем данные через state
            >
              <img
                src={item.posterUrl}
                width="300px"
                height="400px"
                alt={item.nameRu}
              />
              <h4>{item.nameRu}</h4>
            </Link>
          </div>
        ) : null,
      )}
    </div>
  );
}
