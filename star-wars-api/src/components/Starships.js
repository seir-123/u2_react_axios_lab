import StarshipsList from "./StarshipsList"
import { useState, useEffect } from 'react'
import axios from 'axios';
import { STARSHIPS_URL } from "../globals";



const Starships = () => {
    
    const [starships, setStarships] = useState ([])
    

    useEffect(() =>{
        const getStarships = async () => {
            const response = await axios.get(`${STARSHIPS_URL}`)
            console.log(response.data.results)
            setStarships(response.data.results)
        }
        getStarships()
    },[])

    return (
        <div>
            <StarshipsList starships={starships}/>
        </div>
        
        
    )
}

export default Starships