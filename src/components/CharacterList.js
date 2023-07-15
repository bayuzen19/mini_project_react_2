// CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="character-list">
      {characters.map((character) => (
        <div className="character-card" key={character.name}>
          <h3>{character.name}</h3>
          <p>Gender: {character.gender}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Height: {character.height} cm</p>
          <p>Mass: {character.mass} kg</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
