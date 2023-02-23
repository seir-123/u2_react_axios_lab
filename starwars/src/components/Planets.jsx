import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function PlanetsList(){

  const [planets, setPlanets] = useState([])

  useEffect(()=>{
    const getPlanets = async() => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)
      setPlanets(response.data.results)
    }
    getPlanets()
  },[])

  let navigate = useNavigate()

  const showPlanet = (key) => {
    navigate(`${key}`)
  }
  
  return(
    <div className="planets">
      <h2>List of Planets</h2>
      {
        planets.map((planet, key) => (
          <div key={key} onClick={() => showPlanet(key)} className="card">
            <h3>{planet.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
