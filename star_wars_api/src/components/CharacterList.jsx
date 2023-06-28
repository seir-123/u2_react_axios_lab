import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(`${BASE_URL}people`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacters();
  }, []);

  if (characters.length === 0) {
    return <div>Loading... Chill Out Bruv</div>;
  } else {
    return (
      <div className="character-grid">
        {characters.map((character, index) => (
          <div key={index} className="character">
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default CharacterList;