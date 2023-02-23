import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StarshipPage = () => {
    const [starShips, setStarShips] = useState()


    const { ship_id } = useParams()

    useEffect(() => {
        const fetchShips = async () => {
            const response = await axios.get(`https://swapi.dev/api/starships`)

        let selectedShip = response.data.results.find(
            (ship, index) => index === parseInt(ship_id)
          )
         setStarShips(selectedShip)
        };
        fetchShips();

      


  }, [])

  return starShips ? (
    <div>
      <h1>{starShips.name}</h1>
      <h2>Model: {starShips.model}</h2>
      <h3>Manufacturer: {starShips.manufacturer}</h3>
      <h3>Created in: {starShips.created}</h3>
      <Link to="/starshipslist">Return to Starship List</Link>
    </div>
  ) : null
}

export default StarshipPage