import { useState, useEffect } from 'react'
import  axios  from 'axios'
import { PLANETS_URL } from '../globals'


export default function PlanetsList () {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
      const getPlanets = async () => {
        const response = await axios.get(`${PLANETS_URL}`)
        console.log(response.data.results)
        setPlanets(response.data.results)
      }
  
      getPlanets()
    }, [])
    console.log (planets)
    return (
        <div className="grid" id="planets">
            {
                planets.map((planet) => (
                    <div key={planet.name} className="card">
                        <h2>{planet.name}</h2>
                        <h3>{planet.terrain}</h3>
                    </div>
                ))
            }
        </div>
    )
}