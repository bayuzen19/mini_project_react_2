import React from 'react';

const FilmCard = ({ film }) => {
  return (
    <div className="film-card">
      <h3 className="film-title">{film.title}</h3>
      <p>Director: {film.director}</p>
      <p>Producer: {film.producer}</p>
      <p>Episode: {film.episode_id}</p>
      <p>Release Date: {film.release_date}</p>
    </div>
  );
};

export default FilmCard;