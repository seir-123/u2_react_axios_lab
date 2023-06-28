import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../globals';

const Planets = () => {
  const [planets, setPlanets] = useState([]);

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
    return <div>Loading...Let it a breathe a bit.</div>;
  } else {
    return (
      <div className="planet-grid">
        {planets.map((planet, index) => (
          <div key={index} className="planet">
            <h3>{planet.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default Planets;

