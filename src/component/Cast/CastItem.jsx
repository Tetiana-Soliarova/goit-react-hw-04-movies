import React from 'react'
import style from './styleCast.module.css'


export default function CastItem({ actors }) {
  return (
    <>
      {actors.map((actor) => (
        <li key={actor.id} className={style.card}>
          <img
            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
            className={style.foto}
          ></img>
          <div className={style.text}>
            <p className={style.textCard}>{actor.name}</p>
            <p className={style.textCard}>Character: {actor.character} </p>
          </div>
        </li>
      ))}
    </>
  );
};


