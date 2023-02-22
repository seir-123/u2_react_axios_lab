import PlanetsList from './PlanetsList';
import { useState, useEffect } from 'react'
import axios from 'axios';
import { PLANETS_URL } from "../globals";



const Planets = () => {
    
    const [planets, setPlanets] = useState ([])
    

    useEffect(() =>{
        const getPlanets = async () => {
            const response = await axios.get(`${PLANETS_URL}`)
            console.log(response.data.results)
            setPlanets(response.data.results)
        }
        getPlanets()
    },[])

    return (
        <div className="fullContainer">
            <h2 className="title">List of Planets</h2>
            <div className="listContainer">
                {
                    planets.map((planet) => (
                        <div key={planet.name} className="item">
                            <h3>{planet.name}</h3>
                            
                        </div>
                    ))
                }
            </div>
        </div>
        
        
    )
}

export default Planets