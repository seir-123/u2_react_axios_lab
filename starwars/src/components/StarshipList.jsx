import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";




export default function StarshipList ({starShips}) {

    const [shipList, setShipList] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    setShipList(starShips);
  }, []);
  const showShips = (ship) => {
    navigate(`${ship}`);
  };

    return (
        <div className='card'>
            {
                starShips.map((starShip, index) =>(
                       <div key={index} onClick={() => showShips(index)}>
                        <h1> Model: {starShip.name}</h1>
                        <h4>Manufacturer: {starShip.manufacturer}</h4>
                        <h4>Length: {starShip.length}</h4>
                        <h4>Cost in credits: {starShip.cost_in_credits}</h4>
                        </div>    
                        
                        
                ))
            }
        </div>
    )
    }
   