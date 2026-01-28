import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const location = useLocation();
  const filmData = location.state?.filmData; // ← получаем из location.state

  console.log('Film data:', filmData);

  if (!filmData) {
    return <div>Данные о фильме не найдены</div>;
  }

  return (
    <div>
      <h1>{filmData.nameRu}</h1>
      <img src={filmData.posterUrl} alt={filmData.nameRu} width="300px" />
      <p>Год: {filmData.year}</p>
      <p>Рейтинг: {filmData.ratingKinopoisk}</p>
      <p>
        Жанры:
        {filmData.genres.map(element => {
          return element.genre + ' ';
        })}
      </p>
    </div>
  );
};

export default MovieDetail;
