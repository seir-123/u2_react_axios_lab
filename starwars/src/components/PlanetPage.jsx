import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PlanetDetail(){

  const [planet, setPlanet] = useState()
  let {id} = useParams()

  useEffect(()=>{
    const getPlanet = async() => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)
      setPlanet(response.data.results[id])
      console.log("the planet:",planet)
    }
    getPlanet()
  },[])

  return planet ? (
    <div className="detail">
      <h2>Name: {planet.name}</h2>
      <h2>Rotation Period: {planet.rotation_period}</h2>
      <h2>Orbital Period: {planet.orbital_period}</h2>
      <h2>Diameter: {planet.diameter}</h2>
      <h2>Gravity: {planet.gravity}</h2>
      <h2>Terrain: {planet.terrain}</h2>
      <h2>Surface Water: {planet.surface_water}</h2>
      <h2>Population: {planet.population}</h2>
      <Link to="/Planets" className="back-link">⬅ Return to planets list</Link>
    </div>
  ) : <h3>Searching space for planet...</h3>
}
