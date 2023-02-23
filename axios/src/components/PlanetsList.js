import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const PlanetsList = () => {
    const [planets, setPlanets] = useState()
    let navigate = useNavigate()
    const show = (index) => {
        navigate(`${index}`)
    }
    useEffect(() => {
        const fetchShips = async () => {
              const response = await axios.get(`https://swapi.dev/api/planets`)
              console.log(response.data.results)
              setPlanets(response.data.results)
          };
          fetchShips();
    }, [])
        
    return(
        <div>
            <h1>Planets</h1>
            {planets?.map((planet, index) => ( 
                 <p onClick={() => show(index)} key={index}>{planet.name}</p>
            ))}
        </div>
    )
}

export default PlanetsList