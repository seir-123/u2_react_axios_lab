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
        <div className="fullContainer">
            <h2 className="title">List of Starships</h2>
            <div className="listContainer">
            {
                starships.map((starship) => (
                    <div key={starship.name} className="item">
                        <h3>{starship.name}</h3>
                        
                    </div>
                ))
            }
            </div>
        </div>    
        
        
    )
}

export default Starships