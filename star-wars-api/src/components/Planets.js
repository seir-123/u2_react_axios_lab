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
        <div>
            <PlanetsList planets={planets}/>
        </div>
        
        
    )
}

export default Planets