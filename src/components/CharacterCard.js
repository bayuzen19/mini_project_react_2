import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <h3 className="character-name">{character.name}</h3>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
      <p>Films: {character.films.length}</p>
      <p>Height: {character.height} cm</p>
      <p>Weight: {character.mass} kg</p>
      <p>Eye Color: {character.eye_color}</p>
    </div>
  );
};

export default CharacterCard;