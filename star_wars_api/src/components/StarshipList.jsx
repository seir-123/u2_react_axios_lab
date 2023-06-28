import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../globals';
import { useNavigate } from "react-router-dom"

const StarshipList = () => {
  const [starships, setStarships] = useState([]);
 
  let navigate = useNavigate()

const showShip = (starship) => {
  navigate(`${starship.name}`, {state:{starship:starship}})

}


  useEffect(() => {
    const getStarships = async () => {
      try {
        const response = await axios.get(`${BASE_URL}starships`);
        setStarships(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getStarships();
  }, []);

  console.log(starships);

  if (starships.length === 0) {
    return <div>Loading...Don't force it.</div>;
  } else {
    return (
      <div className="ship-grid">
        {starships.map((starship, index) => (
          <div key={index} className="ship" onClick={()=> showShip(starship)}>
            <h3>{starship.name}</h3>
          </div>
        ))}
      </div>
    );
  }
};

export default StarshipList;