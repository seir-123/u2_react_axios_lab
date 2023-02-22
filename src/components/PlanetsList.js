import React, { useState, useEffect } from "react";
import axios from "axios";
function PlanetsList() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await axios.get("https://swapi.dev/api/planets/");
      setPlanets(response.data.results);
    }
    fetchPlanets();
  });
  return (
    <div>
      <h1>Planets</h1>
      <ul>
        {planets.map((planet) => (
          <li key={planet.name}>{planet.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetsList;
