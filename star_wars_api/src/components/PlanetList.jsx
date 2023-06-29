import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../globals';
import { useNavigate } from "react-router-dom"

const PlanetList = () => {
  const [planets, setPlanets] = useState([]);
 
  let navigate = useNavigate()

const showPlanet = (planet) => {
  navigate(`${planet.name}`, {state:{planet:planet}})

}

useEffect(() => {
    const getPlanets = async () => {
      try {
        const response = await axios.get(`${BASE_URL}planets`);
        setPlanets(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getPlanets();
  }, []);

  console.log(planets);

  if (planets.length === 0) {
    return <div>Loading...Don't force it.</div>;
  } else {
    return (
      <div className="planet-grid">
        {planets.map((planet, index) => (
          <div key={index} className="planet" onClick={()=> showPlanet(planet)}>
            <h3>{planet.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default PlanetList;