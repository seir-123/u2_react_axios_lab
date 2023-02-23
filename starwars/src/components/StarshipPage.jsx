import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails(){
  
  const [starship, setStarship] = useState()
  let {id} = useParams()

  useEffect(()=>{
    const getStarship = async() => {
      const response = await axios.get(`https://swapi.dev/api/starships/`)
      setStarship(response.data.results[id])
    }
    getStarship()
  },[])


  return starship ? (
    <div className="detail">
      <h2>Name: {starship.name}</h2>
      <h2>Model: {starship.model}</h2>
      <h2>Manufacturer: {starship.manufacturer}</h2>
      <h2>Length: {starship.length}</h2>
      <h2>Crew: {starship.crew}</h2>
      <h2>Passengers: {starship.passengers}</h2>
      <h2>Cargo Capacity: {starship.cargo_capacity}</h2>
      <Link to="/StarshipsList" className="back-link">⬅ Return to starship list</Link>
    </div>
  ) : <h3>Finding starships...</h3>
}
