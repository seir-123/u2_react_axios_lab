import React, { useState, useEffect } from "react";
import axios from "axios";

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    }
    fetchCharacters();
  });
  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersList;
