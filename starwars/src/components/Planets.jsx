import axios from "axios"
import { useEffect, useState } from "react"

export default function PlanetsList(props){
  const [planets, setPlanets] = useState([])
  useEffect(()=>{
    const getPlanets = async() => {
      const response = await axios.get(`https://swapi.dev/api/planets/`)
      setPlanets(response.data.results)
      console.log(response)
    }
    
    getPlanets()
  },[])
  return(
    <div className="planets">
      <h2>List of Planets</h2>
      {
        planets.map((planet) => (
          <div key={planet.name} className="planet-card">
            <h3>{planet.name}</h3>
          </div>
        ))
      }
    </div>
  )
}
