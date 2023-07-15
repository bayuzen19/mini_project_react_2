import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import FilmList from './components/FilmList';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [activeTab, setActiveTab] = useState('films');

  useEffect(() => {
    fetchFilms();
    fetchCharacters();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/films/');
      setFilms(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Header />

      <div className="tab-container">
        <button
          className={`tab ${activeTab === 'films' ? 'active' : ''}`}
          onClick={() => handleTabChange('films')}
        >
          Films
        </button>
        <button
          className={`tab ${activeTab === 'characters' ? 'active' : ''}`}
          onClick={() => handleTabChange('characters')}
        >
          Characters
        </button>
      </div>

      <div className="content-container">
        {activeTab === 'films' && <FilmList films={films} />}
        {activeTab === 'characters' && <CharacterList characters={characters} />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
