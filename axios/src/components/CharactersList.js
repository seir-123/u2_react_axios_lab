import { useState, useEffect } from 'react'
import axios from 'axios'


const CharactersList = () => {
    const [starShips, setStarShips] = useState()
    useEffect(() => {
        const fetchShips = async () => {
              const response = await axios.get(`https://swapi.dev/api/people`)
              console.log(response.data.results)
              setStarShips(response.data.results)
          };
          fetchShips();
    }, [])
        
    return(
        <div>
            <h1>Characters</h1>
            {starShips?.map((ship) => ( 
                 <p key={ship.name}>{ship.name}</p>
            ))}
        </div>
    )
}

export default CharactersList