//map, guard operator, useEffect, route, axios api call,
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Starship = () => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const getStarships = async () => {
            let response = await axios.get("https://swapi.dev/api/starships")
            setStarships(response.data.results)
            console.log(response)
        }
        getStarships()
    }, [])
    if (Starship.length == 0) {
        return <h3>Loading...</h3>
    } else {
        return (
            <div className="flex">
                {starships.map((starship) => (
                    <div key={starship.name} className="flex-item">
                        <h3>{starship.name}</h3>
                    <Link to={'/starships/${starship.url.match(/\d+/)[0]}'}>
                        <button className="details-btn">View Details</button>
                    </Link>
            </div>
        ))}
    </div>
)}}
export default Starship