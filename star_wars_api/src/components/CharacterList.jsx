import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../globals';
import { useNavigate } from "react-router-dom"

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  let navigate = useNavigate()

  const showCharacter = (character) => {
    navigate(`${character.name}`, {state:{character:character}})
  
  }
  
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

  console.log(characters)

  if (characters.length === 0) {
    return <div>Loading... Chill Out Bruv</div>;
  } else {
    return (
      <div className="character-grid">
        {characters.map((character, index) => (
          <div key={index}className="character" onClick={()=> showCharacter(character)}>
            <h3>{character.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default CharacterList;