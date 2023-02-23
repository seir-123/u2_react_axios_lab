import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const PlanetsPage = () => {
    const [planets, setPlanets] = useState()


    const { planet_id } = useParams()

    useEffect(() => {
        const fetchPlanets = async () => {
            const response = await axios.get(`https://swapi.dev/api/planets`)

        let selectedPlanet = response.data.results.find(
            (planet, index) => index === parseInt(planet_id)
          )
         setPlanets(selectedPlanet)
        };
        fetchPlanets();

      


  }, [])

  return planets ? (
    <div>
      <h1>{planets.name}</h1>
      <h2>Climate: {planets.climate}</h2>
      <h3>Terrain: {planets.terrain}</h3>
      <h3>Population: {planets.population}</h3>
      <Link to="/planetslist">Return to Planets List</Link>
    </div>
  ) : null
}

export default PlanetsPage