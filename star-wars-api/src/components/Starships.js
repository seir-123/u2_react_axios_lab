import StarshipsPage from "./StarshipsPage"
import { useState, useEffect } from 'react'
import axios from 'axios';
import { STARSHIPS_URL } from "../globals";
import { useNavigate } from "react-router-dom";



const Starships = (props) => {
    
    
    
    let navigate = useNavigate()

    const showStarship = (starship) => {
        navigate(`${starship.name}`)
        console.log("did it work?")
        console.log()
    }

    useEffect(() =>{
        const getStarships = async () => {
            const response = await axios.get(`${STARSHIPS_URL}`)
            console.log(response.data.results)
            props.setStarships(response.data.results)
        }
        getStarships()
    },[])

    return (
        <div className="fullContainer">
            <h2 className="title">List of Starships</h2>
            <div className="listContainer">
            {
                props.starships.map((starship) => (
                    <div key={starship.name} className="item" onClick={() => showStarship(starship)} >
                        <h3>{starship.name}</h3>
                        
                    </div>
                ))
            }
            </div>
        </div>    
        
        
    )
}

export default Starships