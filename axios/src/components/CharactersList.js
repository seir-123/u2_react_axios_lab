import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const CharactersList = () => {
    const [characters, setPlanets] = useState()
    let navigate = useNavigate()
    const show = (index) => {
        navigate(`${index}`)
    }
    useEffect(() => {
        const fetchShips = async () => {
              const response = await axios.get(`https://swapi.dev/api/people`)
              setPlanets(response.data.results)
          };
          fetchShips();
    }, [])
        
    return(
        <div>
            <h1>Characters</h1>
            {characters?.map((characters, index) => ( 
                 <p onClick={() => show(index)} key={index}>{characters.name}</p>
            ))}
        </div>
    )
}

export default CharactersList