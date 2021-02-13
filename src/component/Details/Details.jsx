import style from "./style.module.css";

export default function Details({ movie }) {
  const img = movie.poster_path;
  return (
    <div className={style.content}>
      <img
        src={`https://image.tmdb.org/t/p/w300${img}`}
        alt={movie.title}
        className={style.image}
      />
      <li className={style.details}>
        <h2>
          {movie.title} ({movie.release_date})
        </h2>
        <p>User Score: {movie.popularity}%</p>

        <h3>Overview</h3>
        <p className={style.overview}> {movie.overview}</p>
        <h4>Genres</h4>
        {movie.genres.map(({ name, id }) => (
          <p key={id} className={style.genres}>
            {name}
          </p>
        ))}
      </li>
    </div>
  );
}
