import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const StarshipsList = () => {
    const [starShips, setStarShips] = useState()
    let navigate = useNavigate()
    const show = (index) => {
        navigate(`${index}`)
    }
    useEffect(() => {
        const fetchShips = async () => {
              const response = await axios.get(`https://swapi.dev/api/starships`)
              console.log(response.data.results)
              setStarShips(response.data.results)
          };
          fetchShips();
    }, [])
        
    return(
        <div>
            <h1>Starships</h1>
            {starShips?.map((ship, index) => ( 
                 <p onClick={() => show(index)} key={index}>{ship.name}</p>
            ))}
        </div>
    )
}

export default StarshipsList