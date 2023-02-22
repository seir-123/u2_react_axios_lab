import React, { useState, useEffect } from "react";
import axios from "axios";
function StarshipsList() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const response = await axios.get("https://swapi.dev/api/starships/");
      setStarships(response.data.results);
    }
    fetchStarships();
  });
  return (
    <div>
      <h1>Starships</h1>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>{starship.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default StarshipsList;
